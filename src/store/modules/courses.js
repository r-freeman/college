import * as types from "../mutation-types";

export default {
    namespaced: true,
    state: {
        course: {},
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
                state.title = state.code = state.description = "";
                state.points = state.level = null;
            }
        },
        [types.ADD_COURSE](state, payload) {
            state.courses.push(payload);
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
        toggleDeleteCourseModal({commit}) {
            commit(types.TOGGLE_DELETE_COURSE_MODAL);
        },
        deleteCourse({commit}, id) {
            commit(types.DELETE_COURSE, id);

            // TODO: api
        }
    }
}