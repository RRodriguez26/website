import * as React from 'react';
import { CardActionArea, Typography, Card, CardMedia, CardContent} from '@mui/material';
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