import { Card } from 'react-bootstrap';

const ErrorCard = ({ message }) => {
    return(
        <Card style={{ width: '50%', minWidth: 250, margin: 20}}>
            <Card.Body>
                <Card.Title>Error</Card.Title>
                <Card.Subtitle>{message}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default ErrorCard