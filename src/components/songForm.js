import React, { useState } from 'react';

const SongForm = ({ addSongs }) => {
    const [songName, setsongName] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        addSongs(songName);
        setsongName('');
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="Name">Song Name</label>
            <input type="text" name="Name" id="sName" placeholder="name of song" required value={songName} onChange={(e) => setsongName(e.target.value)} />

            <input type="submit" value="addSong" />
        </form>
    );
}

export default SongForm;