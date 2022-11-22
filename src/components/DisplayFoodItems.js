import React, {useState} from 'react';
import Item from "./Items";
import { items } from '../data/Data'
import BarChart from './NutritionChart';


const DisplayFoodItems = () => {
    const [selectedItem, setSelectedItem] = useState({})
    const handleClick = (currentItem) => {
    setSelectedItem(currentItem)
    }
    return (
        <>        <ul>
            {items.map((food) => {
                return (
                    <li key={food.id} onClick={() => handleClick(food)}> 
                    <Item item={food}></Item></li>
                )
            })}
        </ul>
        <h1>{selectedItem.description}</h1>
        <h1>{selectedItem.price}</h1>
        <BarChart query={selectedItem.name}></BarChart>
        </>

    );
};

export default DisplayFoodItems;