import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardList from './CardList';
import FreelancerCard from './FreelancerCard';
import JobPostingCard from './JobPostingCard';
import Home from './Home';
import Calendar from './Calendar';
import StartupGuide from './StartupGuide/StartupGuide';
import JobPostingForm from './JobPostingForm';
import HowToStartup from './StartupGuide/HowToStartup.jsx';
import MentorMatchingForm from './MentorMatchingForm';

const JobPostingPage = () => (
    <CardList url="http://localhost:3001/api/showAllJobs" filterField="StartUp">
        <JobPostingCard />
    </CardList>
);

const FreelancerPage = () => (
    <CardList url="https://jsonplaceholder.typicode.com/users" filterField="name">
        <FreelancerCard />
    </CardList>
);

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/postings" component={JobPostingPage} />
        <Route exact path="/freeLancers" component={FreelancerPage} />
        <Route exact path="/howtostartup" component={StartupGuide} />
        <Route exact path="/jobPostingForm" component={JobPostingForm} />
        <Route exact path="/howtostartup" component={HowToStartup} />
        <Route exact path="/mentorMatchingForm" component={MentorMatchingForm} />
    </div>
);

export default Routes;
