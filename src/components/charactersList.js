import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { getData } from '../actions'
import Character from './character';


const CharatersList = props => {

    return (
        <div className="cards-container">
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="TailSpin"
                        color="#181ed2"
                        height={80}
                        width={80} />
                ) : ('Get Character Data')
                }
            </button>
            {props.character &&
                props.character.map(char => 
                <Character 
                        key={char.id}
                        character={char}
                        />)}
        </div>
    )
    
}

const mapStateToProps = state => {
    // console.log('charactersList', state.characters)
    return {
        
        character: state.characters,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getData})(CharatersList);