import React, { useState } from "react";
import axios from 'axios';

export default function GetHikes() {
    const [hikeId, setHikeId] = useState('');
    const [hike, setHike] = useState();
    const [displayHike, setDisplayHike] = useState(false);

    function updateHikeId(e) {
        e.preventDefault();
        setHikeId(e.target.value);
    }

    async function fetchHike() {
        try {
            const res = await axios.get(`/washingtonhikes/api/hikes/${hikeId}`)
            const hikeData = res.data;
            setHike(hikeData);
            setDisplayHike(true);
        } catch (err) {
            console.error('Please check your input again');
        }
    }

    function handleFetchHike(e) {
        e.preventDefault();
        console.log(`Fetching: ${hikeId}`);
        fetchHike();
    }
    

    return (
        <>
            <div>
                <h2>GET</h2>
                <form>
                    <label htmlFor="get-hikes-input">/washingtonhikes/api/hikes/</label>
                    <input type="text" id="get-hikes-input" placeholder="Hike ID or Title" onChange={updateHikeId}></input>
                    <input type="submit" id="get-hikes-button" onClick={handleFetchHike}></input>
                </form>
                {displayHike ? (
                    <div id="hike-output-box">
                        <h3>{hike.title}</h3>
                        <ul>
                            <li><b>UUID:</b> {hike.id}</li>
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