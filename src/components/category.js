import React from "react";

function Category(props) {
    const categoryOptions = props.categoryOptions.map(option => (
        <option value={option.value}>{option.ele}</option>
    ));
    return (
        <>
            <div className="mx-2">
                <select className="form-select" aria-label="Default select example" onChange={(e) => props.filterCategory(e.target.value)} >
                    {categoryOptions}
                </select>
            </div>
        </>
    )
}


export default Category;
