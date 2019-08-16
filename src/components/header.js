import React from "react";

import { Jumbotron, JumboTitle, titleWrapper } from "../styledComponents"


const Header = () => {
    return (
        <Jumbotron>
            <titleWrapper>
                <JumboTitle>Rick & Morty Universe</JumboTitle>
            </titleWrapper>
        </Jumbotron>
    )

}

export default Header;