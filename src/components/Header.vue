<template>
    <header class="bg-white border-b-2 border-gray-100">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="text-lg font-bold leading-tight text-gray-900">
                {{ this.$route.name }}
            </h2>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>