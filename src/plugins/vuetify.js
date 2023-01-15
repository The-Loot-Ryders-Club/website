import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import TwitterIcon from '../components/TwitterIcon.vue'
import DiscordIcon from '../components/DiscordIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            twitter: {
                component: TwitterIcon
            },
            discord: {
                component: DiscordIcon
            },
        }
    }
});
