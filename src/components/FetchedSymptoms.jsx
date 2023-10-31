import { useEffect, useState } from "react"

const FetchedSymptoms = ({ gender, type, selectedBodyPart }) => {
    const [isFetched, setIsFetched] = useState(false);
    const [selectedSymptom, setSelectedSymptom] = useState(null);
    useEffect(function () {

        if (selectedBodyPart) {
            // fetch symptoms based on the body part, gender, 
            setTimeout(function () {
                setIsFetched(true);
            }, 1000)
        }

        if (isFetched && selectedSymptom !== null) {
            // fetch the details of cure

        }

    })
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

                        data.map(function (filter) {
                            return <button
                                className='selector'
                                onClick={function () {
                                    setSelectedSymptom(filter)
                                    //call the fetchinf function
                                }}
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
                    <p>{selectedSymptom.reason}</p>
                    <br />
                    <h2>Remedies</h2>
                    <p>{selectedSymptom.remedy}</p>
                </div>}
            </>
        }
    </>
    )
}

export default FetchedSymptoms