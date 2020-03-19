<template>
    <div>
        <AddEnrolment v-if="addEnrolmentModal"
                      v-on:toggle-add-enrolment-modal="toggleAddEnrolmentModal"/>

        <header class="bg-white border-b-2 border-gray-200">
            <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 h-18">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold leading-tight text-gray-900">
                        Enrolments
                    </h2>
                    <button type="button"
                            @click="toggleAddEnrolmentModal"
                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none transition duration-150 ease-in-out">
                        Add Enrolment
                    </button>
                </div>
            </div>
        </header>
        <div class="w-full h-screen bg-whitesmoke">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div>
                        <div class="flex flex-col">
                            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <p v-if="!enrolments.length" class="text-sm font-medium text-center text-gray-500">No
                                    Enrolments</p>
                                <div v-else
                                     class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg">
                                    <table class="min-w-full">
                                        <thead>
                                        <tr>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Time
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Course
                                            </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Lecturer
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody class="bg-white">
                                        <Enrolment v-for="enrolment in enrolments"
                                                   :enrolment="enrolment"
                                                   :key="enrolment.id"/>
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
    import Dashboard from "../../layouts/Dashboard";
    import Enrolment from "../../components/Enrolment";
    import AddEnrolment from "./AddEnrolment";
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "Enrolments",
        components: {
            Enrolment,
            AddEnrolment
        },
        data() {
            return {}
        },
        created() {
            this.$emit("update:layout", Dashboard);
        },
        methods: {
            ...mapActions('enrolments', ['toggleAddEnrolmentModal'])
        },
        computed: {
            ...mapGetters('enrolments', [
                'enrolments',
                'addEnrolmentModal'
            ])
        }
    }
</script>

<style scoped>

</style>