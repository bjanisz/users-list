import { useState } from "react";

export const SearchInput = ({ onChange }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <>
            {/* <label htmlFor="search">Search user</label> */}
            <input
                className="searchInput"
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(event) => handleChange(event)}
                id="search"
            />
        </>

    );
};
