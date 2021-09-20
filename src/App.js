import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ItemCard from "./components/item-card";
import Category from "./components/category";
import SortBy from "./components/sortBy";
import { nanoid } from "nanoid";
import optionTag from "./components/optionTags";
import dateFormat from "dateformat";
import "./App.css"


function App(props) {
    const [cars, setCars] = useState(props.carList);
    const [sortBydata, setSortBydata] = useState("0");
    const [choose, setCategory] = useState("All");

    const copyCars = props.carList.map(car => ({...car}));

    const sortMap = {
        "1": (car1, car2) => car1.Price - car2.Price,
        "2": (car1, car2) => car2.Price - car1.Price,
        "3": (car1, car2) => car2.Date - car1.Date,
    }

    const sortBy = (byValue) => {
        setCars(copyCars)
        setSortBydata(byValue);
    }
    
    const filterCategory = (category) => {
        setCategory(category);
    }

    cars.sort(sortMap[sortBydata]);

    const carList = cars
    .filter(ele => choose === "All" || ele.Category === choose)
    .map(car => (
        <ItemCard
            model={car.Model}
            image={car.Image}
            category={car.Category}
            price={car.Price.toLocaleString()}
            date={dateFormat(car.Date, "yyyy-mm-dd")}
            key={nanoid()}
        />
    ))

    return (
        <>
            <Container className="mt-5">
                <div className="d-flex">
                    <SortBy sortBy={sortBy} sortOptions={optionTag.SortBy}/>
                    <Category filterCategory={filterCategory} categoryOptions={optionTag.Category} />
                </div>
                <div className="d-flex flex-wrap pt-4">
                    {carList}
                </div>
            </Container>
        </>
    )
}


export default App;
