import React from 'react';

const Quize = ({ ques}) => {
    console.log(ques)
    const {id,question}=ques
    return (
        <div>
            <p>{question}</p>
        </div>
    );
};

export default Quize;