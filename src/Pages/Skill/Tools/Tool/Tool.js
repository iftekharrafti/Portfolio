import React from 'react';

const Tool = (props) => {
    const {name, icon} = props.tool;
    return (
        <div className="expertise">
            <div className="expertise-detail">
                <img className="img-fluid" src={icon} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Tool;