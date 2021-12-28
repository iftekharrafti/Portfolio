import React, { useEffect, useState } from 'react';
import SingleDetail from './SingleDetail/ExpertiseSingleDetail';

const Expertises = () => {
    const [expertises, setExpertises] = useState([]);
    useEffect(() => {
        fetch('./skill-expertise.json')
        .then(res => res.json())
        .then(data => setExpertises(data))
    }, [])
    return (
        <div className="expertises">
            <h3 className="mt-3 mb-5">Expertise</h3>
            <div className="container">
                <div className="expertise">
                    {
                        expertises.map(expertise => <SingleDetail expertise={expertise}></SingleDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Expertises;