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
        },
        {
            symptom: 'Swelling',
        },
        {
            symptom: 'Broken',
        },
        {
            symptom: 'Itching',
        },
        {
            symptom: 'Hit',
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
                                onClick={function(){
                                    setSelectedSymptom(filter.symptom)
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
                    <p>{selectedSymptom}</p>
                </div>}
            </>
        }
    </>
    )
}

export default FetchedSymptoms