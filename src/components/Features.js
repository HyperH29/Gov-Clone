import Card from 'react-bootstrap/Card';
import {useState} from "react";
// This is for the activity section of the home page
function Features(props) {
    const [img, setImg] = useState(props.img);

    return (

        <Card style={{ width: '18rem' }}>
            {/*Add props for this img*/}
            <Card.Img variant="top" src={img} className={"w-50 mx-auto p-2"} />
            <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Card.Text>
            </Card.Body>
            <Card.Body>
            </Card.Body>
        </Card>
    );
}

export default Features;