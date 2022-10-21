import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const home = useLoaderData()
    const topics=home.data
    console.log(topics)
    return (
        <div>
            <h1>This is Home {topics.length}</h1>
            <div className='topics'>
                {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;