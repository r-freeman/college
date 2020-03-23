<template>
    <div>
        <header class="bg-white border-b-2 border-gray-200">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 h-18">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-semibold leading-tight text-gray-900">
                        Dashboard
                    </h2>
                </div>
            </div>
        </header>
        <div class="w-full h-screen bg-whitesmoke">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dashboard from "../layouts/Dashboard";

    export default {
        name: "Home",
        created() {
            this.$emit("update:layout", Dashboard);
        }
    }
</script>

<style scoped>

</style>