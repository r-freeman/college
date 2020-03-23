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
        }
    }
</script>

<style scoped>
    @import "./assets/tailwind.css";
</style>
