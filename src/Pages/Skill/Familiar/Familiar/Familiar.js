import React, { useEffect, useState } from 'react';
import SingleFamiliarIcon from '../SingleFamiliarIcon/SingleFamiliarIcon';

const Familiar = () => {
    const [comfortable, setComfortable] = useState([]);
    useEffect(() => {
        fetch('./skill-familiar.json')
        .then(res => res.json())
        .then(data => setComfortable(data))
    }, [])
    return (
        <div className="expertises">
            <h3 className="mt-5 mb-4">Familiar</h3>
            <div className="container">
                <div className="expertise">
                    {
                        comfortable.map(singleFamiliar => <SingleFamiliarIcon singleFamiliar={singleFamiliar}></SingleFamiliarIcon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Familiar;