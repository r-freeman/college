<template>
    <nav class="bg-iris">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="h-8 w-8 bg-white">

                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <router-link to="/home"
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
                    <div class="ml-4 flex items-center md:ml-6">
                        <router-link to="/login"
                                     class="px-3 py-2 rounded-md text-sm font-semibold focus:outline-none focus:text-white"
                                     :class="[currentPage.includes('login') ? activeClass : 'text-tropicalblue hover:text-white']">
                            John Smith
                        </router-link>
                        <router-link to="/register"
                                     class="px-3 py-2 rounded-md text-sm font-semibold focus:outline-none focus:text-white"
                                     :class="[currentPage.includes('register') ? activeClass : 'text-tropicalblue hover:text-white']">
                            Log Out
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeClass: 'active'
            }
        },
        computed: {
            currentPage() {
                return this.$route.name.toLowerCase();
            }
        }
    }
</script>

<style scoped>
    .active {
        @apply text-white bg-bluegem
    }
</style>