<template>
    <div>
        <h1>Кабинет пользователя</h1>
        <hr>
        <div class="jumbotron" v-if="authUser">
            <h3>Приветствую, {{ authUser.login }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        authUser() {
            return this.$store.getters['users/authUser'];
        }
    },
    middleware: ['auth']
}
</script>