import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SingleCard({product}) {
  return (
    <Card style={{ width: '18rem', margin: '15px' }}>
      <Card.Body>
        <Card.Title><span style={{fontWeight: "bold"}}> Meter No- </span> {product.meterName}</Card.Title>
      </Card.Body>
      <span style={{fontWeight: 'bold', marginBottom: "20px"}}>Name: {product.name}</span>
      <ListGroup className="list-group-flushs" style={{fontWeight: "bold"}}>
        <ListGroup.Item variant="primary">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Consuming rate</ListGroup.Item>
        <ListGroup.Item>01-01-2014: <span style={{color: "red"}}>{product.jan12014}</span></ListGroup.Item>
        <ListGroup.Item>10-01-2014: <span style={{color: "red"}}>{product.jan102014}</span></ListGroup.Item>
        <ListGroup.Item>11-01-2014: <span style={{color: "red"}}>{product.jan112014}</span></ListGroup.Item>
        <ListGroup.Item>12-01-2014: <span style={{color: "red"}}>{product.jan122014}</span></ListGroup.Item>
        <ListGroup.Item>13-01-2014: <span style={{color: "red"}}>{product.jan132014}</span></ListGroup.Item>
        <ListGroup.Item>14-01-2014: <span style={{color: "red"}}>{product.jan142014}</span></ListGroup.Item>
        <ListGroup.Item>15-01-2014: <span style={{color: "red"}}>{product.jan152014}</span></ListGroup.Item>
        <ListGroup.Item>16-01-2014: <span style={{color: "red"}}>{product.jan162014}</span></ListGroup.Item>
        <ListGroup.Item>17-01-2014: <span style={{color: "red"}}>{product.jan172014}</span></ListGroup.Item>
        <ListGroup.Item>18-01-2014: <span style={{color: "red"}}>{product.jan182014}</span></ListGroup.Item>
        <ListGroup.Item>19-01-2014: <span style={{color: "red"}}>{product.jan192014}</span></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default SingleCard;