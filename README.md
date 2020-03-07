# **Super Galactic Age Calculator**

#### Test Driven Development(Third Independent Project)

#### By _**Supriya**_

## Description:

This application determines a user’s age based on a planet’s solar years.

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days.

To see this webpage [click here](https://priyaraj7.github.io/Pizza-parlor/).

## Specifications:
| TDD                                                                                                                               | Input        | Output |
|-----------------------------------------------------------------------------------------------------------------------------------|-:-:----------|-:------|
| If user enter the DOB, it retun Current Age on the Planet                                                                         |              |        |
| On Earth                                                                                                                          | "2000-01-01" | 20     |
| On Mercury                                                                                                                        | "2000-01-01" | 82.9   |
| On Mars                                                                                                                           | "2000-01-01" | 10.6   |
| On Venus                                                                                                                          | "2000-01-01" | 32.4   |
| On Jupiter                                                                                                                        | "2000-01-01" | 1.6    |
| Lets assume Life Expectancy of man is 79; the application retun remaining age on the planet                                       |              |        |
| On Earth                                                                                                                          | "2000-01-01" | 59     |
| On Mercury                                                                                                                        | "2000-01-01" | 244.7  |
| On Mars                                                                                                                           | "2000-01-01" | 31.3   |
| On Venus                                                                                                                          | "2000-01-01" | 95.7   |
| On Jupiter                                                                                                                        | "2000-01-01" | 4.9    |
| If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. |              |        |
| On Earth                                                                                                                          | "1920-1-1"   | 21     |
| On Mercury                                                                                                                        | "1920-1-1"   | 87.1   |
| On Mars                                                                                                                           | "1920-1-1"   | 34     |
| On Venus                                                                                                                          | "1920-1-1"   | 11.1   |
| On Jupiter                                                                                                                        | "1920-1-1"   | 1.7    |

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
- Bootstrap
- JQuery
- JavaScript
- npm

Copyright (c) 2020 (Supriya)
