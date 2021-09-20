import React from "react";


function ItemCard(props) {
    return (
        <div className="card m-2">
            <div className="card-body">
                <img src={props.image} className="card-img-top" alt="..." />
                <h5 className="card-title pt-2">{props.model}</h5>
                <p className="card-text">Category: {props.category}</p>
                <p className="card-text">Price: ${props.price}</p>
                <p className="card-text">Date: {props.date}</p>
            </div>
        </div>
    )
}


export default ItemCard;
