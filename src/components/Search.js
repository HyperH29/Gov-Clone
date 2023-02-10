import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// Section for search bar and popular searches
function Search() {
  return (
    <div className="search bg-light py-5">
        <Container>
            {/*Set Column and Row elements */}
            <Row>
                <Col>
                    {/*Make these A tags when linking to somewhere */}
                    <h3>Popular on GOV.UK</h3>
                    <p className={"pt-2 text-primary text-decoration-underline"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className={"text-primary text-decoration-underline"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className={"text-primary text-decoration-underline"}>Lorem ipsum.</p>
                    <p className={"text-primary text-decoration-underline"}>Lorem ipsum adipiscing elit.</p>
                    <p className={"text-primary text-decoration-underline"}>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col>
                    <h3>Search</h3>
                    <input style={{width: "80%", height: "35px"}}/>
                    <Button>Q</Button>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Search;