import * as types from "../mutation-types";

export default {
    namespaced: true,
    state: {
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
        ]
    },
    getters: {
        enrolments: state => {
            return state.enrolments;
        },
    },
    mutations: {},
    actions: {}
}