import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Icon } from 'semantic-ui-react';

import { getData } from '../actions';
import Character from './character';

import { CardList, Button, CardsContainer } from "../styledComponents"


const CharatersList = props => {

    return (
        <CardList >
            <h2>Welcome!</h2>
            <p className="center">Venture forth at your own risk</p>
            <Button onClick={props.getData}><Icon name="users"/> 
                {props.isLoading ? (
                    <Loader type="TailSpin"
                        color="#181ed2"
                        height={80}
                        width={80} />
                ) : ('Character Portal')
                }
            </Button>
            <CardsContainer>
                {props.character &&
                    props.character.map(char =>
                        <Character
                            key={char.id}
                            character={char}
                        />)}
            </CardsContainer>
        </CardList>
    )

}

const mapStateToProps = state => {
    // console.log('charactersList', state.characters)
    return {

        character: state.characters,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getData })(CharatersList);