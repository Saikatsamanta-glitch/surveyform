import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import brand_img from '../Resources/brand.png'

export default function Appbar() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            SurveyAI
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}