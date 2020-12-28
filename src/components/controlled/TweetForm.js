// Module imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * TweetForm component
 */
export default class TweetForm extends Component {
  /**
   * TweetForm propTypes
   */
  static propTypes = {
    prop: PropTypes,
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

    // todo: Add tweet to store
    console.log(this.state.text);

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
