import Card from 'react-bootstrap/Card';
import {useState} from "react";
//  This is for the activity section of the home page
function Activity(props) {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    return (
        <Card style={{ width: '18rem' }} className={"border-0 border-top py-1 "}>
            <Card.Body >
                <Card.Title className={"text-primary text-decoration-underline"}>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Activity;