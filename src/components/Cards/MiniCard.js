import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import CardIcons from './CardIcons';
//CardMedia, 
//<CardMedia component={resource.media} sx={{src: `url(${resource.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
const MiniCard = (resource) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <CardIcons item={resource} sx={{ py: 0.3 }} />
            </CardContent>
        </Card>
    );
}

export default MiniCard;
