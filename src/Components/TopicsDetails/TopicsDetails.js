import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../Quize/Quize';

const TopicsDetails = () => {
    const details = useLoaderData()
    const questions = details.data.questions
    console.log(questions)
    return (
        <div>
            <h2>Everything you know that will find here.</h2>
            <p>details {questions.length}</p>
            {
                questions.map(ques=><Quize
                        key={ques.id}
                        ques={ques}
                    ></Quize>)
            }
        </div>
    );
};

export default TopicsDetails;