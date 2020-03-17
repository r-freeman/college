import * as types from "../mutation-types";
import _ from "lodash";

export default {
    namespaced: true,
    state: {
        course: {},
        _course: {},
        title: "",
        code: "",
        description: "",
        points: null,
        level: null,
        courses: [
            {
                "id": 1,
                "title": "Cloud computing",
                "code": "WY562",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ducimus.",
                "points": 597,
                "level": 7
            },
            {
                "id": 2,
                "title": "Interaction design",
                "code": "XT583",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, culpa!",
                "points": 225,
                "level": 8,
            },
            {
                "id": 3,
                "title": "Mobile computing",
                "code": "FS128",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vitae.",
                "points": 200,
                "level": 10
            },
            {
                "id": 4,
                "title": "Web design",
                "code": "BD083",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vitae.",
                "points": 297,
                "level": 9
            }
        ],
        addCourseModal: false,
        editCourseModal: false,
        deleteCourseModal: false
    },
    getters: {
        course: state => {
            return state.course;
        },
        courses: state => {
            return state.courses;
        },
        addCourseModal: state => {
            return state.addCourseModal;
        },
        editCourseModal: state => {
            return state.editCourseModal;
        },
        deleteCourseModal: state => {
            return state.deleteCourseModal;
        }
    },
    mutations: {
        [types.FETCH_COURSE](state, payload) {
            state.course = payload;
        },
        [types.TOGGLE_ADD_COURSE_MODAL](state) {
            state.addCourseModal = !state.addCourseModal;

            if (!state.addCourseModal) {
                // reset form if add course was cancelled
                state.title = state.code = state.description = "";
                state.points = state.level = null;
            }
        },
        [types.ADD_COURSE](state, payload) {
            // add new course to courses
            state.courses.push(payload);
        },
        [types.TOGGLE_EDIT_COURSE_MODAL](state) {
            state.editCourseModal = !state.editCourseModal;

            if (state.editCourseModal) {
                // make a copy of the course
                state._course = _.clone(state.course);
            } else {
                state._course = {};
            }
        },
        [types.EDIT_COURSE](state, payload) {
            // replace the original course with the updated course
            _.assign(state.course, state._course);
        },
        [types.SET_TITLE](state, payload) {
            state.title = payload;
        },
        [types.SET_CODE](state, payload) {
            state.code = payload;
        },
        [types.SET_DESCRIPTION](state, payload) {
            state.description = payload;
        },
        [types.SET_POINTS](state, payload) {
            state.points = payload
        },
        [types.SET_LEVEL](state, payload) {
            state.level = payload;
        },
        [types.EDIT_COURSE_TITLE](state, payload) {
            state._course.title = payload;
        },
        [types.EDIT_COURSE_CODE](state, payload) {
            state._course.code = payload;
        },
        [types.EDIT_COURSE_DESCRIPTION](state, payload) {
            state._course.description = payload;
        },
        [types.EDIT_COURSE_POINTS](state, payload) {
            state._course.points = payload;
        },
        [types.EDIT_COURSE_LEVEL](state, payload) {
            state._course.level = payload;
        },
        [types.TOGGLE_DELETE_COURSE_MODAL](state) {
            state.deleteCourseModal = !state.deleteCourseModal;
        },
        [types.DELETE_COURSE](state, payload) {
            state.courses.splice(state.courses.findIndex(course => course.id === payload), 1);
            state.deleteCourseModal = false;
        }
    },
    actions: {
        fetchCourse({commit, state}, id) {
            // find the course in courses with a given id
            commit(types.FETCH_COURSE, state.courses.find(course => course.id === id));
        },
        toggleAddCourseModal({commit}) {
            commit(types.TOGGLE_ADD_COURSE_MODAL);
        },
        addCourse({commit, state, dispatch}) {
            let course = {
                id: Math.max.apply(null, state.courses.map(t => t.id)) + 1,
                title: state.title,
                code: state.code,
                description: state.description,
                points: state.points,
                level: state.level
            };

            commit(types.ADD_COURSE, course);
            dispatch('toggleAddCourseModal');

            // TODO: api
        },
        toggleEditCourseModal({commit}) {
            commit(types.TOGGLE_EDIT_COURSE_MODAL);
        },
        editCourse({commit, state, dispatch}) {
            commit(types.EDIT_COURSE);

            // const {title, code, description, points, level} = state._course;

            dispatch('toggleEditCourseModal');

            // TODO: refactor code here to make put request to api with updated course.
            //  If api responds with status 200, commit edit course mutation with the response data
            //  containing the updated course. Do the same for adding and deleting courses.
        },
        toggleDeleteCourseModal({commit}) {
            commit(types.TOGGLE_DELETE_COURSE_MODAL);
        },
        deleteCourse({commit}, id) {
            commit(types.DELETE_COURSE, id);

            // TODO: api
        }
    }
}