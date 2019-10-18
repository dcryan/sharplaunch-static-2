### Viewing the website
To View the website, you simply need to open `index.html`. The JS/CSS `bundle.js` is included in the repo for simplicity.

### Building the `bundle.js` file
#### Install Node
Follow this [link](https://nodejs.org/en/)

You can also install this via HomeBrew.

If you're really confident, the best choice is to user [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm).

After Node is installed, install all dependencies of the project (Webpack, Sass, etc.)
```
$> npm i
```

Once dependencies are installed, run the build script.
```
$> npm run build
```

This will create a new `/dist` directory with a `bundle.js` that is used in `index.html`. The `bundle.js` file has all the JS and CSS files needed for `index.html` to run.
