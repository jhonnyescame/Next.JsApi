import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { Button, Alert, Container, Row, Col } from 'reactstrap';


const Index = ({dados}) => (
    <Container>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
        <h1>Palestrantes</h1>
        {/* {console.log(dados)} */}
        <FontAwesomeIcon icon="coffee" /><br /><hr/>
        <FontAwesomeIcon icon="award" />
        <Alert color="primary">
            This is a primary alert — check it out!
        </Alert>
        <Button color="danger">Danger!</Button>
        <ul>
            {dados.map(palestrante =>(
                <li key={palestrante.id_palestrante}>
                    <h2>{palestrante.nome_palestrante}</h2>
                    <p>{palestrante.cargo_palestrante}</p>
                </li>
            ))}
        </ul>
    </Container>
);

Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://api.padraoeditorial.com.br/conarec/api/palestrantes'
    );
    // console.log(response);
    return { dados : response.data }
};

export default Index;