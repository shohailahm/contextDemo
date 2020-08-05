import React, { useState, useEffect } from 'react'
import { v1 } from 'uuid';
import SongForm from './songForm';
const SongList = () => {
    const [songs, setSongs] = useState([{
        title: 'wild Darkness', id: 1
    }, {
        title: 'alan walker hits', id: 2
    },
    {
        title: 'marshmello', id: 3
    }]);

    const addSongs = (title) => {
        setSongs(
            [...songs, { title, id: v1() }]
        )
    }

    useEffect(() => {
        console.log("USe Effect");
        return () => {
            console.log("cleanup");
        }
    }, [])

    return (
        <div className="song-list">
            <ul>
                {
                    songs.map((song) => (
                        <li key={song.id}>{song.title}</li>
                    ))
                }
                <SongForm addSongs={addSongs} />

            </ul>
        </div>
    );
}

export default SongList;