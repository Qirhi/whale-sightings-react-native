## Module parse failed: Unexpected token. You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. #996

https://github.com/akveo/react-native-ui-kitten/issues/996

Steps To Fix:
> Install expo webpack config dependency
[] npm i -D @expo/webpack-config


Create webpack.config.js in the root folder of the project and add the code snippet below

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['react-router-native/NativeRouter.js']
        }
    }, argv);
    return config;
};





expo install @expo/webpack-config