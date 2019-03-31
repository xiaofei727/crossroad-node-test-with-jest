import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from '../App';

const NavBar = ({ tabClicked, currentTab }) => (
    <div>
        <AppBar position="static">

                <Toolbar>
                    <Avatar src="https://bit.ly/2IjUqrM" style={{ marginRight: '20px' }} />
                    <Typography variant="title" color="inherit">Cross Roads</Typography>
                    <Tabs
                        value={currentTab}
                        style={{ position: 'absolute', right: '0px' }}
                    >
                        <Tab id="hometab" label="Home" component={Link} to="/" />
                        <Tab id="freelancerstab" label="Freelancers" component={Link} to="/freeLancers" />
                        <Tab id="jobstab" label="Jobs" component={Link} to="/postings" />
                        <Tab id="calendartab" label="Calendar" component={Link} to="/calendar" />
                        <Tab id="guidetab" label="Roadmap" component={Link} to="/howtostartup" />
                    </Tabs>
                </Toolbar>
        </AppBar>
    </div>
);

export default NavBar;
