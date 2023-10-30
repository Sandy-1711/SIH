import React, { useEffect, useState } from 'react'
import FetchedSymptoms from './FetchedSymptoms'

const BodyRight = ({ type, gender }) => {
    const [response, setResponse] = useState("Use AI to get the details of the muscles");
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [changed, setChanged] = useState(false);

    async function fetchData(name) {
        // fetch api function

        setIsLoading(true);
        const res = await fetch(`http://localhost:8080/sih/api/${name}/info`)
        const resjson = await res.json();
        setResponse(resjson.info)
        if (res && res.status === 200) {
            setChanged(true);
            setIsLoading(false);
            var text = resjson.info;
            var textContainer = document.querySelector('.fetchedResponse');
            var len = text.length;
            for (var i = 0; i < len; i++) {
                const charSpan = document.createElement("span");
                charSpan.setAttribute('class', 'spantext');
                charSpan.textContent = text[i];
                textContainer.appendChild(charSpan);
            }
        }
    }


    useEffect(function () {

        var muscle = document.querySelectorAll('.body-map__muscle');
        console.log(muscle);
        muscle.forEach(function (item) {

            item.addEventListener('click', async function () {
                clear();
                setResponse("");
                document.querySelector('.fetchedResponse').innerHTML = "";
                var name = item.getAttribute('id');
                name = name.toUpperCase();
                setSelectedBodyPart(name);
                await fetchData(name);
            });
        })

        var bones = document.querySelectorAll('.skeleton_part')
        function clear() {

            bones.forEach(function (item) {
                item.childNodes.forEach(function (it) {
                    it.style.color = "var(--grey)";
                })
            })

        }
        bones.forEach(function (item) {
            item.addEventListener('click', function () {
                clear();
                item.childNodes.forEach(function (it) {
                    it.style.color = "teal";
                });
                item.style.color = "teal";
                var name = item.getAttribute('id');
                name = name.toUpperCase();
                setSelectedBodyPart(name);
            })
        })
        var genderSelectors = document.querySelector('.genderSelectors');

    },[gender,type])

    return (
        <div className="bodyRight">
            <h2>{selectedBodyPart ? selectedBodyPart : "Select a body part to know details"}</h2>
            <div className="textContainer">
                {!changed && <>
                    {response}
                </>}
                {isLoading && <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}
                <div className='fetchedResponse'></div>
            </div>

            <FetchedSymptoms
                selectedBodyPart={selectedBodyPart}
                gender={gender}
                type={type}
            />


        </div>)
}

export default BodyRight