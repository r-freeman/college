<template>
    <div>

    </div>
</template>

<script>
    import Dashboard from "../layouts/Dashboard";

    export default {
        name: "Login",
        created() {
            this.$emit("update:layout", Dashboard);
        }
    }
</script>

<style scoped>

</style>