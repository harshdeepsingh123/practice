import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;


 const Heading = () => {

  return (
    <Header>
      <H1>Images</H1>
     
     <p>Best images for  you </p>
    </Header>
  )
}
export default Heading;
