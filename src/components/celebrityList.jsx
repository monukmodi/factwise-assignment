import React, { useState } from 'react';
import {AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Container from './Container';

const CelebrityList = ({ celebData, setCelebData }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [data_id, setData_id] = useState()
  const [dropData, setDropData] = useState({
    gender: '',
    country: '',
    description: '',
  });
  const [birthYear, setBirthYear] = useState();

  const handleDataClick = (id) => {
    const filteredData = celebData.filter((mydata) => mydata.id === id);
    setData_id(filteredData);
    console.log("setData_id",filteredData)
    setDropData({
      gender: filteredData[0].gender,
      country: filteredData[0].country,
      description: filteredData[0].description,
    });
  };

  const calculateBirthYear = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.abs(new Date(ageInMilliseconds).getUTCFullYear() - 1970);
    setBirthYear(ageInYears);
  };

  return (
    <>
      {celebData.map((filteredData) => (
        <div key={filteredData.id} className='celeb_list'>
          <div className='celeb_container'>
            <img className='celeb_images' src={filteredData.picture} alt={`${filteredData.first} ${filteredData.last}`} />
            <span className='celeb_name'>
              <span>{filteredData.first}</span>
              <span>{filteredData.last}</span>
            </span>
            <span
              onClick={() => {
                const newOpen = isOpen === filteredData.id ? null : filteredData.id;
                setIsOpen(newOpen);
                handleDataClick(filteredData.id);
                calculateBirthYear(filteredData.dob);
              }}
            >
              {isOpen === filteredData.id ? <AiOutlineMinus className='click_info' /> : <AiOutlinePlus className='click_info' />}
            </span>
            <span>
              {isOpen === filteredData.id && (
                <Container
                  celebData={celebData}
                  filteredData={filteredData}
                  setCelebData={setCelebData}
                  data_id={data_id}
                  birthYear={birthYear}
                  setBirthYear={setBirthYear}
                  dropData={dropData}
                />
              )}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CelebrityList;
