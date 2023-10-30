import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useState } from "react";
import './Hero.css'
import FetchedSymptoms from '../FetchedSymptoms';
import Selectors from '../Selectors';
import GenderSelector from '../GenderSelector';
import BodyLeft from '../BodyLeft';
import BodyRight from '../BodyRight';
export default function Hero() {

    const [gender, setGender] = useState(true);
    // true for male, false for female
    const [type, setType] = useState(0);
    // 0 for muscles, 1 for bones , 2 for body parts

    return <>
        <main>
            <div className="mainWrapper">
                <Selectors
                    type={type}
                    setType={setType}
                />

                <GenderSelector
                    type={type}
                    setType={setType}
                    gender={gender}
                    setGender={setGender}
                />

                <BodyLeft
                    type={type}
                    gender={gender}
                />

                <BodyRight
                    type={type}
                    gender={gender}
                />
            </div>
        </main>
    </>
}