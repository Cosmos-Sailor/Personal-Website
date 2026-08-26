import React from 'react';
import { Card, CardMedia, CardContent, Box, Button} from '@mui/material';

const MiniCard = ({item}) => {
    return (
        <Card sx={{ width: 400, height: 380, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia component={item.media} src={item.preview} sx={{height: 250, width:'stretch', padding: 1, backgroundSize: '90%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} controls/>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, maxWidth: '100%' }}>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <Box sx={{ py: 0.3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5, whiteSpace: 'normal', wordWrap: 'break-word', variant: 'contained' }}>
                        <Button
                            title={item.description}
                            href={item.link}
                            color="primary"
                            sx={{ color: '#263238', padding: 0.5 }}
                        >
                            {item.description}
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default MiniCard;
