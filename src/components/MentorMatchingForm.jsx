import React from 'react';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 700,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class TextFields extends React.Component {
  state = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    // Make a network call somewhere
    event.preventDefault();
    // alert(this.state.answer1);

    fetch(
      `/api/addJob?name=${encodeURIComponent(this.state.answer1)}&description=${encodeURIComponent(
        this.state.answer2,
      )}&skills=${encodeURIComponent(this.state.answer3)}&qualifications=${encodeURIComponent(
        this.state.answer4,
      )}&extra=${encodeURIComponent(this.state.answer5)}&contact=${encodeURIComponent(
        this.state.answer6,
      )}`,
    )
      .then(response => response.json())
      .then(state => this.setState(state));
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
            <Typography gutterBottom variant="headline" component="h1">
          Match with a Mentor
            </Typography>
            <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >
                <TextField
                    id="question1"
                    label="What problem are you solving?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer1}
                    onChange={this.handleChange('answer1')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question2"
                    label="Do you have a prototype?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer2}
                    onChange={this.handleChange('answer2')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question3"
                    label="What is your product or service?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer3}
                    onChange={this.handleChange('answer3')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question4"
                    label="Who is the target customer?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer4}
                    onChange={this.handleChange('answer4')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question5"
                    label="What value does your product or service provide?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer5}
                    onChange={this.handleChange('answer5')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question6"
                    label="What stage are you currently in with your product or service?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer6}
                    onChange={this.handleChange('answer6')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question7"
                    label="Give us an elevator pitch about your product or service."
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer5}
                    onChange={this.handleChange('answer5')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question8"
                    label="List team members names, roles, and give a short profile of them."
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer5}
                    onChange={this.handleChange('answer5')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question9"
                    label="What is your team seeking in a mentor?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer5}
                    onChange={this.handleChange('answer5')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question10"
                    label="What type of expertise are you seeking in a mentor?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer5}
                    onChange={this.handleChange('answer5')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    id="question11"
                    label="Anything else we need to know about your team?"
                    style={{ margin: 8 }}
                    placeholder="Enter your answer here"
                    value={this.state.answer5}
                    onChange={this.handleChange('answer5')}
                    multiline
                    fullWidth
                    margin="normal"
                    required
                />

                <Button variant="contained" className={classes.button} type="submit">
                    {' '}
            Submit
                    {' '}
                </Button>
            </form>
        </div>
    );
  }
}

TextFields.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
