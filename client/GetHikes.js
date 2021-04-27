import React, { useState } from "react";
import axios from 'axios';

export default function GetHikes() {
    const [hikeID, setHikeID] = useState('');
    const [hike, setHike] = useState();
    const [displayHike, setDisplayHike] = useState(false);

    function updateHikeID(e) {
        e.preventDefault();
        setHikeID(e.target.value);
    }

    async function fetchHike() {
        console.log(`Fetching: ${hikeID}`)
        try {
            const res = await axios.get(`/washingtonhikes/api/hikes/${hikeID}`)
            const hikeData = res.data;
            setHike(hikeData);
            setDisplayHike(true);
        } catch (err) {
            console.error('Please check you input again');
        }
    }

    function handleFetchHike(e) {
        e.preventDefault();
        console.log(`Fetching: ${hikeID}`);
        fetchHike();
    }
    

    return (
        <>
            <div>
                <h2>GET</h2>
                <form>
                    <label htmlFor="get-hikes-input">/washingtonhikes/api/hikes</label>
                    <input type="text" id="get-hikes-input" placeholder="Input Hike ID" onChange={updateHikeID}></input>
                    <input type="submit" id="get-hikes-button" onClick={handleFetchHike}></input>
                </form>
                {displayHike ? (
                    <div id="hike-output-box">
                        <h3>{hike.title}</h3>
                        <ul>
                            <li><b>Region:</b> {hike.region}</li>
                            <li><b>Distance:</b> {hike.distance} ({hike.dist_type})</li>
                            <li><b>Gain:</b> {hike.gain} ft. (highest: {hike.highest})</li>
                            <li><b>latitude/longitutde:</b> {hike.latitude}/{hike.longitude}</li>
                            <li><b>URL:</b> <a href={hike.url}>WTA.org/{hike.title}</a></li>
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}