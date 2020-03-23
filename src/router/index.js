import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home";
import Courses from "../views/courses/Courses";
import Course from "../views/courses/Course";
import Enrolments from "../views/enrolments/Enrolments";
import Enrolment from "../views/enrolments/Enrolment";
import Lecturers from "../views/lecturers/Lecturers";
import Lecturer from "../views/lecturers/Lecturer";

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

import tokenService from "../services/token";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/courses/:id',
        name: 'viewCourse',
        component: Course,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/enrolments',
        name: 'Enrolments',
        component: Enrolments,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/enrolments/:id',
        name: 'viewEnrolment',
        component: Enrolment,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/lecturers',
        name: 'Lecturers',
        component: Lecturers,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/lecturers/:id',
        name: 'viewLecturer',
        component: Lecturer,
        meta: {
            requiresAuth: true
        }
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

// navigation guard
router.beforeEach((to, from, next) => {
    // redirect to login if trying to access protected route
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = tokenService.getToken();
        if (!token) {
            next({
                path: '/login'
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
