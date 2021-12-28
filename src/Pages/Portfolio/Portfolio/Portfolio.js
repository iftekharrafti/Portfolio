import React, { useEffect, useState } from 'react';
import SinglePort from '../SinglePort/SinglePort';
import './Portfolio.css';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setPortfolios(data))
    }, [])
    return (
        <div className="container portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <div className="row portfolio-row">
                {
                    portfolios.map(portfolio => <SinglePort
                        portfolio={portfolio}
                    ></SinglePort>)
                }
            </div>
        </div>
    );
};

export default Portfolio;