import supabase from '../client';
import { useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import noMoney from "../assets/no-money.png";

function OrderForm({ token }) {
  let location = useLocation();
  const params = new URLSearchParams(location.search);
  const productName = params.get('product_name');
  const productPrice = parseInt(params.get('product_price'), 10);
  let navigate = useNavigate();

  const [updatedPoints, setUpdatedPoints] = useState(
    token.user.user_metadata.points
  );
  const [shippingAddress, setShippingAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [insufficientFunds, setInsufficientFunds] = useState(false);

  console.log(productName);
  console.log(productPrice);
  console.log(updatedPoints);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (productPrice > updatedPoints) {
        setInsufficientFunds(true);
        return;
      }

      // Update the user metadata in Supabase
      const newPoints = updatedPoints - productPrice;

      const { error } = await supabase.auth.updateUser({
        data: { points: newPoints },
      });

      if (error) {
        console.log(error);
      } else {
        setUpdatedPoints(newPoints);

        const updatedUser = {
          ...token.user,
          user_metadata: { ...token.user.user_metadata, points: newPoints },
        };

        // Update the token in session storage with the updated user object
        const updatedToken = { ...token, user: updatedUser };
        sessionStorage.setItem('token', JSON.stringify(updatedToken));

        // Insert the order into the "orders" table
        const { data, error } = await supabase.from('orders').insert([
          {
            shippingAddress,
            phoneNumber,
            size,
            color,
          },
        ]);

        // Reset the form fields after submitting
        setShippingAddress('');
        setPhoneNumber('');
        setSize('');
        setColor('');

        if (error) {
          console.log(error);
        }

        if (data) {
          console.log('Order submitted:', data);
          navigate('/home');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      {insufficientFunds && (
        <div className='money-div'>
          <img src={noMoney} alt="Girl stressing because there's no money" className='email-pic' style={{marginBottom: "5%"}}/>
          <h4 className='money-header'>Insufficient funds</h4>
          <p className='money-subheader'>Please add more points to your account</p>
          <Button
            className="dash-btn"
            onClick={() => navigate('/home')}
          >
            Go back to Home
          </Button>
        </div>
      )}
      {!insufficientFunds && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="shippingAddress">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              type="text"
              size='lg'
              className='input'
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              size='lg'
              className='input'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="size">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              size='lg'
              className='input'
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            type="submit"
            className="dash-btn"
            style={{ marginTop: '5%', padding: '12px 0'}}
          >
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default OrderForm;