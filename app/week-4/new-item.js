"use client";

import { useState } from "react";

export default function NewItem(){
    
    const[quantity,setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    };

    let buttonStyles = "w-8 bg-blue-500 text white font-semibold rounded-lg shadow-md hover:bg-blue-700" 
    "focus:outline-none focus:ring-blue-400 focus:ring-opacity-75";

    
    return (
        <div class= "p-2 m-4 bg-white text-white w-36">
        <div class= "flex justify-between"> 
        <span class= "text-black">{quantity}</span>
            <div>
            <button onClick={increment} className={buttonStyles}>+</button>
            <button onClick={decrement} className={buttonStyles}>-</button>
            </div>
        </div>
        
        </div>
    );
}

