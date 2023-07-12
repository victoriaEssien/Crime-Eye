

import supabase from "../client";
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

import AppNavBar from "../Components/AppNavBar"
import ProductCard from "../Components/ProductCard"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Store({ token }) {

  let navigate = useNavigate()

  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()

      if (error) {
        setProducts(null)
        console.log(error);
      }

      if (data) {
        setProducts(data)
      }
    }

    fetchProducts()

  }, [])

  
  function handleLogOut() {
      sessionStorage.removeItem('token')
      navigate('/login')
  }

  return (
    <div className="dash-body-whole">
      <AppNavBar onClick={handleLogOut} />
        <div className="dashboard">
          <div className="quiz-headings">
          <h3 className="store-header">Crime Eye swag</h3>
          <p>{token.user.user_metadata.points} points <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon></p>
          </div>
          <p>Use your points to purchase some merchandise</p>
          <section className="quiz-body">
          {products && (
            <div className="quizzes">
              <div className="quiz-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
          </section>
      </div>
    </div>
  )
}

export default Store