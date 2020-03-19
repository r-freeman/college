import * as types from "../mutation-types";

export default {
    namespaced: true,
    state: {
        lecturer: {},
        name: "",
        address: "",
        email: "",
        phone: "",
        lecturers: [
            {
                "id": 1,
                "name": "Jaycee Bartoletti",
                "address": "59 Ruby Manors, South Shainashire",
                "email": "karina26@fay.net",
                "phone": "026-2415981",
                "created_at": "2020-01-29 21:10:06",
                "updated_at": "2020-01-29 21:10:06",
                "enrolments": [
                    {
                        "id": 9,
                        "date": "2019-11-26",
                        "time": "01:33:00",
                        "status": "career_break",
                        "course_id": 14,
                        "lecturer_id": 1,
                        "created_at": "2020-01-29 21:10:09",
                        "updated_at": "2020-01-29 21:10:09",
                        "course": {
                            "id": 14,
                            "title": "Artifical intelligence",
                            "code": "DP069",
                            "description": "You gave us three or more; They all sat down again very sadly and quietly, and looked at Alice. 'It goes on, you know,' the Hatter and the Gryphon never learnt it.' 'Hadn't time,' said the.",
                            "points": 362,
                            "level": 8,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 69,
                        "date": "2019-11-03",
                        "time": "14:33:00",
                        "status": "career_break",
                        "course_id": 4,
                        "lecturer_id": 1,
                        "created_at": "2020-01-29 21:10:12",
                        "updated_at": "2020-01-29 21:10:12",
                        "course": {
                            "id": 4,
                            "title": "Web design",
                            "code": "BD083",
                            "description": "White Rabbit as he spoke, and then nodded. 'It's no use going back to the rose-tree, she went to work very diligently to write with one finger; and the King had said that day. 'A likely story.",
                            "points": 297,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "Prof. Letitia Lemke Sr.",
                "address": "28 Viviane Mill, Wittingshire",
                "email": "sanford.wisozk@hotmail.com",
                "phone": "065-1113452",
                "created_at": "2020-01-29 21:10:06",
                "updated_at": "2020-01-29 21:10:06",
                "enrolments": [
                    {
                        "id": 31,
                        "date": "2020-01-15",
                        "time": "07:31:00",
                        "status": "assigned",
                        "course_id": 18,
                        "lecturer_id": 2,
                        "created_at": "2020-01-29 21:10:11",
                        "updated_at": "2020-01-29 21:10:11",
                        "course": {
                            "id": 18,
                            "title": "Operating systems",
                            "code": "RH244",
                            "description": "Dormouse sulkily remarked, 'If you do. I'll set Dinah at you!' There was a little pattering of footsteps in the sea, though you mayn't believe it--' 'I never was so much already, that it is!' As she.",
                            "points": 284,
                            "level": 7,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 151,
                        "date": "2020-01-15",
                        "time": "17:02:00",
                        "status": "interested",
                        "course_id": 13,
                        "lecturer_id": 2,
                        "created_at": "2020-01-29 21:10:17",
                        "updated_at": "2020-01-29 21:10:17",
                        "course": {
                            "id": 13,
                            "title": "Computer networks",
                            "code": "ZU854",
                            "description": "Let me see: four times six is thirteen, and four times five is twelve, and four times seven is--oh dear! I shall have somebody to talk to.' 'How are you getting on now, my dear?' it continued.",
                            "points": 577,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 175,
                        "date": "2019-12-28",
                        "time": "10:11:00",
                        "status": "assigned",
                        "course_id": 10,
                        "lecturer_id": 2,
                        "created_at": "2020-01-29 21:10:18",
                        "updated_at": "2020-01-29 21:10:18",
                        "course": {
                            "id": 10,
                            "title": "Computer security and forensics",
                            "code": "RG541",
                            "description": "Mouse with an M?' said Alice. 'Who's making personal remarks now?' the Hatter added as an explanation. 'Oh, you're sure to happen,' she said to live. 'I've seen hatters before,' she said to the.",
                            "points": 269,
                            "level": 8,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "Bessie McDermott",
                "address": "60 Nader Squares, Morissettemouth",
                "email": "glenda.kertzmann@strosin.biz",
                "phone": "066-5498574",
                "created_at": "2020-01-29 21:10:06",
                "updated_at": "2020-01-29 21:10:06",
                "enrolments": [
                    {
                        "id": 18,
                        "date": "2019-12-09",
                        "time": "16:13:00",
                        "status": "career_break",
                        "course_id": 17,
                        "lecturer_id": 3,
                        "created_at": "2020-01-29 21:10:10",
                        "updated_at": "2020-01-29 21:10:10",
                        "course": {
                            "id": 17,
                            "title": "Computer graphics",
                            "code": "PP622",
                            "description": "Queen. 'You make me giddy.' And then, turning to Alice as it can't possibly make me giddy.' And then, turning to Alice: he had come to an end! 'I wonder if I know all sorts of things, and she, oh!.",
                            "points": 533,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 57,
                        "date": "2020-01-05",
                        "time": "12:31:00",
                        "status": "associate",
                        "course_id": 16,
                        "lecturer_id": 3,
                        "created_at": "2020-01-29 21:10:12",
                        "updated_at": "2020-01-29 21:10:12",
                        "course": {
                            "id": 16,
                            "title": "Machine learning",
                            "code": "UK965",
                            "description": "Mock Turtle. 'And how do you want to go near the King say in a melancholy tone: 'it doesn't seem to encourage the witness at all: he kept shifting from one foot to the door, she ran off as hard as.",
                            "points": 288,
                            "level": 7,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 63,
                        "date": "2019-12-10",
                        "time": "18:42:00",
                        "status": "assigned",
                        "course_id": 2,
                        "lecturer_id": 3,
                        "created_at": "2020-01-29 21:10:12",
                        "updated_at": "2020-01-29 21:10:12",
                        "course": {
                            "id": 2,
                            "title": "Interaction design",
                            "code": "XT583",
                            "description": "The March Hare went on. 'We had the best thing to nurse--and she's such a thing before, and behind it, it occurred to her very much what would be like, '--for they haven't got much evidence YET,'.",
                            "points": 225,
                            "level": 8,
                            "created_at": "2020-01-29 21:10:05",
                            "updated_at": "2020-01-29 21:10:05"
                        }
                    },
                    {
                        "id": 90,
                        "date": "2019-12-12",
                        "time": "03:48:00",
                        "status": "assigned",
                        "course_id": 1,
                        "lecturer_id": 3,
                        "created_at": "2020-01-29 21:10:13",
                        "updated_at": "2020-01-29 21:10:13",
                        "course": {
                            "id": 1,
                            "title": "Cloud computing",
                            "code": "WY562",
                            "description": "I like being that person, I'll come up: if not, I'll stay down here till I'm somebody else\"--but, oh dear!' cried Alice again, in a few minutes to see if she had nothing else to do, and in a very.",
                            "points": 597,
                            "level": 7,
                            "created_at": "2020-01-29 21:10:05",
                            "updated_at": "2020-01-29 21:10:05"
                        }
                    },
                    {
                        "id": 128,
                        "date": "2019-11-14",
                        "time": "04:19:00",
                        "status": "career_break",
                        "course_id": 9,
                        "lecturer_id": 3,
                        "created_at": "2020-01-29 21:10:15",
                        "updated_at": "2020-01-29 21:10:15",
                        "course": {
                            "id": 9,
                            "title": "Distributed computing",
                            "code": "OM980",
                            "description": "Alice, 'it would have made a rush at the end of his pocket, and pulled out a box of comfits, (luckily the salt water had not attended to this mouse? Everything is so out-of-the-way down here, that I.",
                            "points": 220,
                            "level": 10,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 186,
                        "date": "2019-12-31",
                        "time": "00:14:00",
                        "status": "interested",
                        "course_id": 12,
                        "lecturer_id": 3,
                        "created_at": "2020-01-29 21:10:18",
                        "updated_at": "2020-01-29 21:10:18",
                        "course": {
                            "id": 12,
                            "title": "Database systems",
                            "code": "TP922",
                            "description": "I'll manage better this time,' she said this she looked up, and there stood the Queen of Hearts, she made her look up in her head, and she very soon finished off the mushroom, and raised herself to.",
                            "points": 375,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    }
                ]
            },
            {
                "id": 4,
                "name": "Noemy Monahan",
                "address": "18 Lulu Ranch, Kingside",
                "email": "adolf.schroeder@gmail.com",
                "phone": "032-4209567",
                "created_at": "2020-01-29 21:10:07",
                "updated_at": "2020-01-29 21:10:07",
                "enrolments": [
                    {
                        "id": 70,
                        "date": "2019-12-14",
                        "time": "11:10:00",
                        "status": "assigned",
                        "course_id": 17,
                        "lecturer_id": 4,
                        "created_at": "2020-01-29 21:10:12",
                        "updated_at": "2020-01-29 21:10:12",
                        "course": {
                            "id": 17,
                            "title": "Computer graphics",
                            "code": "PP622",
                            "description": "Queen. 'You make me giddy.' And then, turning to Alice as it can't possibly make me giddy.' And then, turning to Alice: he had come to an end! 'I wonder if I know all sorts of things, and she, oh!.",
                            "points": 533,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 80,
                        "date": "2020-01-02",
                        "time": "21:50:00",
                        "status": "interested",
                        "course_id": 16,
                        "lecturer_id": 4,
                        "created_at": "2020-01-29 21:10:13",
                        "updated_at": "2020-01-29 21:10:13",
                        "course": {
                            "id": 16,
                            "title": "Machine learning",
                            "code": "UK965",
                            "description": "Mock Turtle. 'And how do you want to go near the King say in a melancholy tone: 'it doesn't seem to encourage the witness at all: he kept shifting from one foot to the door, she ran off as hard as.",
                            "points": 288,
                            "level": 7,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 136,
                        "date": "2020-01-20",
                        "time": "07:54:00",
                        "status": "career_break",
                        "course_id": 13,
                        "lecturer_id": 4,
                        "created_at": "2020-01-29 21:10:16",
                        "updated_at": "2020-01-29 21:10:16",
                        "course": {
                            "id": 13,
                            "title": "Computer networks",
                            "code": "ZU854",
                            "description": "Let me see: four times six is thirteen, and four times five is twelve, and four times seven is--oh dear! I shall have somebody to talk to.' 'How are you getting on now, my dear?' it continued.",
                            "points": 577,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 140,
                        "date": "2020-01-10",
                        "time": "18:12:00",
                        "status": "career_break",
                        "course_id": 4,
                        "lecturer_id": 4,
                        "created_at": "2020-01-29 21:10:16",
                        "updated_at": "2020-01-29 21:10:16",
                        "course": {
                            "id": 4,
                            "title": "Web design",
                            "code": "BD083",
                            "description": "White Rabbit as he spoke, and then nodded. 'It's no use going back to the rose-tree, she went to work very diligently to write with one finger; and the King had said that day. 'A likely story.",
                            "points": 297,
                            "level": 9,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 154,
                        "date": "2019-12-13",
                        "time": "09:23:00",
                        "status": "assigned",
                        "course_id": 16,
                        "lecturer_id": 4,
                        "created_at": "2020-01-29 21:10:17",
                        "updated_at": "2020-01-29 21:10:17",
                        "course": {
                            "id": 16,
                            "title": "Machine learning",
                            "code": "UK965",
                            "description": "Mock Turtle. 'And how do you want to go near the King say in a melancholy tone: 'it doesn't seem to encourage the witness at all: he kept shifting from one foot to the door, she ran off as hard as.",
                            "points": 288,
                            "level": 7,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    }
                ]
            },
            {
                "id": 5,
                "name": "Mrs. Darlene Tromp",
                "address": "9 Eunice Mission, Rueckerland",
                "email": "mcdermott.angeline@yahoo.com",
                "phone": "069-7516728",
                "created_at": "2020-01-29 21:10:07",
                "updated_at": "2020-01-29 21:10:07",
                "enrolments": [
                    {
                        "id": 33,
                        "date": "2019-12-31",
                        "time": "13:05:00",
                        "status": "career_break",
                        "course_id": 3,
                        "lecturer_id": 5,
                        "created_at": "2020-01-29 21:10:11",
                        "updated_at": "2020-01-29 21:10:11",
                        "course": {
                            "id": 3,
                            "title": "Mobile computing",
                            "code": "FS128",
                            "description": "There was nothing on it except a little pattering of feet in a hoarse growl, 'the world would go anywhere without a cat! It's the most important piece of bread-and-butter in the book,' said the.",
                            "points": 200,
                            "level": 10,
                            "created_at": "2020-01-29 21:10:05",
                            "updated_at": "2020-01-29 21:10:05"
                        }
                    },
                    {
                        "id": 73,
                        "date": "2020-01-05",
                        "time": "21:45:00",
                        "status": "assigned",
                        "course_id": 5,
                        "lecturer_id": 5,
                        "created_at": "2020-01-29 21:10:13",
                        "updated_at": "2020-01-29 21:10:13",
                        "course": {
                            "id": 5,
                            "title": "Data analytics and big data",
                            "code": "GU414",
                            "description": "Hatter, and, just as I'd taken the highest tree in front of the Queen's voice in the common way. So she set to work throwing everything within her reach at the Caterpillar's making such a long way.",
                            "points": 305,
                            "level": 8,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 87,
                        "date": "2019-12-24",
                        "time": "00:27:00",
                        "status": "associate",
                        "course_id": 16,
                        "lecturer_id": 5,
                        "created_at": "2020-01-29 21:10:13",
                        "updated_at": "2020-01-29 21:10:13",
                        "course": {
                            "id": 16,
                            "title": "Machine learning",
                            "code": "UK965",
                            "description": "Mock Turtle. 'And how do you want to go near the King say in a melancholy tone: 'it doesn't seem to encourage the witness at all: he kept shifting from one foot to the door, she ran off as hard as.",
                            "points": 288,
                            "level": 7,
                            "created_at": "2020-01-29 21:10:06",
                            "updated_at": "2020-01-29 21:10:06"
                        }
                    },
                    {
                        "id": 159,
                        "date": "2019-11-27",
                        "time": "03:19:00",
                        "status": "career_break",
                        "course_id": 3,
                        "lecturer_id": 5,
                        "created_at": "2020-01-29 21:10:17",
                        "updated_at": "2020-01-29 21:10:17",
                        "course": {
                            "id": 3,
                            "title": "Mobile computing",
                            "code": "FS128",
                            "description": "There was nothing on it except a little pattering of feet in a hoarse growl, 'the world would go anywhere without a cat! It's the most important piece of bread-and-butter in the book,' said the.",
                            "points": 200,
                            "level": 10,
                            "created_at": "2020-01-29 21:10:05",
                            "updated_at": "2020-01-29 21:10:05"
                        }
                    }
                ]
            }
        ],
        addLecturerModal: false,
        deleteLecturerModal: false
    },
    getters: {
        lecturer: state => {
            return state.lecturer;
        },
        lecturers: state => {
            return state.lecturers;
        },
        addLecturerModal: state => {
            return state.addLecturerModal;
        },
        deleteLecturerModal: state => {
            return state.deleteLecturerModal;
        }
    },
    mutations: {
        [types.FETCH_LECTURER](state, payload) {
            state.lecturer = payload;
        },
        [types.TOGGLE_ADD_LECTURER_MODAL](state) {
            state.addLecturerModal = !state.addLecturerModal;

            if (!state.addLecturerModal) {
                // reset form if add lecturer was cancelled
                state.name = state.address = state.email = state.phone = "";
            }
        },
        [types.ADD_LECTURER](state, payload) {
            // add new lecturer to lecturers
            state.lecturers.push(payload);
        },
        [types.SET_NAME](state, payload) {
            state.name = payload;
        },
        [types.SET_ADDRESS](state, payload) {
            state.address = payload;
        },
        [types.SET_EMAIL](state, payload) {
            state.email = payload;
        },
        [types.SET_PHONE](state, payload) {
            state.phone = payload;
        },
        [types.TOGGLE_DELETE_LECTURER_MODAL](state) {
            state.deleteLecturerModal = !state.deleteLecturerModal;
        },
        [types.DELETE_LECTURER](state, payload) {
            state.lecturers.splice(state.lecturers.findIndex(lecturer => lecturer.id === payload), 1);
            state.deleteLecturerModal = false;
        }
    },
    actions: {
        fetchLecturer({commit, state}, id) {
            // find the lecturer in lecturers with a given id
            commit(types.FETCH_LECTURER, state.lecturers.find(lecturer => lecturer.id === id));
        },
        toggleAddLecturerModal({commit}) {
            commit(types.TOGGLE_ADD_LECTURER_MODAL);
        },
        addLecturer({commit, state, dispatch}) {
            let lecturer = {
                id: Math.max.apply(null, state.lecturers.map(t => t.id)) + 1,
                name: state.name,
                address: state.address,
                email: state.email,
                phone: state.phone
            };

            commit(types.ADD_LECTURER, lecturer);
            dispatch('toggleAddLecturerModal');

            // TODO: api
        },
        toggleDeleteLecturerModal({commit}) {
            commit(types.TOGGLE_DELETE_LECTURER_MODAL);
        },
        deleteLecturer({commit}, id) {
            commit(types.DELETE_LECTURER, id);

            // TODO: api
        }
    }
}