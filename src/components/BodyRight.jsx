import React, { useEffect, useState } from 'react'
import FetchedSymptoms from './FetchedSymptoms';

const BodyRight = ({ type, gender }) => {
    const [response, setResponse] = useState("Use AI to get the details of the muscles");
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [changed, setChanged] = useState(false);
    const [fetSymptoms, setFetchedSymptoms] = useState(null);
    function fetchData(name) {
        // fetch api function
        console.log(selectedBodyPart);
        setIsLoading(true);
        // const res = await fetch(`http://localhost:8080/sih/api/${name}/info`)
        // const resjson = await res.json();
        // setResponse(resjson.info)
        // if (res && res.status === 200) {

        setTimeout(function () {

            setChanged(true);
            setIsLoading(false);
            // var text = resjson.info;
            var text = "No data";
            console.log(selectedBodyPart);
            if (name === 'CHEST') {
                text = 'The chest muscles, also known as the pectoral muscles or pecs, are a group of large, powerful muscles located in the chest region of the human body. They play a crucial role in various upper body movements and are responsible for actions like pushing, lifting, and controlling the movement of the arms and shoulders.'
            }
            else if (name === 'QUADS') {
                text = "The quadriceps, often referred to as the quads are a group of four major muscles located in the front of the thigh. These muscles are collectively responsible for extending the knee and flexing the hip, playing a significant role in activities like walking, running, jumping, and squatting.";
            }
            else if (name === 'ABDOMINALS') {
                text = "The abdominal muscles, often referred to as the abs are a group of muscles located in the front and sides of the abdominal area. These muscles play a crucial role in trunk stabilization, posture, and various movements involving the torso. ";
            }
            else if (name === 'BICEPS') {
                text = "The biceps brachii, commonly known as the biceps is a muscle in the upper arm. It is a prominent muscle and is responsible for various arm movements";
            }
            else if (name === 'FOREARMS') {
                text = "The forearms are the part of the upper limb between the elbow and the wrist, and they contain various muscles responsible for a range of movements involving the hand, wrist, and forearm.";
            }
            else if (name === 'GLUTES') {
                text = "The glutes, short for gluteal muscles, are a group of three major muscles in the buttocks or gluteal region. These muscles play a significant role in a variety of lower body movements, including those involving the hip and thigh.";
            }
            else if (name === 'HAMSTRINGS') {
                text = "The hamstrings, often referred to as the hamstring muscles are a group of muscles located on the back of the thigh. These muscles are responsible for several important functions involving the knee and hip joints. ";
            }
            else if (name === 'TRICEPS') {
                text = "The triceps brachii, commonly known as the triceps is a group of three muscles located on the back of the upper arm. These muscles are responsible for extending the elbow joint, which is essential for straightening the arm.";
            }
            else if (name === 'CALVES') {
                text = "The calves, also known as the calf muscles are located in the lower leg and are primarily responsible for ankle and foot movement.";
            }
            else if (name === 'SHOULDERS') {
                text = "The shoulder, or deltoid, is a complex group of muscles that give the upper arm its range of motion. The shoulder muscles work together to allow various arm movements and provide stability to the shoulder joint. ";
            }
            else if (name === 'TRAPS-MIDDLE') {
                text = "The trapezius muscle, often simply referred to as the traps is a large, triangular-shaped muscle located on the upper back and neck. It is a key muscle involved in various movements and functions of the upper body, including the shoulders, neck, and upper spine.";
            }
            else if (name === 'TRAPS') {
                text = "The trapezius muscles, often referred to as the traps are large, triangular-shaped muscles located on the upper back and neck. These muscles are responsible for various movements and functions of the upper body, including the shoulders, neck, and upper spine.";
            }
            else if (name === 'LATS') {
                text = "The latissimus dorsi, commonly known as the lats is a large, flat muscle located on the sides of the upper back. The lats are responsible for a range of movements involving the shoulder and upper arm. They are a key muscle group for developing a broad and powerful back. ";
            }
            else if (name === 'LOWERBACK') {
                text = "The lower back, or lumbar region, is a crucial part of the spine and plays a significant role in supporting the upper body, facilitating movement, and protecting the spinal cord. The muscles in the lower back help maintain proper posture, support the spine, and allow various movements, particularly those involving the lower spine and pelvis.";
            }
            else {
                text = "No sufficient data right now.";
            }
            var textContainer = document.querySelector('.fetchedResponse');
            var len = text.length;
            for (var i = 0; i < len; i++) {

                const charSpan = document.createElement("span");
                charSpan.setAttribute('class', 'spantext');
                charSpan.setAttribute('style', `opacity:0;--i:${i}`);
                charSpan.textContent = text[i];
                textContainer.appendChild(charSpan);
            }
        }, 1000)
        // }
    }
    function fetchSymptoms(bodypart) {

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
                fetchSymptoms(selectedBodyPart);
                fetchData(name);
                console.log(name);
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
        // var genderSelectors = document.querySelector('.genderSelectors');

    }, [gender, type])

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
                fetSymptoms={fetSymptoms}
                type={type}
            />


        </div>)
}

export default BodyRight