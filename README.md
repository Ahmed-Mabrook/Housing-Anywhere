This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start the project

In the project directory, you can run:

### `npm i`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Context

This project is an assignment that was realized for the company Housing-Anywhere.
The objective is to build an application that displays all the profiles of the characters from “Rick and Morty”.

## Choice of the technologies

ReactJS : [React documentation](https://reactjs.org/).

TypeScript : [TypeScript documentation](https://www.typescriptlang.org/).

Sass: [Sass documentation](https://sass-lang.com/).

## Implementation

This application is using the API from "Rick and Morty" [API documentation](https://rickandmortyapi.com/).

Work done :

Created an overview page with all the characters.

Created the character's profile following the design of the provided API's documentation.

Added pagination to see the characters in the other pages.

Implemented tabs in the profile to have more information about location/origin and the episodes where the characters appear.
These information are loaded separately for each character to avoid having too many requests.The API will be called only for the characters that the user wants to know more about.

Used the possibility of multiple search to avoid calling the API for every single episode.


## To do list

Created an original design.

Find a way to restrict even more the number of requests/ add cashing .
