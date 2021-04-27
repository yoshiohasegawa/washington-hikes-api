import React, { useState, useRef } from "react";
import axios from 'axios';

export default function PostHikes() {
    const [hikeTitle, setHikeTitle] = useState();
    const [hikeRegion, setHikeRegion] = useState();
    const hikeTitleInput = useRef();
    const hikeRegionInput = useRef();

    function updateHikeTitle(e) {
        e.preventDefault();
        setHikeTitle(e.target.value);
    }

    function updateHikeRegion(e) {
        e.preventDefault();
        setHikeRegion(e.target.value);
    }

    async function postHike() {
        try {
            await axios.post(`/washingtonhikes/api/hikes/`, {
                title: hikeTitle,
                region: hikeRegion
              });
            hikeTitleInput.current.value = '';
            hikeRegionInput.current.value = '';
        } catch (err) {
            console.error('Please check your inputs again');
        }
    }
    
    function handlePostHike(e) {
        e.preventDefault();
        console.log(`Posting: ${hikeTitle}`);
        postHike();
    }

    return (
        <>
            <div>
                <h2>POST</h2>
                <p>/washingtonhikes/api/hikes/</p>
                <p>Body: {"{"}<b>title:</b> {hikeTitle}<b>,</b> <b>region:</b> {hikeRegion}{"}"}</p>
                <form>
                    <label htmlFor="post-hikes-title">Title: </label>
                    <input type="text" id="post-hikes-title" ref={hikeTitleInput} placeholder="Title" onChange={updateHikeTitle}></input>
                    <label htmlFor="post-hikes-region">Region: </label>
                    <input type="text" id="post-hikes-region" ref={hikeRegionInput} placeholder="Region" onChange={updateHikeRegion}></input>
                    <input type="submit" id="post-hikes-button" onClick={handlePostHike}></input>
                </form>
            </div>
        </>
    )
}