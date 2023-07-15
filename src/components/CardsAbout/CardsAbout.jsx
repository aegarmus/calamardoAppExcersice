import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import teacher from '../../assets/img/calamardoMusicTeacher.jpg'

export const CardsAbout = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teacher} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Calamardo ha desempeñado la docencia de música en las más distinguidas instituciones
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

