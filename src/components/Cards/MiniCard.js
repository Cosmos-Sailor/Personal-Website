import React from 'react';
import { Card, CardMedia, CardContent, Box, Button} from '@mui/material';

const MiniCard = ({item}) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia component={item.media} sx={{src: `url(${item.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <Box sx={{ py: 0.3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                        <IconButton
                            title={item.description}
                            href={item.link}
                            color="primary"
                            sx={{ color: '#263238', padding: 0.5 }}
                        >
                            {item.description}
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default MiniCard;
