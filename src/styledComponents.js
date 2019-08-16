import styled from "styled-components";

export const Jumbotron = styled.div`
    background-color: peachpuff;
    background-image: url('https://i.imgur.com/M0iD2lF.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding: 260px 0;
`;



export const JumboTitle = styled.h1`
    background:rgba(255,255,255, 0.75);
    margin-top: -70px;
    padding: 20px 30px;

`;

export const CardList = styled.div`
    margin: 50px auto 0;
    max-width: 1200px;
    width: 100%;
    text-align: center;
`;

export const Button = styled.button`
     padding: 15px 20px;
     border: 2px black solid;
     border-radius: 40px;
     background:white;
     cursor:pointer;
     font-size: 20px;
     transition: ease-in-out 0.3s;
     
    :hover {
        background:black;
        color:white;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    margin-top: 40px;
    padding-top: 20px;
`;

export const Card = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-content: center;
    box-shadow: -2px 7px 11px -3px rgba(173,173,173,.50);
    margin: 20px 40px 40px ;
    width: 300px;
`;

