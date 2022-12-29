import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import TwitterIcon from '../components/TwitterIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            twitter: {
                component: TwitterIcon
            }
        }
    }
});
