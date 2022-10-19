import { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    // const [volunteers, setVolunteers]  = useVolunteers();
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() =>{
       console.log('inside the loaded data on the console.')
       fetch('data.json')
       .then(res => res.json())
       .then(data => {
        const matched = data.filter(d => d.title.includes(searchText))
        setSearchResult(matched)
       })
    }, [searchText])
   
    const searchHandle = e =>{
        setSearchText(e.target.value);
    }
    // const searchHandle = e =>{
    //     const searchText = e.target.value;
    //     const matched = volunteers.filter(v => v.title.includes(searchText))
    //     setSearchResult(matched)
    // }
    
   
    return (
        <div>
            <h3>My volunteers services: {searchResult.length}</h3>
            <div>
                <input onChange={searchHandle} style={{margin: '20px'}} placeholder='search' type="text" />
            </div>
            <div className='main-container'>
                {
                    searchResult.map(volunteer => <Activity
                    key={volunteer._id}
                    volunteer={volunteer}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;