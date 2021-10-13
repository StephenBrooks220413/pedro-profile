import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../css/home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home(){
    return (
        <>
            {/*main intro*/}
            <div className={"main-home-img text-white"}>
                <Container>
                    <h1 className={"display-2"}>Auto Savings</h1>
                    <p class={"lead"}>For Savings on the road, go with Pedro</p>
                    <a href="mailto:pdominguez1@yahoo.com" className={"btn btn-primary btn-lg"}>MESSAGE ME</a>
                </Container>
            </div>
            {/*main intro*/}

            {/* content */}
            <Container className={"text-center space"}>
                <Row>
                    <Col className={"text"} xs sm="12" md="4" lg="4">
                        When you are in need of a covered auto policy,
                        and want coverage to cover it all,
                    </Col>
                    <Col xs sm="12" md="4" lg="4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddlQzSeZg4O_VANJOBu0GoQL8gYzFK4xoCQ&usqp=CAU"
                             className={"img-fluid"}
                             alt="car"/>
                    </Col>
                    <Col className={"text"} xs sm="12" md="4" lg="4">
                        Let us cover that for you and find what savings or
                        discounts you may be elgible for.
                    </Col>
                </Row>
            </Container>
            {/* content */}

            {/* content */}
            <Container className={"space"}>
                <h1 className={"text-center"}>About Insurance Policies</h1>
                <hr className={"hr"}/>
                <br/>
                <Row>
                    <Col className={"text"} xs sm="12" md="12" lg="6">
                        When you are in need of a insurance policy,
                        and want coverage to cover it all, get q quote
                        from me. I offer low rates for your every day,
                        especially if you're a senior. I can assist with
                        your home, auto, life and health.
                        <br/>
                        <a href="mailto:pdominguez1@yahoo.com" className={"btn btn-primary"}>ASK NOW</a>
                    </Col>
                    <Col xs sm="12" md="12" lg="6">
                        <img src="https://media.istockphoto.com/photos/business-woman-examining-insurance-policy-picture-id1180387704?b=1&k=20&m=1180387704&s=170667a&w=0&h=4LR27VcXCXVhfH9jvUFCN9_nnU8CEQJmaq8sk3KWD8w="
                             className={"img-fluid"}
                             alt="car"/>
                    </Col>
                </Row>
            </Container>
            {/* content */}
        </>
    )
}