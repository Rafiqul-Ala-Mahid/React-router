import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const {id,name,logo,total}=topic
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h3>Name: {name}</h3>
            <h4>Total Questions: {total}</h4>
            <Link to={`/${id}`}>go now</Link>
            <button>Start Now</button>
        </div>
    );
};

export default Topic;