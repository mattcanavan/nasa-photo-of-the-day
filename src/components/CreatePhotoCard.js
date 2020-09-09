import React from 'react'

export default function CreatePhotoCard(props){

    const { photoTitle, photoURL } = props;

    return (
        <div className='photo-container'>
            <h1>{photoTitle}</h1>
            <img src={photoURL} alt='fill out later or something'></img>
        </div>
    )
}