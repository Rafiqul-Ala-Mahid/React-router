import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const {name,logo,total}=topic
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h3>Name: {name}</h3>
        </div>
    );
};

export default Topic;