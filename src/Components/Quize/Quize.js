import React from 'react';
import {Option} from 'react-router-dom'

const Quize = ({ ques}) => {
    console.log(ques)
    const {question,options}=ques
    return (
        <div>
            <p>{question}</p>
            {
                
                options.map(option => <li>
                    {option}
                </li>
                )
            }
        </div>
    );
};

export default Quize;