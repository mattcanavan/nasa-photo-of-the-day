import React from 'react'
import styled from 'styled-components'

const BackgroundWrapper = styled.div`
    background: url('https://images.unsplash.com/photo-1505312926838-645f295a20e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
    background-size:contain;
    padding-top: 0;
    margin-top: 2rem;
`

const TitleH1 = styled.h1`
    font-family: serif;
    font-size: 5rem;
    text-align: center;
    text-decoration: underline;

`






export default function CreatePhotoCard(props){

    const { photoTitle, photoURL, photoCopyright, photoExplanation } = props;

    return (
        <BackgroundWrapper>
        <div className='photo-container'>
            <TitleH1>
            <h1>{photoTitle}</h1>
            </TitleH1>
            <div className='flex-container'>
            <img src={photoURL} alt='of space ah the majesty'></img>
            <div className='text-contents'>
                <p>Explanation: \n{photoExplanation}</p>
                <p>Copyright: {photoCopyright}</p>
            </div>
            </div>
        </div>
        </BackgroundWrapper>
    )
}