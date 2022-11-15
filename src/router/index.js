import VueRouter from "vue-router";

import Read from '../components/Read.vue'

export default new VueRouter({
    routes:[
        {
            path:'/read',
            component:Read
        }
    ]
})