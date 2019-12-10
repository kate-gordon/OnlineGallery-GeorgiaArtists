import React from 'react'
import { Box, Button } from '@chakra-ui/core';

const ArtistCard = () => {
    return (
        <>
            <Box  
                height="80vh" 
                borderStyle="solid" 
                d="flex" 
                flexDirection="column"
            >
                <Box p={8}>
                    <h1>Artist Name</h1>
                    <img alt='artist avatar' src='http://placekitten.com/g/200/300' />
                </Box>
                <Box p={10}>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                 </Box>
                 <Box p={1} d="flex" justifyContent="flex-end">
                    <Button>...</Button>
                 </Box>
            </Box>

            
        </>
    )
}


export default ArtistCard; 