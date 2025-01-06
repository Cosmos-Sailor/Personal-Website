import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const ResumeItem = (props) => {
    return (
        <Card sx={{ width: "85vw", height: 1000, maxWidth: "875px", m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" textAlign="center" sx={{fontFamily: "Raleway", fontSize: 32}}>
                        <strong>{props.item.title}</strong>
                    </Typography>
                </Box>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <Box sx={{display: 'flex', justifyContent: 'center', gap: 10, padding: 1}}>
                    {props.item.links.map((link, index) => (
                        <Button key={index} href={link.url} target="_blank" sx={{backgroundColor: 'grey.300', fontFamily: "Raleway", fontSize: 24, color: "Black", width: 200, textTransform: 'none', '&:hover': {backgroundColor: 'grey.500',}, padding: 0.3, }}>
                            {link.icon}
                        </Button>
                    ))}
                </Box>
                <iframe src={props.item.pdf} title={props.item.title} style={{height: '100%', width: '100%', padding: 1, border: 'none'}}></iframe>
            </CardContent>
        </Card>
    );
}

export default ResumeItem;