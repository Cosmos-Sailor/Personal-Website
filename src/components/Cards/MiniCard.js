import React from 'react';
import { Card, CardMedia, CardContent, Button} from '@mui/material';

const MiniCard = ({item}) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia component={item.media} sx={{src: `url(${item.preview})`, height: 320, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
            <CardContent>
                <p style={{ color: 'red', fontSize: '20px' }}>
                    {item.description}
                </p>

                <Button
                    variant="contained"
                    sx={{
                        color: 'red',
                        backgroundColor: 'yellow',
                        fontSize: '20px',
                    }}
                >
                    {item.description}
                </Button>
            </CardContent>
        </Card>
    );
}

export default MiniCard;
