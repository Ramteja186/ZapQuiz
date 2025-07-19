# ZipQuiz App

ZipQuiz is a dynamic and interactive quiz application built with React. It allows users to select a quiz topic, answer questions within a time limit, and view their scores. The application is designed to be user-friendly and visually appealing.

## Features

*   **Topic Selection:** Users can choose from various quiz topics (e.g., JavaScript, HTML, General Knowledge).
*   **Timed Quizzes:** Each quiz has a time limit, adding a challenge to the experience.
*   **Score Tracking:** The application keeps track of the user's score as they answer questions.
*   **Result Display:** After completing a quiz or running out of time, users can view their final score.
*   **Restart Functionality:** Users can easily restart a quiz or choose a new topic.
*   **Toast Notifications:** Provides subtle feedback to the user for actions like starting a quiz or encountering an error.
*   **Responsive Design:** The application is designed to provide a consistent experience across different screen sizes.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **CSS:** For styling the application, including responsive design and visual enhancements.
*   **Font Awesome:** Integrated for scalable vector icons (though the example icon was removed, the setup is in place for future use).

## Recent Enhancements

*   **Font Awesome Integration:** Added Font Awesome dependencies for easy inclusion of icons.
*   **Toast Notification System:** Implemented a custom toast message component for user feedback, positioned at the bottom right.
*   **Full Viewport Sizing:** Ensured the application utilizes the complete height and width of the viewport for a more immersive experience.
*   **Hidden Scrollbars:** Implemented CSS to hide scrollbars across the application while maintaining full scroll functionality, providing a cleaner look.
*   **Quiz Component Scrolling:** Enabled scrolling within the quiz component to handle longer question lists gracefully.

## Project Structure

*   `src/components/`: Contains reusable React components like `Header`, `Home`, `Quiz`, `Result`, and `Toast`.
*   `src/data.js`: Stores the quiz questions and answers.
*   `src/App.js`: The main application component, handling routing and state management.
*   `src/App.css`: Global application styles.
*   `src/index.css`: Base CSS for the application, including body and HTML styling.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all necessary project dependencies.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).