<template>
    <div>
        <!--        <EditCourse v-if="editCourseModal"-->
        <!--                    v-on:toggle-edit-course-modal="toggleEditCourseModal"/>-->

        <!--        <DeleteCourse v-if="deleteCourseModal"-->
        <!--                      v-on:toggle-delete-course-modal="toggleDeleteCourseModal"-->
        <!--                      v-on:delete-course="deleteCourse"/>-->

        <header class="bg-white border-b-2 border-gray-200">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 h-18">
                <div class="flex items-center">
                    <h2 class="text-lg font-bold leading-tight text-gray-900">
                        View Enrolment
                    </h2>
                </div>
            </div>
        </header>
        <div class="w-full h-screen bg-whitesmoke">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="flex justify-between items-center px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Enrolment
                            </h3>
                            <div>
                                <button type="button"
                                        class="text-indigo-600 hover:text-indigo-900 font-semibold focus:outline-none focus:underline"
                                        @click.prevent="">
                                    Edit
                                </button>
                                <button type="button"
                                        class="ml-4 text-red-600 hover:text-red-900 font-semibold focus:outline-none focus:underline"
                                        @click.prevent="">Delete
                                </button>
                            </div>
                        </div>
                        <div>
                            <dl>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Date
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                        {{ enrolment.date | moment("Do MMMM YYYY") }}
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Time
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                        {{ [enrolment.time, "hh:mm:ss"] | moment("hh:mm A") }}
                                    </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Status
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                        {{ enrolment.status }}
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Course
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                        {{ enrolment.course.title }}
                                    </dd>
                                </div>
                                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Lecturer
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                        {{ enrolment.lecturer.name }}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dashboard from "../../layouts/Dashboard";
    import {mapGetters, mapActions} from "vuex";
    // import EditCourse from "./EditCourse";
    // import DeleteCourse from "./DeleteCourse";

    export default {
        name: "Enrolment",
        components: {
            // EditCourse,
            // DeleteCourse
        },
        created() {
            this.$emit("update:layout", Dashboard);
            this.$store.dispatch('enrolments/fetchEnrolment', this.$route.params.id);
        },
        methods: {
            // deleteCourse() {
            //     this.$store.dispatch('courses/deleteCourse', this.$route.params.id)
            //         .then(() => {
            //             this.$router.push('/courses');
            //         });
            // },
            // ...mapActions('courses', [
            //     'toggleEditCourseModal',
            //     'toggleDeleteCourseModal'
            // ])
        },
        computed: {
            ...mapGetters('enrolments', [
                'enrolment',
                // 'editCourseModal',
                // 'deleteCourseModal'
            ])
        },
    }
</script>

<style scoped>

</style>