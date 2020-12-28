// Module imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Action creator imports
import {handleAddTweet} from 'redux/actions/tweets';

/**
 * TweetForm component
 */
class TweetForm extends Component {
  /**
   * TweetForm propTypes
   */
  static propTypes = {
    authedUser: PropTypes.string,
    handleAddTweet: PropTypes.func,
    id: PropTypes.string,
    text: PropTypes.string,
  };

  /**
   * TweetForm state
   */
  state = {
    text: '',
  };

  /**
   * Handles form input change
   * @param {object} e - The javascript event object
   */
  handleChange = (e) => {
    e.preventDefault();
    this.setState(() => ({text: e.target.value}));
  };

  /**
   * Handles the form submit
   * @param {object} e - The javascript event object
   */
  handleSubmit = (e) => {
    e.preventDefault();

    const {authedUser, id} = this.props;

    this.props.handleAddTweet(authedUser, this.state.text, id);

    this.setState(() => ({text: ''}));
  };

  /**
   * Renders TweetForm UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {text} = this.state;
    const tweetLeft = 280 - text.length;

    // todo: Redirect to homeview if submitted

    return (
      <div>
        <h3 className="center"> Compose new tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            place="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          ></textarea>
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  };
}

/**
 * Maps state to TweetForm component props
 * @param {state} state
 * @return {tweetFormStateProps}
 */
const mapStateToProps = ({authedUser}) => ({authedUser});

// TweetForm export
export default connect(mapStateToProps, {handleAddTweet})(TweetForm);
