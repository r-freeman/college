import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home";
import Courses from "../views/courses/Courses";
import Course from "../views/courses/Course";
import Enrolments from "../views/enrolments/Enrolments";
import Enrolment from "../views/enrolments/Enrolment";
import Lecturers from "../views/lecturers/Lecturers";
import Lecturer from "../views/lecturers/Lecturer";

import Login from "../views/Login";
import Register from "../views/Register";

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
        path: '/enrolments/:id',
        name: 'viewEnrolment',
        component: Enrolment
    },
    {
        path: '/lecturers',
        name: 'Lecturers',
        component: Lecturers
    },
    {
        path: '/lecturers/:id',
        name: 'viewLecturer',
        component: Lecturer
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
