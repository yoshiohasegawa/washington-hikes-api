import React, { useState, useRef } from "react";
import axios from 'axios';

export default function DeleteHikes() {
    const [hikeID, setHikeID] = useState('');
    const hikeInput = useRef();

    function updateHikeId(e) {
        e.preventDefault();
        setHikeID(e.target.value);
    }

    async function deleteHike() {
        try {
            await axios.delete(`/washingtonhikes/api/hikes/${hikeID}`)
            hikeInput.current.value = '';
        } catch (err) {
            console.error('Please check your input again');
        }
    }
    
    function handleDeleteHike(e) {
        e.preventDefault();
        console.log(`Deleting: ${hikeID}`);
        deleteHike();
    }

    return (
        <>
            <div>
                <h2>DELETE</h2>
                <form>
                    <label htmlFor="delete-hikes-title">/washingtonhikes/api/hikes/</label>
                    <input type="text" id="delete-hikes-title" ref={hikeInput} placeholder="Hike ID" onChange={updateHikeId}></input>
                    <input type="submit" id="delete-hikes-button" onClick={handleDeleteHike}></input>
                </form>
            </div>
        </>
    )
}