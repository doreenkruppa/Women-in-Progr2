### Pioneers:

name: "Jean E. Sammet",
description: "geb. 1928, war die erste Frau, die die Präsidentschaft der Association for Computing Machinery (ACM) übernahm. Doch vor allem war sie die erste, die eine historische Sicht auf die Entwicklung der Programmierung wagte: ihre Darstellung der Programmiersprachen aus dem Jahre 1969 ist ein Klassiker. Diese zusammen mit zahlreichen weiteren Arbeiten auf diesem Gebiet ließen sie zur Chronistin der Programmiersprachenentwicklung avancieren.",
linkToWebsite: "https://www.frauen-informatik-geschichte.de/index.php-id=120.htm",
imageadresse: "https://www.frauen-informatik-geschichte.de/10148947593c7e10a71d4f5.jpg",

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

App.css von 27.9.:
.App {
display: flex;
flex-direction: row;
flex-wrap: wrap;
text-align: center;
overflow: scroll;
background-color: rgb(173, 166, 218);
z-index: -10;
}

.home-container {
width: 75%;
display: flex;
flex-flow: row;
justify-content: space-between;
padding-left: 10px;
margin-bottom: 10px;
overflow: auto;
}
.welcome-text {
padding: 5px;
margin: 10px;
width: 50%;
text-align: left;
}
.header {
background-image: url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60);
background-size: cover;
height: 30vh;
width: 100vw;
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
}

.sidebar-container {
width: 15%;
}

ul {
list-style: none;
text-align: left;
}

.group-form {
width: 20%;
height: 600px;
padding: 10px;
background-color: white;
}
.group-card {
position: relative;
background-color: white;
z-index: 1;
overflow: auto;
}
.text {
position: absolute;
z-index: 1;
display: flex;
flex-direction: column;
padding: 10px;
}
.text div {
text-align: left;
}

.image {
position: absolute;
z-index: -1;
opacity: 0.3;
}

.image-home {
margin: 30px;
width: 30%;
}

.groups-list-Container {
width: 65%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 10px;
}
.groups-cards-Container {
width: 80%;
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
}

.pioneers-list-Container {
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding: 10px;
}

.pioneers-cards-text {
padding-left: 20px;
text-align: left;
}
.pioneer-card {
background-color: white;
overflow: auto;
}
.pioneers-form {
width: 25%;
height: 600px;
padding: 10px;
margin-top: 20px;
background-color: white;
}
.nav-link {
margin: 0px 20px;
color: rgb(169, 115, 201);
}

.footer {
margin-top: 10px;
padding: 20px;
background-color: #282c34;
height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: small;
color: white;
width: 100%;
}

button {
background-color: black;
color: white;
margin-top: 10px;
}

.ankerlinks {
display: block;
display: flex;
flex-direction: row;
justify-content: center;
align-content: baseline;
height: 20px;
width: 150px;
background-color: black;
color: white;
text-decoration: none;
font-family: Verdana, Geneva, sans-serif;
font-size: 15px;
font-weight: bold;
padding: 6px 4px;
margin: 10px;
}
.ankerlinks-container {
display: flex;
flex-direction: row;
justify-content: right;
}

.events-list {
height: 100vh;
}
@media screen and (max-width: 1024px) {
.ankerlinks-container {
justify-content: center;
margin-top: 10px;
}
.sidebar-container {
width: 80%;
height: 150px;
overflow: auto;
margin: auto;
border: none;
}
.pioneers-list-Container {
display: flex;
flex-direction: column;
}
.groups-list-Container {
display: flex;
flex-direction: column;
}
.groups-cards-container {
display: flex;
flex-direction: column;
}
.home-container {
display: flex;
flex-direction: column;
}
.group-card {
min-width: 200px;
height: 300px;
margin: auto;
}
.group-form {
min-width: 200px;
height: 300px;
margin: auto;
overflow: auto;
}
.pioneer-card {
min-width: 200px;
height: 300px;
margin: auto;
}
.pioneers-form {
min-width: 200px;
height: 300px;
margin: auto;
overflow: auto;
}
.welcome-text {
width: 80vw;
margin: auto;
height: 300px;
}
.image-home {
width: 80vw;
margin: auto;
height: 300px;
}
}
