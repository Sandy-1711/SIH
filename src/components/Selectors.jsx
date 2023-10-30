import React from 'react'

const Selectors = ({type,setType}) => {
    return (
        <div className="selectors">
            <button
                style={{ backgroundColor: type === 0 ? 'pink' : 'transparent' }}
                onClick={function () {
                    setType(0);
                }}
                className="selector selector_muscles">
                <span>Muscles</span>
            </button>
            <button
                style={{ backgroundColor: type === 1 ? 'pink' : 'transparent' }}
                onClick={function () {
                    setType(1);
                }}
                className="selector selector_bones">
                <span>Bones</span>
            </button>
            <button
                style={{ backgroundColor: type === 2 ? 'pink' : 'transparent' }}
                onClick={function () {
                    setType(2);
                }}
                className="selector selector_body">
                <span>Body Parts</span>
            </button>
        </div>)
}

export default Selectors