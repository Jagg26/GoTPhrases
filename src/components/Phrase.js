import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;

    @media (min-width: 992px){
        margin-top: 5rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position:relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }

    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Phrase = ({ phrase }) => {
    return (
        <PhraseContainer>
            <h1 id="text">{phrase.quote}</h1>
            <p id="author">{phrase.character}</p>
        </PhraseContainer>
    );
}

Phrase.propTypes = {
    phrase: PropTypes.object.isRequired
}

export default Phrase;