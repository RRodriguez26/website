import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Projects = () => {
    return ( 

        // Add properties to position the card to the center
        <div>
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
                <CardMedia>
                    {
                    // Insert image here
                    // component="img"
                    // height="140"
                    // image="image/path"
                    // alt="image title"
                    }
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        TouchDesigner Project
                    </Typography>
                    <Typography gutterBottom variant="body2" component="text.secondary">
                        Currently watching TouchDesigner tutorials to make more generative art with code (Mostly with music)
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    );
}

export default Projects;