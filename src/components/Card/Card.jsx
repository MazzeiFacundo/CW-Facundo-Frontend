import React from "react";
import "./Card.css"

function Card({ invertedText, palindrome, oldText }) {
    if(invertedText) {
        return (
            <div className="cardContainer">
                <h3>
                {palindrome === true ? `${oldText} inverted is: ${invertedText} and it is a palindrome`:
                 `${oldText} inverted is: ${invertedText} and it´s not a palindrome`}</h3>
            </div>
        );
    } else {
        return (
            <div className="cardContainer">
                <h3>Write something to invert it!</h3>
            </div>
        );
    }
    
}

export default Card;