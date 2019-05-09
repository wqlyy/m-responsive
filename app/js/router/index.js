import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: "/",
          name: "home",
          component: Home,
        },{
          path: "/money",
          name: "money",
          component: Money,
        },{
          path: "/ious",
          name: "ious",
          component: Home,
        },{
          path: "/raise",
          name: "raise",
          component: Home,
        }, {
          path: "/home",
          name: "home",
          component: Home,
        }
    ],
})
