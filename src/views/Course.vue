<template>
    <div>
        <header class="bg-white border-b-2 border-gray-100">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 class="text-lg font-bold leading-tight text-gray-900">
                    Courses
                </h2>
            </div>
        </header>
    </div>
</template>

<script>
    import Dashboard from "../layouts/Dashboard";

    export default {
        name: "Course",
        created() {
            this.$emit("update:layout", Dashboard);
        }
    }
</script>

<style scoped>

</style>