import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import projectList from '../information/projects-list.json'
import { CardActionArea } from '@mui/material';
import '../styles/projects.css';
const Projects = () => {
    return (
        // Add properties to position the card to the center
        <div className='project-cards'>
            {projectList["project-lists"].map((project, i) => {
                return <Card sx={{ maxWidth: 350 }} key={i} id='card'>
                        <CardActionArea>
                            <CardMedia>
                                {
                                // TODO: Insert image here
                                // component="img"
                                // height="140"
                                // image="image/path"
                                // alt="image title"
                                }
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project['project-title']}
                                </Typography>
                                <Typography gutterBottom variant="body2" component="text.secondary">
                                    {project['project-desc']}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                })}
        </div>
    );
}

export default Projects;