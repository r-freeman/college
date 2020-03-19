import * as types from "../mutation-types";

export default {
    namespaced: true,
    state: {
        enrolment: {},
        date: null,
        time: null,
        status: "",
        courseId: null,
        lecturerId: null,
        enrolments: [
            {
                "id": 1,
                "date": "2019-12-08",
                "time": "03:22:00",
                "status": "interested",
                "course_id": 14,
                "lecturer_id": 42,
                "course": {
                    "id": 14,
                    "title": "Artifical intelligence",
                    "code": "DP069",
                    "description": "You gave us three or more; They all sat down again very sadly and quietly, and looked at Alice. 'It goes on, you know,' the Hatter and the Gryphon never learnt it.' 'Hadn't time,' said the.",
                    "points": 362,
                    "level": 8,
                },
                "lecturer": {
                    "id": 42,
                    "name": "Ms. Lilliana Wiegand",
                    "address": "1 West Street, Boganland",
                    "email": "iwilliamson@kreiger.net",
                    "phone": "003-0121554",
                }
            }
        ],
        addEnrolmentModal: false,
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
                state.date = state.time = state.courseId = state.lecturerId = null;
                state.status = "";
            }
        },
        [types.ADD_ENROLMENT](state, payload) {
            // add new enrolment to enrolments
            state.enrolments.push(payload);
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
            state.courseId = payload
        },
        [types.SET_LECTURER_ID](state, payload) {
            state.lecturerId = payload;
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
                course_id: state.courseId,
                lecturer_id: state.lecturerId,
                course: rootState.courses.courses.find(course => course.id === state.courseId),
                lecturer: rootState.lecturers.lecturers.find(lecturer => lecturer.id === state.lecturerId)
            };

            commit(types.ADD_ENROLMENT, enrolment);
            dispatch('toggleAddEnrolmentModal');

            // TODO: api
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