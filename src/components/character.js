import React from "react";

import { Card } from "../styledComponents"

const Character = props => {
    return (
        <Card>
            <img src={props.character.image} alt={props.character.name} />
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <div className="card-meta">
                    {props.character.species} {props.character.status}
                </div>
                <p className="card-description">
                    {props.character.location.name}
                </p>
                <p className="card-description">
                    {props.character.origin.name}
                </p>
            </div>
            <div className="card-footer">
                {props.character.episode.length}
            </div>
        </Card>
    )
}

export default Character;