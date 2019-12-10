import React from 'react'
import { Box, Button } from '@chakra-ui/core';

const ArtistCard = props => {
    const { artist } = props; 
    return ( 
        <>
            <Box  
                height="80vh" 
                borderStyle="solid" 
                d="flex" 
                flexDirection="column"
            >
                <Box p={6}>
                    <h1>{artist.firstname} {artist.lastname}</h1>
                    <img alt="{artist.firstname}" src={artist.picture} />
                </Box>
                <Box p={4}>
                    <p>
                        {artist.blurb}
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