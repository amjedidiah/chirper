// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from 'react-icons/ti';
import {Link, withRouter} from 'react-router-dom';

// Action creator imports
import {handleToggleTweet} from 'redux/actions/tweets';

// Util imports
import {formatDate} from 'utils/helpers';

// Selector imports
import {getFormattedTweet} from 'redux/selectors';

/**
 * Tweet component
 */
class Tweet extends Component {
  /**
   * Tweet propTypes
   */
  static propTypes = {
    authedUser: PropTypes.string,
    handleToggleTweet: PropTypes.func,
    history: PropTypes.object,
    tweet: PropTypes.object,
  };

  /**
   * Handles tweet like
   * @param {object} e - javascript event object
   */
  handleLike = (e) => {
    e.preventDefault();

    const {authedUser, tweet} = this.props;

    this.props.handleToggleTweet({
      id: tweet.id,
      authedUser,
      hasLiked: tweet.hasLiked,
    });
  };

  /**
   * Redirects to parent tweet
   * @param {object} e - javascript event object
   * @param {id} id - parent tweet ID
   */
  toParent = (e, id) => {
    e.preventDefault();

    /**
     * This is one approach
     * <Redirect to={`/tweet/${id}`} />;
     */
    this.props.history.push(`/tweet/${id}`);
  };

  /**
   * Renders the Tweet UI
   * @return {object} - The UI DOM object
   */
  render() {
    const {tweet} = this.props;

    if (!tweet) return <p>This tweet does not exist</p>;

    const {
      id,
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent,
    } = tweet;

    return (
      <Link to={`/tweet/${id}`} className="tweet">
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
      </Link>
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
const mapStateToProps = ({authedUser, tweets, users}, {id}) => ({
  authedUser,
  tweet: getFormattedTweet(authedUser, id, tweets, users),
});

// Tweet export
export default withRouter(
    connect(mapStateToProps, {handleToggleTweet})(Tweet),
);
