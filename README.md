# Northcoders House of Games - Front End/UI React App

## Background

NC Games is a board game review client demo, built in React.js.

This project aims to demonstrate some of the skills learnt in the frontend part of the Northcoders bootcamp, specifically React subjects including:

- React Virtual DOM
- React Lifecycle
- React Routing
- Optimistic Rendering
- Error Handling
- API requests and handling/displaying response data

**Frontend Hosted Version**

The hosted version of this frontend client demo can be found at https://kk-nc-games.netlify.app/

This frontend application interacts with the backend NC Games RESTful API created during the backend part of the course.

**API Hosted Version**

The hosted version of the API can be found here: <https://kk-backend-portfolio-project.onrender.com/api>

The gitHub repository can be found here: <https://github.com/kyrikoni/kk-backend-portfolio-project>

## Functionality

**Reviews and Category Routes**

When you click on 'Reviews' in the navigation bar, the demo requests all reviews held on the backend API database. These are able to be selected to view each review in more detail.

Each category has it's own unique link in the sub-nav which filters out the correct reviews per category.

On this page, the articles can be sorted by:

- date created
- title
- owner
- votes

Each sort function can also be ordered in either ascending or descending order.

**Individual Reviews**

The Review component requests and displays a review based on the supplied route. It displays the full article and the associated meta data:

- author
- title
- review body
- votes
- comment count
- all comments associated with said review

Users may:

- upvote the review by clicking on the thumbs up button
- downvote the review by clicking on the thumbs down button
- post new comments to the review
- delete their own comment (the demo simulates the user to be 'tickle122', so you can only delete this user's comments)

**Errors**

Bad route errors result in the relevant 400/404 page.

API errors result in the API error status code and message being displayed to the user.

## Prerequisites

Please ensure the following are installed on your client as a minimum version:

- **Node**: v19.0.0
- **Node Package Manager**: v8.19.2

## Initial Setup

To set up your own repository, please follow the instructions below.

1. Copy the code from the repository and clone it to your client locally, using the following command:

   `git clone https://github.com/kyrikoni/kk-frontend-portfolio-project`

2. Once it has been successfully cloned, access and open the directory using your code editor of choice (e.g. VSCode):

    ```
    cd kk-frontend-portfolio-project/
    code .
    ```

3. Inside this directory, install the necessary npm packages by running the following command in the terminal:

    `npm install`

4. To start the application, run the following code in the terminal:

    `npm start`

_If an error occurs in any of the previous two steps, ensure that you are in the correct directory and try again._

## Built Using

- React.js
- Axios
- HTML
- CSS