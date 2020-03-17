import Vue from 'vue'
import Vuex from 'vuex'

import courses from "./modules/courses";
import enrolments from "./modules/enrolments";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        courses,
        enrolments
    }
});
