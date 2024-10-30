'use client';
import React, {useState} from 'react';
import NewItem from "./new-item";
import ItemList from './item-list';
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItems) => {
    const itemWithId = {
      id: Math.random().toString(36).substring(2, 9),
      ...newItems,
    };

    setItems((prevItems) => [...prevItems, itemWithId]);
  };

    return (
      <main>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem ={handleAddItem}/>
        <ItemList items={items}/>
      </main>
    );
};