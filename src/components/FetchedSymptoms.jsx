import { useEffect, useState } from "react"

const FetchedSymptoms = ({ gender, type, selectedBodyPart, fetSymptoms }) => {
    const [isFetched, setIsFetched] = useState(false);
    const [selectedSymptom, setSelectedSymptom] = useState(null);
    const [active, setActive] = useState(null);
    useEffect(function () {

        if (selectedBodyPart) {
            // fetch symptoms based on the body part, gender, 
            setTimeout(function () {
                setIsFetched(true);
            }, 1000)
        }

        if (isFetched && selectedSymptom !== null) {
            // fetch the details of cure

            function fetchReason() {
                const text = selectedSymptom.reason;
                var p = document.getElementById('reason');
                p.innerHTML="";
                for (var i = 0; i < text.length; i++) {
                    const charSpan = document.createElement("span");
                    charSpan.setAttribute('class', 'spantext');
                    charSpan.setAttribute('style', `opacity:0;--i:${i}`);
                    charSpan.textContent = text[i];
                    p.appendChild(charSpan);
                }
            }
            fetchReason();
            function fetchRemedy() {
                const text = selectedSymptom.remedy;
                var p = document.getElementById('remedy');
                p.innerHTML="";
                for (var i = 0; i < text.length; i++) {
                    const charSpan = document.createElement("span");
                    charSpan.setAttribute('class', 'spantext');
                    charSpan.setAttribute('style', `opacity:0;--i:${i}`);
                    charSpan.textContent = text[i];
                    p.appendChild(charSpan);
                }
            }
            fetchRemedy();
        }

    }, [selectedSymptom, selectedBodyPart])
    const data = [
        {
            symptom: 'Pain',
            reason: 'The pain in the muscle might be due to excessive exercise',
            remedy: 'Have some rest,use pain relieving spray',
        },
        {
            symptom: 'Swelling',
            reason: 'The swelling may have been due to heat exhaustion, or dehydration',
            remedy: 'Drink plenty of water and eat foods that are easy to digest',
        },
        {
            symptom: 'Muscle Cramp',
            reason: 'A cramp can occur when you overdo it at the gym. It could also be a sign of an injury',
            remedy: 'Stretch your leg out straight and hold for 30 seconds',
        },
        {
            symptom: 'Itching',
            reason: 'You might be allergic to something in your environment',
            remedy: 'Wash your skin with soap and water',
        },
        {
            symptom: 'Numbness',
            reason: 'Muscle numbness can result from various factors, including nerve compression, poor circulation, or pressure on nerves. ',
            remedy: 'Take regular breaks while exercising',

        }
    ]

    return (<>
        {selectedBodyPart &&
            <>
                <div className="filters muscle_filter">
                    {isFetched ?

                        data.map(function (filter, index) {
                            return <button
                                key={index}
                                className='selector'
                                onClick={function () {
                                    setSelectedSymptom(filter)
                                    setActive(index);
                                }}
                                style={{ backgroundColor: active === index && 'pink' }}
                            >
                                {filter.symptom}
                            </button>
                        })

                        :
                        <p>Fetching symptoms....</p>
                    }

                </div>
                {selectedSymptom && <div>
                    <h2>Common Reasons</h2>
                    <p id="reason"></p>
                    <br />
                    <h2>Remedies</h2>
                    <p id="remedy"></p>
                </div>
                }
            </>
        }
    </>
    )
}

export default FetchedSymptoms