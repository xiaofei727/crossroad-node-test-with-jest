import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
// more icons here: https://materialdesignicons.com/
import DomainIcon from '@material-ui/icons/Domain';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const IMAGE_LINK = 'https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile.jpg';

const renderListItem = (primary, secondary) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <DomainIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
);

const renderListItems = data => (
    <List dense={false}>
        {renderListItem('Company Name', data.company.name)}
        {renderListItem('Company Motto', data.company.catchPhrase)}
        {renderListItem('Skill', data.company.bs)}
    </List>
);

export default ({ data }) => (
    <div>
        <Card>
            <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={IMAGE_LINK}
                title={data.name}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {data.name}
                </Typography>
                {renderListItems(data)}
            </CardContent>
            <CardActions>
                {/* { project.link && <SocialIcon url={project.link} /> } */}
                {data.website && (
                <Button size="small" color="primary" href={data.website} target="_blank">
            See Website
                </Button>
                )}
            </CardActions>
        </Card>
    </div>
);
