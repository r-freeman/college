<template>
    <div id="app">
        <component :is="layout">
            <router-view :layout.sync="layout"/>
        </component>
    </div>
</template>

<script>
    import authService from "./services/auth";
    import {mapActions} from "vuex";

    export default {
        data() {
            return {
                layout: 'div'
            }
        },
        created() {
            authService.isLoggedIn()
                .then(() => {
                    this.fetchUser();
                }).catch(e => this.$router.push('/login'));

            this.$router.push('/');
        },
        methods: {
            ...mapActions('auth', ['fetchUser'])
        }
    }
</script>

<style scoped>
    @import "./assets/tailwind.css";
</style>
