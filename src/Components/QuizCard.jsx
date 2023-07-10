
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function QuizCard({ title, description, destination }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={destination}>
          <Button type="button" className='dash-btn'>Take quiz</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default QuizCard;