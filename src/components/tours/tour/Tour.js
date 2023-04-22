
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Tour(props){
    return (
      
    <main>
      <div className="mainContainer">{props.data.map((ele) => {
        return (
          <div key={ele.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ele.image} />
              <Card.Body>
                <Card.Title>{ele.name}</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Link to={`/info/${ele.name}`}><Button variant="primary">more info</Button></Link>
                
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </main>)
    
}

export default Tour