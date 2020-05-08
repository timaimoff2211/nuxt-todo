<template>
    <div class="pt-5 pb-5">
        <h1>Авторизация</h1>
        <hr>
        <form @submit.prevent="loginHandler">
            <div class="form-group">
                <input 
                    type="text" 
                    placeholder="Введите логин"
                    class="form-control"
                    v-model="login"
                    required
                >
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    placeholder="Введите пароль"
                    class="form-control"
                    v-model="password"
                    required
                >
            </div>
            <div class="d-flex">
                <button
                type="submit" 
                    class="btn btn-success mr-3"
                >
                    Войти
                </button>
                <nuxt-link exact to="/" class="btn btn-info">На главную</nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        ...mapMutations({
            authUser: 'users/authUser'
        }),
        loginHandler() {
            const currentUser = {
                login: this.login,
                password: this.password
            }

            this.authUser(currentUser);
            this.$router.push('/');
        }
    },
    fetch({store}) {
        if(store.getters['users/users'].length === 0) {
            store.dispatch('users/getUsers');
        }
    }
}
</script>
