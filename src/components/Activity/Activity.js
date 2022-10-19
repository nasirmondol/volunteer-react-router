import React from 'react';
import './Activity.css'

const Activity = ({volunteer}) => {
    const {img, title} = volunteer;
    return (
        <div className='activity'>
            <img width={200} src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Activity;