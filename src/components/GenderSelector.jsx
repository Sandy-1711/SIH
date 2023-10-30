import React from 'react'

const GenderSelector = ({type,setGender,gender}) => {
    return (
        <div className="genderSelectors">
            <button
                disabled={type === 1}
                style={{ backgroundColor: type !== 1 && gender === true ? 'pink' : 'transparent' }}
                onClick={function () {
                    setGender(true);
                }}
                className="selector selector_male">
                <span>Male</span>
            </button>
            <button
                disabled={type === 1}
                style={{ backgroundColor: type !== 1 && gender === false ? 'pink' : 'transparent' }}
                onClick={function () {
                    setGender(false);
                }}
                className="selector selector_male" >
                <span>Female</span>
            </button>
        </div>)
}

export default GenderSelector