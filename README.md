# **Super Galactic Age Calculator**

#### Test Driven Development(Third Independent Project)

#### By _**Supriya**_

## Description:

This application determines a user’s age based on a planet’s solar years.

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days.

To see this webpage [click here](https://priyaraj7.github.io/Galactic-Age-Calculator/).

## Specifications:

| TDD                                                                                                                               | Input        |                                  Output |
| --------------------------------------------------------------------------------------------------------------------------------- | :----------- | --------------------------------------: |
| If user enter the DOB, it return Current Age on the Planet                                                                        |              |                                         |
| On Earth                                                                                                                          | "2000-01-01" |                 Your age on Earth is 20 |
| On Mercury                                                                                                                        | "2000-01-01" |               Your age on Mercury is 83 |
| On Mars                                                                                                                           | "2000-01-01" |                  Your age on Mars is 11 |
| On Venus                                                                                                                          | "2000-01-01" |                 Your age on Venus is 33 |
| On Jupiter                                                                                                                        | "2000-01-01" |                  Your age on Earth is 2 |
| Lets assume Life Expectancy of man is 79; the application return remaining age on the planet                                      |              |                                         |
| On Earth                                                                                                                          | "2000-01-01" |         You have 59 years left on Earth |
| On Mercury                                                                                                                        | "2000-01-01" |      You have 245 years left on Mercury |
| On Mars                                                                                                                           | "2000-01-01" |          You have 31 years left on Mars |
| On Venus                                                                                                                          | "2000-01-01" |         You have 96 years left on Venus |
| On Jupiter                                                                                                                        | "2000-01-01" |        You have 5 years left on Jupiter |
| If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. |              |                                         |
| On Earth                                                                                                                          | "1920-1-1"   |   You have lived past 21 years on Earth |
| On Mercury                                                                                                                        | "1920-1-1"   | You have lived past 87 years on Mercury |
| On Mars                                                                                                                           | "1920-1-1"   |    You have lived past 12 years on Mars |
| On Venus                                                                                                                          | "1920-1-1"   |   You have lived past 34 years on Venus |
| On Jupiter                                                                                                                        | "1920-1-1"   |  You have lived past 2 years on Jupiter |

## Installation Requirements

- Open the Terminal
- Install npm packages
  ```
  npm install webpack@4.39.3 --save-dev --save-exact
  npm install webpack-cli@3.3.8 --save-dev
  npm install style-loader@1.0.0 css-loader@3.2.0 --save-dev
  ```
  -Install Webpack Plugins
  ```
  npm install html-webpack-plugin@3.2.0 --save-dev
  npm install clean-webpack-plugin@3.0.0 --save-dev
  npm install uglifyjs-webpack-plugin@2.2.0 --save-dev
  ```
- Install Webpack Development Server

```
  npm install webpack-dev-server@3.8.0 --save-dev
```

-Install Linting Code

```
  npm install eslint@6.3.0 --save-dev
  npm install eslint-loader@3.0.0 --save-dev
```

-Install Frontend Dependencies

```
npm install jquery --save
npm install popper.js --save
npm install bootstrap --save
```

## Setup

- Open the Terminal
- Clone the repository
- Navigate to the directory
- Open `index.html`

## Known Bugs

There are no known bugs.

## Technologies Used

- HTML
- JavaScript
- NPM
- Jest

Copyright (c) 2020 (Supriya)
