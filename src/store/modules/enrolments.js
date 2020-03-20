import * as types from "../mutation-types";
import _ from "lodash";

export default {
    namespaced: true,
    state: {
        enrolment: {},
        _enrolment: {},
        date: null,
        time: null,
        status: "",
        course_id: null,
        lecturer_id: null,
        enrolments: [
            {
                "id": 1,
                "date": "2019-12-08",
                "time": "03:22:00",
                "status": "interested",
                "course_id": 1,
                "lecturer_id": 1,
                "course": {
                    "id": 1,
                    "title": "Cloud computing",
                    "code": "WY562",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ducimus.",
                    "points": 597,
                    "level": 7
                },
                "lecturer": {
                    "id": 1,
                    "name": "Jaycee Bartoletti",
                    "address": "59 Ruby Manors, South Shainashire",
                    "email": "karina26@fay.net",
                    "phone": "026-2415981",
                }
            }
        ],
        addEnrolmentModal: false,
        editEnrolmentModal: false,
        deleteEnrolmentModal: false
    },
    getters: {
        enrolment: state => {
            return state.enrolment;
        },
        enrolments: state => {
            return state.enrolments;
        },
        addEnrolmentModal: state => {
            return state.addEnrolmentModal;
        },
        editEnrolmentModal: state => {
            return state.editEnrolmentModal;
        },
        deleteEnrolmentModal: state => {
            return state.deleteEnrolmentModal;
        }
    },
    mutations: {
        [types.FETCH_ENROLMENT](state, payload) {
            state.enrolment = payload;
        },
        [types.TOGGLE_ADD_ENROLMENT_MODAL](state) {
            state.addEnrolmentModal = !state.addEnrolmentModal;

            if (!state.addEnrolmentModal) {
                // reset form if add enrolment was cancelled
                state.date = state.time = state.course_id = state.lecturer_id = null;
                state.status = "";
            }
        },
        [types.ADD_ENROLMENT](state, payload) {
            // add new enrolment to enrolments
            state.enrolments.push(payload);
        },
        [types.TOGGLE_EDIT_ENROLMENT_MODAL](state) {
            state.editEnrolmentModal = !state.editEnrolmentModal;

            if (state.editEnrolmentModal) {
                // make a copy of the enrolment
                state._enrolment = _.clone(state.enrolment);
            } else {
                state._enrolment = {};
            }
        },
        [types.EDIT_ENROLMENT](state, {course, lecturer}) {
            // update the course and lecturer objects
            state._enrolment.course = course;
            state._enrolment.lecturer = lecturer;
            // replace the original enrolment with updated enrolment
            _.assign(state.enrolment, state._enrolment);
        },
        [types.SET_DATE](state, payload) {
            state.date = payload;
        },
        [types.SET_TIME](state, payload) {
            state.time = payload;
        },
        [types.SET_STATUS](state, payload) {
            state.status = payload;
        },
        [types.SET_COURSE_ID](state, payload) {
            state.course_id = payload
        },
        [types.SET_LECTURER_ID](state, payload) {
            state.lecturer_id = payload;
        },
        [types.EDIT_ENROLMENT_DATE](state, payload) {
            state._enrolment.date = payload;
        },
        [types.EDIT_ENROLMENT_TIME](state, payload) {
            state._enrolment.time = payload;
        },
        [types.EDIT_ENROLMENT_STATUS](state, payload) {
            state._enrolment.status = payload;
        },
        [types.EDIT_ENROLMENT_COURSE_ID](state, payload) {
            state._enrolment.course_id = payload;
        },
        [types.EDIT_ENROLMENT_LECTURER_ID](state, payload) {
            state._enrolment.lecturer_id = payload;
        },
        [types.TOGGLE_DELETE_ENROLMENT_MODAL](state) {
            state.deleteEnrolmentModal = !state.deleteEnrolmentModal;
        },
        [types.DELETE_ENROLMENT](state, payload) {
            state.enrolments.splice(state.enrolments.findIndex(enrolment => enrolment.id === payload), 1);
            state.deleteEnrolmentModal = false;
        }
    },
    actions: {
        fetchEnrolment({commit, state}, id) {
            // find the enrolment in enrolments with a given id
            commit(types.FETCH_ENROLMENT, state.enrolments.find(enrolment => enrolment.id === id));
        },
        toggleAddEnrolmentModal({commit}) {
            commit(types.TOGGLE_ADD_ENROLMENT_MODAL);
        },
        addEnrolment({commit, state, dispatch, rootState}) {
            let enrolment = {
                id: Math.max.apply(null, state.enrolments.map(t => t.id)) + 1,
                date: state.date,
                time: state.time,
                status: state.status,
                course_id: state.course_id,
                lecturer_id: state.lecturer_id,
                course: rootState.courses.courses.find(course => course.id === state.course_id),
                lecturer: rootState.lecturers.lecturers.find(lecturer => lecturer.id === state.lecturer_id)
            };

            commit(types.ADD_ENROLMENT, enrolment);
            dispatch('toggleAddEnrolmentModal');

            // TODO: api
        },
        toggleEditEnrolmentModal({commit}) {
            commit(types.TOGGLE_EDIT_ENROLMENT_MODAL);
        },
       editEnrolment({commit, state, dispatch, rootState}) {
            dispatch('courses/fetchCourse', state._enrolment.course_id, {root: true});
            dispatch('lecturers/fetchLecturer', state._enrolment.lecturer_id, {root: true});

            commit(types.EDIT_ENROLMENT, {course: rootState.courses.course, lecturer: rootState.lecturers.lecturer});

            dispatch('toggleEditEnrolmentModal');

            // TODO: refactor code here to make put request to api with updated enrolment.
            //  If api responds with status 200, commit edit enrolment mutation with the response data
            //  containing the updated enrolment. Do the same for adding and deleting enrolments.
        },
        toggleDeleteEnrolmentModal({commit}) {
            commit(types.TOGGLE_DELETE_ENROLMENT_MODAL);
        },
        deleteEnrolment({commit}, id) {
            commit(types.DELETE_ENROLMENT, id);

            // TODO: api
        }
    }
}