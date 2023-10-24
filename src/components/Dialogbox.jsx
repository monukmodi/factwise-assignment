import React from 'react'

const Dialogbox = ({ setPopup, filteredData, remove }) => {
  return (
    <>
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='popup-box'>
                        <div className='title'>
                            <p style={{color:"red"}}>Are you sure you want to Delete</p>
                        </div>
                        <div className='dialog_btns'>
                            <button style={{color:"white", backgroundColor:"green"}} onClick={() => setPopup(false)}>close</button>
                            <button style={{color:"white", backgroundColor:"red"}} onClick={() => remove(filteredData.id)}>Delete</button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
  )
}

export default Dialogbox