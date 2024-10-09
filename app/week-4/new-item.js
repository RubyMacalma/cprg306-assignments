"use client"

import { useState} from "react";

export default function newItem(){

    const[quantity,setQuantity] =useState(0);

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity -1);
        }


    };
    return (
        <div>
        <h2>Increment: {increment}</h2>
        <h2>Decrement:{decrement}</h2>
        <p> quantity: {quantity}</p>
        </div>
    );
}

