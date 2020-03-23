import Buefy from "buefy";

require('../sass/example.scss')

/* Load Vue */
import Vue from 'vue'
import VueCheckComponent from '../../vue/checkVueComponent'

/* Use Buefy in Vue */
Vue.use(Buefy)

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
