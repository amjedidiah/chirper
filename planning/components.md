# Components

## App

## Nav

- NavList
  - NavItem

## DashboardContainer

- Title

## TWEETLIST

- Event: Get the tweets
- Action type: GET_LIST_OF_TWEETS

## TWEET

> with state: spotlighted/selected, there's no TweetReplyTo

- Events
  - Get specific/highlighted/spotlighted tweet from list of tweets
  - Display above tweet
    - TweetImage
    - TweetUsername
    - TweetTimeStamp
    - TweetReplyTo
    - TweetText
  - Get authedUser
  - Allow authedUser perform tweet actions
    - [ ] TweetActions
      - TweetReply
      - TweetLike

## TWEETCONTAINER

- Event
  - Get specific/highlighted/spotlighted tweet from list of tweets
  - Get replies to a specific/highlighted/spotlighted tweet from a list of tweets

## TWEETFORM

- Events
  - Display TweetForm
    - TweetFormTitle
    - TweetFormInput
  - Get authedUser
  - Allow authedUser perform actions
    - [ ] TweetFormAction
      - Set text of the new tweet
      - TweetFormSubmit
