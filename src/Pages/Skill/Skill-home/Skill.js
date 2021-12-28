import React from 'react';
import Comfortable from '../Comfortable/Comfortable/Comfortable';
import Expertises from '../Expertises/Expertises';
import Familiar from '../Familiar/Familiar/Familiar';
import Tools from '../Tools/Tools/Tools';
import './Skill.css';

const Skill = () => {
    return (
        <div className="skill" id="skill">
            <h2>My <span>Skill</span></h2>
            <Expertises />
            <Comfortable></Comfortable>
            <Familiar></Familiar>
            <Tools></Tools>
        </div>
    );
};

export default Skill;