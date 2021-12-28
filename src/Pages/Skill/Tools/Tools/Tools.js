import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool'

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('./skill-tool.json')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])
    return (
        <div className="expertises">
            <h3 className="mt-5 mb-4">Tools</h3>
            <div className="container">
                <div className="expertise">
                    {
                        tools.map(tool => <Tool tool={tool}></Tool>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;