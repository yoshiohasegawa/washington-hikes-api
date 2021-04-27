import React, { useState, useRef } from "react";
import axios from 'axios';

export default function PutHikes() {
    const [hikeId, setHikeId] = useState('');
    const [hikeTitle, setHikeTitle] = useState();
    const [hikeRegion, setHikeRegion] = useState();
    const hikeIdInput = useRef();
    const hikeTitleInput = useRef();
    const hikeRegionInput = useRef();

    function updateHikeId(e) {
        e.preventDefault();
        setHikeId(e.target.value);
    }

    function updateHikeTitle(e) {
        e.preventDefault();
        setHikeTitle(e.target.value);
    }

    function updateHikeRegion(e) {
        e.preventDefault();
        setHikeRegion(e.target.value);
    }

    async function putHike() {
        try {
            await axios.put(`/washingtonhikes/api/hikes/${hikeId}`, {
                title: hikeTitle,
                region: hikeRegion
              });
            hikeIdInput.current.value = '';
            hikeTitleInput.current.value = '';
            hikeRegionInput.current.value = '';
        } catch (err) {
            console.error('Please check your inputs again');
        }
    }
    
    function handlePutHike(e) {
        e.preventDefault();
        console.log(`Updating: ${hikeTitle}`);
        putHike();
    }

    return (
        <>
            <div>
                <h2>PUT</h2>
                <p>Body: {"{"}<b>title:</b> {hikeTitle}<b>,</b> <b>region:</b> {hikeRegion}{"}"}</p>
                <form>
                    <label htmlFor="put-hikes-id">/washingtonhikes/api/hikes/</label>
                    <input type="text" id="put-hikes-id" ref={hikeIdInput} placeholder="Hike ID" onChange={updateHikeId}></input>
                    <label htmlFor="put-hikes-title"><br/><br />Title: </label>
                    <input type="text" id="put-hikes-title" ref={hikeTitleInput} placeholder="Title" onChange={updateHikeTitle}></input>
                    <label htmlFor="put-hikes-region">Region: </label>
                    <input type="text" id="put-hikes-region" ref={hikeRegionInput} placeholder="Region" onChange={updateHikeRegion}></input>
                    <input type="submit" id="put-hikes-button" onClick={handlePutHike}></input>
                </form>
            </div>
        </>
    )
}