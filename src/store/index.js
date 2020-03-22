import Vue from 'vue'
import Vuex from 'vuex'

import courses from "./modules/courses";
import enrolments from "./modules/enrolments";
import lecturers from "./modules/lecturers";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        courses,
        enrolments,
        lecturers,
        auth
    }
});
