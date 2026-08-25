import React from 'react';
import { Card, CardMedia, CardContent, Box, IconButton} from '@mui/material';

const MiniCard = (prop) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia component={prop.media} sx={{src: `url(${prop.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <Box sx={{ py: 0.3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                        <IconButton>
                            {prop.icon}
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default MiniCard;
