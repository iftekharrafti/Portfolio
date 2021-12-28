import React, { useEffect, useState } from 'react';
import Comfort from '../Comfort/Comfort';

const Comfortable = () => {
    const [comfortable, setComfortable] = useState([]);
    useEffect(() => {
        fetch('./skill-comfortable.json')
        .then(res => res.json())
        .then(data => setComfortable(data))
    }, [])
    return (
        <div className="expertises">
            <h3 className="mt-5 mb-4">Comfortable</h3>
            <div className="container">
                <div className="expertise">
                    {
                        comfortable.map(comfort => <Comfort comfort={comfort}></Comfort>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Comfortable;