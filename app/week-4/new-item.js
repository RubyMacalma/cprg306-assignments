
import { useState } from "react";

export default function newItem(){
    
    let buttonStyles = "w-8 bg-blue-500 text white font-semibold rounded-lg shadow-md hover:bg-blue-700" 
    "focus:outline-none focus:ring-blue-400 focus:ring-opacity-75";

    if (quantity <= 1){
        buttonStyles = "w-8 bg-blue-500 text white font-semibold rounded-lg shadow-md hover:bg-blue-700" 
    "focus:outline-none focus:ring-2 focus:ring bg-gray-400 focus:ring-opacity-75 ml-1";
    }

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
        <p>{quantity}</p>
        <button onClick={increment} className={buttonStyles}></button>
        <button onClick={decrement} className={buttonStyles}></button>
        </div>
    );
};

