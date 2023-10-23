import React, { useState } from 'react';
import celebrityData from '../data/celebrities.json';
import { AiOutlineSearch } from 'react-icons/ai';
import CelebrityList from './celebrityList';
const SearchUser = () => {
    const [celebData, setCelebData] = useState(celebrityData);
    const [searchValue, setSearchValue] = useState('');

    const filterCelebrities = (search) => {
        const updatedList = celebrityData.filter(data => {
            const fullName = `${data.first} ${data.last}`.toLowerCase();
            return fullName.includes(search.toLowerCase());
        });
        setCelebData(updatedList);
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchValue(inputValue);
        filterCelebrities(inputValue);
    }

    return (
        <>
        <div className='search_field'>
            {console.log("celebData",celebData)}
            <form className='search_form'>
                <AiOutlineSearch className='search_icon' />
                <input
                    className='form_input'
                    placeholder='Search user'
                    type="text"
                    value={searchValue}
                    autoFocus
                    onChange={handleInputChange}
                />
            </form>
        </div>
        <CelebrityList celebData={celebData} setCelebData={setCelebData} />
        </>
    );
}

export default SearchUser;
