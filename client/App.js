import React from 'react';
import GetHikes from './GetHikes';
import PostHikes from './PostHikes';
import DeleteHikes from './DeleteHikes';
import PutHikes from './PutHikes';

export default function App() {

    return (
        <>
            <h1>Washington State Hikes API</h1>
            <GetHikes />
            <PostHikes />
            <DeleteHikes />
            <PutHikes />
        </>
        )
    }