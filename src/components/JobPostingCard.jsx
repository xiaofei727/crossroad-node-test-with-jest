import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
// more icons here: https://materialdesignicons.com/
import EmailIcon from '@material-ui/icons/Email';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const IMAGE_LINK = 'https://hakka-staging.herokuapp.com/assets/placeholder-co.png';

const renderListItem = (primary, secondary, icon) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
);

const renderListItems = data => (
    <List dense={false}>
        {renderListItem('Skill Needed', data.SkillsNeeded, <BrushIcon />)}
        {renderListItem('Contact Information', data.Contact, <EmailIcon />)}
    </List>
);

export default ({ data }) => (
    <div>
        <Card>
            <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={IMAGE_LINK}
                title={data.StartUp}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {data.StartUp}
                </Typography>
                {renderListItems(data)}
            </CardContent>
        </Card>
    </div>
);