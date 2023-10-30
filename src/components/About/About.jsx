import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='aboutPage'>
            <div>
                <h1>About Us</h1>
            </div>
            <p>Everyone in their life encounters two situations.</p>
            <ul>
                <li>First is when we come across a medical condition so small, we take it for granted, and that problem becomes troubling in future.</li>

                <li>Secondly when we visit the doctor for smallest of our needs, which could</li>
            </ul>
            <p>To solve this problem we have come up with a easy solution.</p>

            {/* <p>Often we encounter medical problems that are so small, you don't need to go to a doctor, but those problems might result in a serious danger in future.</p> */}
            {/* <p>To identify such critical problems, we use AI.</p> */}

            <ol>
                <li><p>We have made this website to cater the needs of immediate and effective healthcare by yourself. </p>
                </li>
                <li><p>We aim to provide quick and easy healthcare service at the comforts of your mobilephones, so as to save you from the hassle of going to doctors for treatments, that you can perform yourself.</p>
                </li>
                <li><p>Our product uses the latest AI Technology to generate remedies that a person can easily perform on their own.</p>
                </li>
            </ol>
            <p>This is a double benefit for both the doctors as well as the patients.</p>
            <ul>
                <li>The time doctors have saved, they can assist patients who require immediate assistance.</li>
                <li>You can use your saved time and money to invest in something fruitful.</li>
            </ul>

            <disclaimer>
                <p>***Although the AI has been trained on a large set of data, it may provide wrong information.***</p>
                <p>***We recommend visiting a doctor if needed so. Use the tool at your own responsibility.***</p>
            </disclaimer>
        </div>
    )
}

export default About