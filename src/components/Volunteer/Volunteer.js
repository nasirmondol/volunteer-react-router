import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Volunteer = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    return (
        <div>
            <h2>Volunteers</h2>
            <div className='main-container'>
                {
                    volunteers.map(volunteer => <Activity
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteer;      