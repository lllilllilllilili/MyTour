import React, { useRef } from "react";
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";

import '../../App.css';

const TourRouteIndex = () => {
const inputRef = useRef();
  return (
    <div className="app">
      <aside className="info-wrapper">
        {/* ////////////////////////////// */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
        {/* ////////////////////////////// */}
        <div className="tour-info"></div>
        {/* ////////////////////////////// */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        {/* ////////////////////////////// */}
        <InputGroup className="mb-3 dropdown">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={() => {
              if (inputRef.current.hasChildNodes()) {
                console.log("child");
                const node = document.getElementById("info-id");
                inputRef.current.removeChild(node);
              }
            }}
          />
          <Button
            onClick={() => {
              const element = {
                $info: Object.assign(
                  document.createElement("div"),
                  {
                    className: "info-result",
                  },
                  {
                    id: "info-id",
                  }
                ),
              };
              const { $info } = element;
              if (!inputRef.current.hasChildNodes())
                inputRef.current.appendChild($info);
            }}
            variant="outline-secondary"
            id="button-addon2"
          >
            Button
          </Button>
        </InputGroup>
        <div ref={inputRef}></div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <div className="img-wrapper">
          <img
            className="img-style"
            src="https://image.flaticon.com/icons/png/512/183/183687.png"
            height="100"
            width="100"
            alt="뒤로가기"
          />
        </div>
      </aside>
      <section className="map-wrapper">
        <InputGroup className="mb-3 place-search">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
        <img
          width="100%"
          height="100%"
          src="https://pbs.twimg.com/media/DgMOdx2U8AAnsr_.jpg"
          alt="맵이 들어갈 자리(대체)"
        />

        <Card className="card-wrapper">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GDkoZRwyHk-IdeD6jCWI61YFbsNbqiBGzHD2TKO5wGXTc5v3kZ6OPYkthr1X0ShZgCQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default TourRouteIndex;
