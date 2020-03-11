<template>
    <div class="w-full h-screen bg-whitesmoke">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">

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