// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from 'react-icons/ti';

// Util imports
import {formatTweet, formatDate} from 'utils/helpers';

/**
 * Tweet component
 */
export class Tweet extends Component {
  /**
   * Tweet propTypes
   */
  static propTypes = {
    tweet: PropTypes.object,
  };

  /**
   * Handles tweet like
   * @param {object} e - javascript event object
   */
  handleLike = (e) => {
    e.preventDefault();

    // todo: Handle like tweet
  };

  /**
   * Redirects to parent tweet
   * @param {object} e - javascript event object
   * @param {id} id - parent tweet ID
   */
  toParent = (e, id) => {
    e.preventDefault();

    // todo: Redirect to parent tweet
  };

  /**
   * Renders the Tweet UI
   * @return {object} - The UI DOM object
   */
  render() {
    const {tweet} = this.props;

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent,
    } = tweet;

    if (!tweet) <p>This tweet does not exist</p>;
    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />{' '}
            {replies !== 0 && <span>{replies}</span>}
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            {likes !== 0 && <span>{likes}</span>}
          </div>
        </div>
      </div>
    );
  }
}

/**
 *
 * @param {state} state
 * @param {object} ownProps
 * @param {string} ownProps.id
 * @return {tweetStateProps}
 */
const mapStateToProps = ({authedUser, tweets, users}, {id}) => {
  /**
   * @const {tweet} tweet
   */
  const tweet = tweets[id];

  /**
   * @const {tweet} parentTweet - The tweet being replied to
   */
  const parentTweet = tweet && tweets[tweet.replyingTo];

  return {
    authedUser,
    tweet:
      tweet && formatTweet(tweet, users[tweet.author], authedUser, parentTweet),
  };
};

// Tweet export
export default connect(mapStateToProps)(Tweet);
