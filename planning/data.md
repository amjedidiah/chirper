# DATA

## Store Data

- authedUser
- users
  - dbUsers
  - storeUsers
- tweets
  - dbTweets
  - newTweet
  - spotlightedTweet
  - storeTweets

## Component Data

- TweetForm: text of new tweet

## Containers

- DashboardContainer: get current tweet list from store
- TweetContainer: get replies for selected tweet
- TweetForm: to be able to dispatch action for new tweet
- Tweet
  - get tweet using ID passed to it
  - get authedUser
