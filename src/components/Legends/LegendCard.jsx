import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const LegendCard=({legend})=>{
    const [show,setShow]=useState(false)
    return <Col>
      <Card className="player-card" onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img
            // onClick={() => setShow(!show)}
            variant="top"
            src={legend.img}
          />
        ) : (
          <>
            {/* <Fragment key=> Fragmentin avantajı key propunu alabilmesi ama boş brakırsak yazamayız */}
            <Card.Header>
              <Card.Title>{legend.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {legend.statistics.map((item) => (
                <li className="list-unstyled h5 text-start text-bg-warning ">
                  {" "}
                  🏐 {item}
                </li>
              ))}
            </ul>
            <span>{legend.official_career}</span>
          </>
        )}
      </Card>
    </Col>
}
export default LegendCard