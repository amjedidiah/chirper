# View for the Tweet Page

![Tweet View](https://video.udacity-data.com/topher/2018/March/5abd5636_nd019-redux-l7-views-02-tweet/nd019-redux-l7-views-02-tweet.jpg)

## Tweet View Requirements

- is located at the `/tweet/:id`
- shows an individual tweet
  - the author
  - the time stamp
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)
  - has a reply form
  - shows all replies

## Tweet Components

- [ ] App

  - [ ] Nav

  - [ ] TweetContainer

    - [ ] Tweet[state: highlighted -all except TweetReplyTo]

    - [ ] TweetForm

      - TweetFormTitle
      - TweetFormInput
      - [ ] TweetFormAction
        - TweetFormSubmit

    - [ ] TweetList
      - [ ] Tweet[state: complete]
