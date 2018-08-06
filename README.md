# Neighborhood-Map-React
A single-page web application, built using the React framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare APIs.

## How to run the project in Development Mode
The project uses [Node.js >= 6.x](https://nodejs.org/en/) and the [Create-React-App starter code](https://github.com/facebookincubator/create-react-app).

After Node is installed in your system, follow the below steps.

1. Navigate to the directory where you want to store the app.
2. Clone the repo `git clone https://github.com/nevehallon/Neighborhood-Map-React.git`
3. Now install all modules listed as dependencies in `package.json` by running the command `yarn install`
4. Launch the app with command `yarn start`

A new browser window open automatically displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

***NOTE:*** *The service workers for this app will only cache the site when it is in production mode.*

## How to run the project in Production Mode

1. Build the production ready optimized code. `npm run build`
2. Deploy it to `gh-pages` branch by `npm run deploy`
3. Check the online demo [here](https://nevehallon.github.io/Neighborhood-Map-React/)

## How to use

1. Type into the search box to filter locations on the map.
2. Click on the button below the search box to toggle results list.
4. Click on any marker to see details fetched from [FourSquare APIs](https://developer.foursquare.com/) in its info-window.