import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CardIcons from './CardIcons';

const MiniCard = (props) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia component={props.media} sx={{src: `url(${props.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <CardIcons item={props.description} sx={{ py: 0.3 }} />
            </CardContent>
        </Card>
    );
}

export default MiniCard;
