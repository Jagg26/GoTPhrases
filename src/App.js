import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Container = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #555864 0%, #555864 40%, #242424 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  //States
  const [ phrase, setPhrase ] = useState({});

  const consultAPI = async () => {
    const api = await fetch('https://got-quotes.herokuapp.com/quotes');
    const phrase = await api.json()
    setPhrase(phrase);
  }


  //Load Phrase
  useEffect( () => {
    consultAPI();
  }, [])
  

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />

      <Button
        onClick={consultAPI}
      >
        Get Phrase
    </Button>
    </Container>
  );
}

export default App;
