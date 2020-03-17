import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home";
import Courses from "../views/Courses";
import Enrolments from "../views/Enrolments";
import Lecturers from "../views/Lecturers";
import Login from "../views/Login";
import Register from "../views/Register";
import Course from "../views/Course";

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses
    },
    {
        path: '/courses/:id',
        name: 'viewCourse',
        component: Course
    },
    {
        path: '/enrolments',
        name: 'Enrolments',
        component: Enrolments
    },
    {
        path: '/lecturers',
        name: 'Lecturers',
        component: Lecturers
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

const router = new VueRouter({
    routes
});

export default router
