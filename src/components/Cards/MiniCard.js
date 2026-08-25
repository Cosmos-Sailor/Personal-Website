import React from 'react';
import { Card, CardContent, Box, IconButton} from '@mui/material';

//CardMedia, 
//<CardMedia component={resource.media} sx={{src: `url(${resource.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>

const MiniCard = (resource) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <Box sx={{ py: 0.3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                        <IconButton
                            color="primary"
                            sx={{ color: '#263238', padding: 0.5 }}
                        >
                            {resource.descripton}
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default MiniCard;
