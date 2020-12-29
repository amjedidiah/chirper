// Module imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

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
    toHome: false,
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

    // id here is the ID of the tweet we are replying to
    this.props.handleAddTweet(authedUser, this.state.text, id);

    this.setState(() => ({text: '', toHome: id ? false : true}));
  };

  /**
   * Changes color of tweetLeft
   * @param {number} tweetLeft - number of characters left in tweet
   * @return {string} - tweetLeft color
   */
  tweetLeftColor = (tweetLeft) =>
    tweetLeft >= 181 ? 'green' : tweetLeft >= 51 ? 'blue' : 'red';

  /**
   * Renders TweetForm UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {text, toHome} = this.state;
    const tweetLeft = 270 - text.length;

    return toHome ? (
      <Redirect to="/" />
    ) : (
      <div>
        <h3 className="center"> Compose new tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            place="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={270}
          ></textarea>
          {tweetLeft <= 269 && (
            <div
              className="tweet-length"
              style={{color: this.tweetLeftColor(tweetLeft)}}
            >
              {tweetLeft}
            </div>
          )}
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
