import React, { useState } from 'react';
import userData from '../data/celebrities.json'
import { AiOutlineSearch } from 'react-icons/ai';
const search_user = () => {
  return (
    <div className='serach_field'>
                <form className='search_form'>
                    <AiOutlineSearch className='search_icon' />
                    <input className='form_input'
                        placeholder='Search user'
                        type="text"
                    />
                </form>
            </div>
  )
}

export default search_user