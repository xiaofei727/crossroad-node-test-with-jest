import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StartupGuide from './StartupGuide';

import './StartupGuide.css';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function HowToStartup() {
  return (
      <StartupGuide>
          <h1>HOW TO START UP A STARTUP</h1>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 1 - APPLY</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            Every startup needs an idea. This idea need not be revolutionary in scope, or solve
            complicated world issues. It only needs to solve a problem. Once you have formulated
            such an idea, fill out an application for your startup through Cross Roads application
            process.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 2 - MARKET RESEARCH</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            Now that you have established yourself as a startup, begin researching your consumer
            base. Identify total available and serviceable available markets, along with your target
            market. Evaluate whatever competion you may have in said market. Make use of Research
            Business Databases available on the web to collect said information. After this,
            interview customers to get an idea of what they would want in the product. Use Google,
            LinkedIn, and other social media platforms to find possible customers. Form at least
            three hypotheses before initiating interviews. Schedule the interviews with concrete
            times, preferably over phone. Make these hypotheses specific and measurable. Once this
            is completed, you can begin interviewing possible customers. Come up with several
            questions that can test your hypotheses, recording the responses from the questions.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 3 - VALUE PROPOSITION AND PITCH</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            With the newfound information acquired through the interview process, craft a statement
            that states what your product does, who it is for, what problem it solves, needs it
            fulfills, or pain it relieves. This will be your value proposition. In addition to this,
            create an elevator that lasts about thirty seconds that has the ability to immediately
            sell the product in question. Combine the interview experience, value proposition, pitch
            into one collective entity. This will be your Market EIPD, and will be the foundation
            for the startup.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 4 - DEVELOP PROTOTYPE</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            These three steps can be followed in any sequential order, since often the incubation of
            a startup is never a strict linear sequence but rather a multi-dimensional growth.
            Development of the prototype is divided into three stages. The first stage of the
            prototype is its Proof on Concept. It includes basic core functionality along with
            lightweight interface mockups. With such a concept, third-parties should understand the
            product's value and use. The Functioning prototpye is the second stage and should begin
            making the laboratoryto-real-world transition. Students should work on refining or
            expanding the core functionality and building the product’s interface. The prototype
            deliverable should achieve simple use cases.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 5 - TEAM FORMATION</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            Construct a written Founder's Agreement stating the founders’ names, business’s focus,
            vesting requirements, adding new founders, terminating founder, and other important
            initial details among initial members. Begin recruiting through posting on the job
            listing section of the website. Acquire the necessary members that are required to
            complete the project. Multiple team reformations may be conducted at any point during
            the incubation cycle of the startup.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 6 - BUSINESS MODEL</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            Engineers are passionate about developing products and solutions, however there is much
            more required to run a business. To operate a business, you will need to determine your
            business model. Additionally, you will need to formally write a business plan that
            conveys your business model and business plans. Once you are ready to seek funding banks
            and investors will want to see a thorough business plan. This path will teach you what
            you need for a business model and once finished you will have a written businessplan.
            Create a business model canvas that conveys all keys aspects of the business divided in
            nine sections as seen in a nonexistent picture. Form a business plan from those
            available online to explain the business formally in 30 to 50 pages.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>STEP 7 - LAUNCH</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
            Congratulations on getting this far! Now you must seek out connections including mentors
            and investors that will aid you in making your startup graduate to a bona fide business.
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
      </StartupGuide>
  );
}

export default withStyles(styles)(HowToStartup);
