import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Appbar() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            SurveyAI
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
