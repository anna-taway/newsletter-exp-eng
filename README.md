# Assignement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It allows user to see a list of products. You can click on the button to subscribe to the newsletter and access the form to sign in.

## User Interface

- UI 1 : List of products

- UI 2 : Subscription

## Building list of products

You can create an ItemList component. This ItemList component can be imported in the App component. 

We can use a property items to pass the array of items to display. The ItemList component can be a stateless functional component, which will work only with properties (props) parameter.

You can use .map() statement to do some treatments on each item of the items array :

``const images = props.images.map( (image) => {return <ImageCard key={image.id} image={image} />});``

Each time, you display a list of items you will probably have a warning message "Each child in an array or iterator should have a unique key prop". 

The key prop of each item should be an unique identifier.

The purpose of key prop find its importance in the performance of [reconciliation react algorithm](https://fr.reactjs.org/docs/reconciliation.html) to make comparison between real DOM and virtual DOM. 

## Subscription

You can fill the form with a valid username and register yourself. If the form is not filled, you will see an alert.

## Use lifecycle methods

### constructor()

You can use the constructor() method to do one-time setup. You can set up spans value to 0 or the list of images to an empty array.

### componentDidMount()

You can use the componentDidMount() method to do data loading depending an event.

### componentDidUpdate()

You can use the componentDidUpdate() method to do more data loading when state/props change.

### componentWillUnmount()

You can use the componentWillUnmount() method to do cleanup.

## About testing

### React-test-renderer for snapshot unit testing

Install react-test-renderer for Snpashot unit testing. Snapshots are a common theme in technology. A snapshot is like a picture of an entity at a given point in time. With snapshot testing you can take a picture of a React component and then compare the original against another snapshot later on.

### React-test-renderer & Act API for unit testing React components

If you can live with the fact that react-test-renderer does not use a DOM you'll need just to tweak the test a bit for Act. That means importing act with create.

The test must use act() for any action that changes the component's state, like "mounting" it or clicking on a function passed as a prop. 

### E2E test with Cypress

Please see the [repository](https://github.com/anna-taway/subscription)

## Available Scripts

In the project directory server, you can run:

### `npm start`

In the project directory client, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
