<template>
    <nav class="bg-iris">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <Education class="w-8 h-8 text-white fill-current"/>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <router-link to="/"
                                         class="px-3 py-2 rounded-md text-sm font-semibold focus:outline-none focus:text-white"
                                         :class="[currentPage.includes('home') ? activeClass : 'text-tropicalblue hover:text-white']">
                                Home
                            </router-link>
                            <router-link to="/courses"
                                         class="ml-4 px-3 py-2 rounded-md text-sm font-semibold focus:outline-none focus:text-white"
                                         :class="[currentPage.includes('course') ? activeClass : 'text-tropicalblue hover:text-white']">
                                Courses
                            </router-link>
                            <router-link to="/enrolments"
                                         class="ml-4 px-3 py-2 rounded-md text-sm font-semibold focus:outline-none focus:text-white"
                                         :class="[currentPage.includes('enrolment') ? activeClass : 'text-tropicalblue hover:text-white']">
                                Enrolments
                            </router-link>
                            <router-link to="/lecturers"
                                         class="ml-4 px-3 py-2 rounded-md text-sm font-semibold focus:outline-none focus:text-white"
                                         :class="[currentPage.includes('lecturer') ? activeClass : 'text-tropicalblue hover:text-white']">
                                Lecturers
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div>
                        <div>
                            <button @click="open = !open"
                                    class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid">
                                <img class="h-8 w-8 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import Education from "../assets/svg/Education";
    import {mapGetters} from "vuex";

    export default {
        name: "Header",
        components: {
            Education
        },
        data() {
            return {
                activeClass: 'active'
            }
        },
        computed: {
            currentPage() {
                return this.$route.name.toLowerCase();
            },
            ...mapGetters('auth', ['user'])
        }
    }
</script>

<style scoped>
    .active {
        @apply text-white bg-bluegem
    }
</style>