"use client";

import { useState } from "react";

export default function NewItem({onAddItem}){
    
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

    const[name,setName] = useState("");

    const[category,setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = { name,quantity,category };


        onAddItem(item);
        setName("");
        setQuantity("1");
        setCategory("Produce");

    }



    let buttonStyles = "w-8 bg-blue-500 text white font-semibold rounded-lg shadow-md hover:bg-blue-700" 
    "focus:outline-none focus:ring-blue-400 focus:ring-opacity-75";

    
    return (
        <form onSubmit={handleSubmit}
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
                <input type= "text"
                       value={name}
                       placeholder="Item Name"
                       onChange= { (event) => setName(event.target.value)}
                       className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"  
                       required>
                </input>
            </div>
            
            <div className="flex justify-between">
                
                <div class= "p-2 mt-1 rounded-md bg-white text-white w-36">
                    <div class= "flex justify-between">
                    <span class= "text-black">{quantity}</span>
                    <div>
                    <button onClick={decrement} className={buttonStyles}>-</button>
                    <button onClick={increment} className={buttonStyles}>+</button>
                    </div>
                    </div>
                </div>

                <div>
                <select value={category}
                       onChange= { (event) => setCategory(event.target.value)}
                       className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                    <option value disabled>Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
                </div>
            </div>

            <button type ="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white
                    font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline:none
                     focus:ring-blue-400 focus:ring-opacity-75">
                    Add Item</button>
        </form>

    );
}

