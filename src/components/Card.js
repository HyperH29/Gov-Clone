import {Row, Col} from "react-bootstrap";
function Card() {

// This is the card element which set on the activity and features section of the home page
    return (
        <div className={"bg-white w-100 mx-auto container-md"}>
            <Row>
                {/*Add styling to the top border of Col Div*/}
                <Col sm className={"border-top border-1 pb-5"}>
                    <h4 className={"text-primary text-decoration-underline"}>Benefits</h4>
                    <p style={{padding: "5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan est. Maecenas consequat eleifend elit,</p>
                </Col>
                <Col sm className={"border-top border-1"}>
                    <h4 className={"text-primary text-decoration-underline"} style={{margin: "5px"}}>Births, deaths, marriages and care</h4>
                    <p style={{padding: "5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan est. Maecenas consequat eleifend elit,</p>
                </Col>
                <Col sm className={"border-top border-1"}>
                    <h4 className={"text-primary text-decoration-underline"} style={{margin: "5px"}}>Business and self-employed</h4>
                    <p style={{padding: "5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan est. Maecenas consequat eleifend elit,</p>
                </Col>
                <Col sm className={"border-top border-1"}>
                    <h4 className={"text-primary text-decoration-underline"} style={{margin: "5px"}}>Business and self-employed</h4>
                    <p style={{padding: "5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan est. Maecenas consequat eleifend elit,</p>
                </Col>
                <Col sm className={"border-top border-1"}>
                    <h4 className={"text-primary text-decoration-underline"} style={{margin: "5px"}}>Business and self-employed</h4>
                    <p style={{padding: "5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan est. Maecenas consequat eleifend elit,</p>
                </Col>
            </Row>
        </div>
    )
}

export default Card