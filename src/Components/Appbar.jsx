import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function Appbar(props) {
  const {name,data} = props;
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Link to='/' className='text-none text-dark h4'>
            {name}
          </Link>
        </Container>
      </Navbar>
  )
}
