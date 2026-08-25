import React from 'react';
import { Card, CardMedia, CardContent, Button} from '@mui/material';

const MiniCard = (prop) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia component={prop.media} sx={{src: `url(${prop.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
            <CardContent>
                <Button
                    variant="contained"
                    sx={{
                        color: 'red',
                        backgroundColor: 'yellow',
                        fontSize: '20px',
                        display: 'block'
                    }}
                >
                    TEST BUTTON
                </Button>
            </CardContent>
        </Card>
    );
}

export default MiniCard;
