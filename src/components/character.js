import React from "react";
import { Icon } from 'semantic-ui-react';

import { Card, CardBody, CardTitle, CardMeta, CardFooter } from "../styledComponents"


const Character = props => {
    return (
        <Card>
            <img src={props.character.image} alt={props.character.name} />
            <CardBody>
                <CardTitle>{props.character.name}</CardTitle>
                <CardMeta>
                    <p>{props.character.species}</p>
                    <p>{props.character.status}</p>
                </CardMeta>
                <p className="card-description">
                    <Icon name='map marker alternate' size='large' color='orange'/> 
                    {props.character.location.name}
                </p>
                <p className="card-description">
                    <Icon name='globe' size='large' color='orange' />  {props.character.origin.name}
                </p>
            </CardBody>
            <CardFooter>
                <p>
                    <Icon name='video' size='large' color='orange' /> {props.character.episode.length}
                </p>
            </CardFooter>
        </Card>
    )
}

export default Character;