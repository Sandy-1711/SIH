import React from 'react'
import Skeleton from './Skeleton'
import MuscleMale from './MuscleMale'
import MuscleFemale from './MuscleFemale'

const BodyLeft = ({ type, gender }) => {
    return (
        <div className="bodyLeft">
            {type === 0 &&
                <>
                    {gender === true &&
                        <MuscleMale />
                    }
                    {gender === false &&
                        <MuscleFemale />
                    }
                </>
            }
            {type === 1 &&
                <Skeleton />
            }
        </div>)
}

export default BodyLeft