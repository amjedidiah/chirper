# Chirper Project

<!-- TODO: add codacy badge -->

> A minimal twitter clone

My own copy of the Chirper project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Table of Content

- [Quick Start](#quick-start)
- [Modifications](#modifications)
- [Contributing](#contributing)
- [License](#license)
- [About Me](#about-me)
- [Create React App](#create-react-app)

## Quick Start

### Installation

```bash
---
git clone https://github.com/amjedidiah/chirper.git chirper
cd chirper
yarn install
yarn start
```

### Usage

You can do the following on the App

#### View all tweets

- View all tweets from the homepage of the app

#### Post a new tweet

- Post a new tweet up to 270 characters.
- The remaining word count shows once you get to **100** words left

#### Reply to a tweet

- Click the **reply-to** icon to reply to a tweet

> The reply is added to the list of tweets with a field that shows who the reply was to

#### Like a tweet

- Click the heart icon to like a tweet

## Modifications

As earlier stated, this is my personal copy of the **Udacity React Nanodegree CHirper Project**.

Personal modifictaions include:

1. Repo structure for componengts and redux

   - Distinct component folders as follows

   ```bash
   -- components
   ---- containers
   ---- controlled
   ---- presentations
   ```

   - Distinct redux folder as follows:

   ```bash
   -- redux
   ---- actions
   ---- middleware
   ---- reducers
   ---- selectors.js
   ---- store.js
   ```

2. Color for number of tweet characters left

   - 0 - 49 : red
   - 50 - 180: blue
   - 181 - 269: green

3. Planning Folder
   A folder giving info about the thought process of the planning of the project

## Contributing

Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md)

## License

This copy of myreads is Copyright © 2020 Jedidiah Amaraegbu. It is free, and may be redistributed under the terms specified in the [LICENSE file](LICENSE)

## About Me

I am a Full-Stack Web Developer and Engineering student passionate about helping businesses and individuals create more value with the web while helping fellow students learn web development.

I recently spoke at a student conference organized by Microsoft Student Partners in South Africa.
Right now, I am working on the frontend app for EasyMall, an e-commerce store.

In the nearest future, I look to acquire mobile development and AI/Machine Learning Skills.
That way I can combine them with my passion for learning and teaching together with my web development skills to create even more value for more businesses and individuals, as well as encourage the early adoption of coding skills.

Do you need a website or a web app for your business/idea, a web tutor, or a conference speaker?
Send me an email: imunacode@gmail.com

Skills: React, Express, Node, PHP, PostgreSQL, MySQL

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
