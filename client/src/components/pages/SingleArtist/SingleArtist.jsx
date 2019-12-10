import React from 'react'; 

import artistImg from './artistImg.png'; 

const SingleArtist = ({artist}) => {
    return (
        <>
            <h1>Artist Name</h1>
                <h2>Location, GA</h2>
                    <img alt="" src="https://via.placeholder.com/150" /> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras. Dui ut ornare lectus sit amet. Posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet cursus sit amet dictum sit amet justo donec. Placerat in egestas erat imperdiet. Nisl nunc mi ipsum faucibus vitae aliquet nec. Est sit amet facilisis magna etiam tempor orci eu lobortis. Dolor purus non enim praesent elementum facilisis leo vel. In nibh mauris cursus mattis molestie. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Faucibus et molestie ac feugiat sed lectus.</p>
            <div role="group" className="imgContainer"> 
                <img alt="" src={artistImg} />  
                <h3>Art Title</h3>
            </div>
            <div role="group" className="imgContainer"> 
                <img alt="" src={artistImg} />  
                <h3>Art Title</h3>
            </div>    
        </>
    )
}


export default SingleArtist; 