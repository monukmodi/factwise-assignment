import React from 'react'

const Dialogbox = ({ setPopup, filteredData, remove }) => {
  return (
    <>
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='popup-box'>
                        <div className='title'>
                            <p>Are you sure you want to Delete</p>
                        </div>
                        <div className='dialog_btns'>
                            <button onClick={() => setPopup(false)}>close</button>
                            <button onClick={() => remove(filteredData.id)}>Delete</button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
  )
}

export default Dialogbox