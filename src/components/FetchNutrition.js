import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition"

const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState(
        {
            sugar_g: " ",
            fiber_g: " ",
            serving_size_g: " ",
            sodium_mg: " ",
            name: " ",
            potassium_mg: " ",
            fat_saturated_g: " ",
            fat_total_g: " ",
            calories: " ",
            cholesterol_mg: " ",
            protein_g: " ",
            carbohydrates_total_g: " ",
        },
    );
    const fetchData = useCallback(() => {
        const url = 'https://calorieninjas.p.rapidapi.com/v1/nutrition?query=' + query;
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
                "X-RapidAPI-Key": "75e0e5031fmsh67a3661edb32466p1eeef4jsn64113122414b",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com"
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
                if (incomingData.items.length !== 0)
                    setNutrition(incomingData.items[0]);
            })
            .catch((err) => console.log(err))
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    return (
        <div>
            <h2>Nutrition data</h2>
            <div>
                <Nutrition item={nutrition}></Nutrition>
            </div>
        </div>
    )

    // fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

}

export default FetchData;