<template>
    <div id="app">
        <component :is="layout">
            <router-view :layout.sync="layout"/>
        </component>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                layout: 'div'
            }
        },
        created() {
            this.$router.push('/lecturers');
        }
    }
</script>

<style scoped>
    @import "./assets/tailwind.css";
</style>
