import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdOutlineDone } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Dialogbox from './Dialogbox';

const Container = ({ celebData, filteredData, setCelebData, data_id, birthYear, setBirthYear, dropData, setEditData }) => {
  const [edit, setEdit] = useState(false);
  const [gender, setGender] = useState(dropData.gender);
  const [country, setCountry] = useState(dropData.country);
  const [desc, setDesc] = useState(dropData.description);
  const [popup, setPopup] = useState(false);
  const [ageError, setAgeError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [isDataChanged, setIsDataChanged] = useState(false);

  const remove = (id) => {
    setCelebData(celebData.filter((elem) => {
      return elem.id !== id;
    }));
  };

  const updateData = (data) => {
    data[0].gender = gender;
    data[0].country = country;
    data[0].description = desc;
    data[0].dob = birthYear;
    console.log(data);
    setIsDataChanged(false); 
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'birthYear') {
      if (/^\d*$/.test(value)) {
        setBirthYear(value);
        setAgeError('');
      } else {
        setAgeError('Age must be a number.'); 
      }
    } else if (name === 'gender') {
      setGender(value);
    } else if (name === 'country') {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setCountry(value);
        setCountryError(''); 
      } else {
        setCountryError('Enter Alphabates only');
      }
    } else if (name === 'desc') {
      setDesc(value);
    }
    setIsDataChanged(true);
  };

  
  return (
    <>
      {console.log('dropData', dropData)}
      {
        [...data_id].map((all) => {
          return (
            <>
              <div className='disp_flex' key={all.id}>
                <div>
                  <span style={{fontWeight:600}}>Age</span>
                  <a>
                    {edit ? (
                      <>
                        <input
                          className='edit_area edit_area1'
                          name="birthYear"
                          value={birthYear}
                          onChange={handleInputChange}
                        />
                        {ageError && <p className="error">{ageError}</p>}
                      </>
                    ) : (
                      birthYear
                    )}
                  </a>
                </div>
                <div>
                  <span style={{fontWeight:600}}>Gender</span>
                  <a>
                    {edit ? (
                      <select
                        name="gender"
                        value={gender}
                        onChange={handleInputChange}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                        <option value="rather not to say">Rather not say</option>
                        <option value="other">Other</option>
                      </select>
                    ) : (
                      all.gender
                    )}
                  </a>
                </div>
                <div>
                  <span style={{fontWeight:600}}>Country</span>
                  <a>
                    {edit ? (
                      <>
                        <input
                          className='edit_area'
                          name="country"
                          value={country}
                          onChange={handleInputChange}
                        />
                        {countryError && <p className="error">{countryError}</p>}
                      </>
                    ) : (
                      all.country
                    )}
                  </a>
                </div>
              </div>
              <div className='desc'>
                <span style={{fontWeight:600}}>Description</span>
                <p>
                  {edit ? (
                    <textarea
                      className="description"
                      name="desc"
                      value={desc}
                      onChange={handleInputChange}
                    />
                  ) : (
                    all.description
                  )}
                </p>
              </div>
              <div className='icons'>
                <span>
                  {edit ? (
                    <TiDeleteOutline title='cancel' className='c_ptr'  onClick={() => {
                      setEdit(false);
                      setEditData(false);
                    }} />
                  ) : (
                    <RiDeleteBin6Line title='delete' className='red' onClick={() => setPopup(true)} />
                  )}
                </span>
                <span title='edit'>
                  {edit ? (
                   <MdOutlineDone
                   onClick={() => {
                     if (isDataChanged) {
                       updateData([...data_id]);
                     }
                     setEdit(false);
                     setEditData(false);
                   }}
                   className={`round_bd ${isDataChanged ? '' : 'disabled'}`}
                   style={{
                     cursor: isDataChanged ? 'pointer' : 'not-allowed',
                     backgroundColor: isDataChanged ? 'green' : '#dddddd', 
                     color: isDataChanged ? 'white' : 'gray', 
                   }}
                   
                 />
                  
                  ) : (
                    <AiFillEdit className='blue'  onClick={() => {
                      setEdit(true);
                      setEditData(true); 
                    }} />
                  )}
                </span>
              </div>
              {popup && <Dialogbox filteredData={filteredData} remove={remove} setPopup={setPopup} />}
            </>
          );
        })
      }
    </>
  );
};

export default Container;
