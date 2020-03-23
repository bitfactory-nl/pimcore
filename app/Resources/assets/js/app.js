/*
 * Include sass
 * To make webpack compile and publish something, just require()
 * or import it. In this case a SASS file. Webpack will compile a separate css file
 * even though it is included here
 *
 * You can also use (instead of the require() below)
 * .addStyleEntry('app', './app/Resources/assets/sass/app.scss')
 * in webpack.config.js. It's commented now. Whatever you like.
 */
require('../sass/app.scss');

/**
 * Include additional dependencies
 */
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'



/*
 * require or import the bundle assets
 * Note that you can also add a new entry in webpack.config.js - this wil result in a separate file in /public/build
 * todo: check if this can be done automatic upon bundle registration
 */
require('../../../../src/ExampleBundle/Resources/assets/js/example.js');
