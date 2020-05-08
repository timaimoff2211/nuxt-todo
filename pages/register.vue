<template>
    <div class="pt-5 pb-5">
        <h1>Регистрация</h1>
        <hr>
        <form @submit.prevent="registerHandler">
            <div class="form-group">
                <input 
                    type="text" 
                    placeholder="Придумайте логин"
                    class="form-control"
                    v-model="login"
                    required
                >
            </div>
            <div class="form-group">
                <input 
                    type="password" 
                    placeholder="Придумайте пароль"
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
                    Зарегистрироваться
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
            addUser: 'users/addUser'
        }),
        registerHandler() {
            const newUser = {
                id: Date.now(),
                login: this.login, 
                password: this.password
            }

            this.addUser(newUser);

            this.password = '';
            this.login = '';
            this.$router.push('/login');
        }
    }
}
</script>