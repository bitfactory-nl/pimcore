/*
 * Include sass
 * To make webpack compile and publish something, just require()
 * or import it. In this case a SASS file. Webpack will compile a separate css file
 * even though it is included here
 */
require('../sass/app.scss')

/* Load Vue */
import Vue from 'vue';

import VueCheckComponent from '../../vue/checkVueComponent';

window.addEventListener('load', function () {
    // instantiate Vue
    new Vue({
        el: '#site',
        components: {VueCheckComponent},
        mounted() {
            this.$refs.vueCheck.innerText = '✅';
        }
    });

    // show that JS is working
    document.getElementById('js-check').innerHTML = '✅';

});
