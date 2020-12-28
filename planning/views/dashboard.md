# View for the Dashboard Page

![Dashboard View](https://video.udacity-data.com/topher/2018/March/5abd5601_nd019-redux-l7-views-01-dashboard/nd019-redux-l7-views-01-dashboard.jpg)

## Dashboard View Requirements

- is located at the home route `/`
- shows tweets sorted from most recently added at the top, to oldest at the bottom
- each tweet will show:
  - the author
  - the time stamp
  - who the author is replying to
  - the text of the tweet
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)

## Dashboard Components

- [ ] App

  - [ ] Nav

    - NavList
      - NavItem

  - [ ] DashboardContainer
    - Title
    - [ ] TweetList
      - [ ] Tweet [state: complete]
        - TweetImage
        - TweetUsername
        - TweetTimeStamp
        - TweetReplyTo
        - TweetText
        - [ ] TweetActions
          - TweetReply
          - TweetLike
