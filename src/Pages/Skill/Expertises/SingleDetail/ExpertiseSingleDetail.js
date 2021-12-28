import React from 'react';
import './ExpertiseSingleDetail.css'

const SingleDetail = (props) => {
    const {name, icon} = props.expertise;
    return (
        <div className="expertise">
            <div className="expertise-detail">
                <img className="img-fluid" src={icon} alt="" />
                <h4>{name}</h4>
            </div>
            
        </div>
    );
};

export default SingleDetail;