import React from 'react';

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