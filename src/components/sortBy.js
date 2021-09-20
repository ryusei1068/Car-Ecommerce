import React from "react";


function SortBy(props) {
    const sortOptions = props.sortOptions.map(option => (
        <option value={option.value}>{option.ele}</option>
    ));
    return (
        <>
            <div className="mx-2">
                <select className="form-select" aria-label="Default select example" onChange={(e) => props.sortBy(e.target.value)} >
                    {sortOptions}
                </select>
            </div>
        </>
    );
}

export default SortBy;
