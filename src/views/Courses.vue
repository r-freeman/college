<template>
    <div>
        <header class="bg-white border-b-2 border-gray-100">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 class="text-lg font-bold leading-tight text-gray-900">
                    Courses
                </h2>
            </div>
        </header>
        <div class="w-full h-screen bg-whitesmoke">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div>
                        <div class="flex flex-col">
                            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                    <table class="min-w-full">
                                        <thead>
                                        <tr>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Code
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Points
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Level
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                        </tr>
                                        </thead>
                                        <tbody class="bg-white">
                                        <Course v-for="course in courses"
                                                :course="course"
                                                :key="course.id"
                                                v-on:edit-course="editCourse(course)"/>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dashboard from "../layouts/Dashboard";
    import Course from "../components/Course";

    export default {
        name: "Courses",
        components: {
            Course
        },
        data() {
            return {
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
                ]
            }
        },
        created() {
            this.$emit("update:layout", Dashboard);
        },
        methods: {
            editCourse(course) {
                alert(course.title);
            }
        }
    }
</script>

<style scoped>

</style>