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
    max-width: 1600px;
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
    margin: 20px 40px 30px ;
    width: 340px;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 15px 30px 20px;
`;

export const CardTitle = styled.h5`
    font-size:22px;
    font-weight: 800;
    margin: 10px 0 6px ;
    padding-top: 20px;
    text-align:left;
`;

export const CardMeta = styled.div`
    color: gray;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;

    p{
        padding-right: 8px;
    }
`;

export const CardFooter = styled.div`
    border-top: 1px lightgray solid;
    display: flex;
    margin: 10px 30px;
`;


