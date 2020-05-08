<template>
    <header class="header bg-white fixed-top border-bottom shadow-sm">
        <div class="header-items container d-flex justify-content-between align-items-center">
            <nav class="navbar navbar-light bg-light nav-items">
                <ul class="navbar-nav navbar-expand-lg">
                    <li class="nav-item mr-2">
                        <nuxt-link
                        active-class="active"
                            class="nav-link" 
                            to="/"
                            exact
                        >
                            Главная
                        </nuxt-link>
                    </li>
                    <li class="nav-item mr-2">
                        <nuxt-link
                        active-class="active" 
                            class="nav-link" 
                            to="/about"
                        >
                            О приложении
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link
                        active-class="active" 
                            class="nav-link" 
                            to="/create"
                        >
                            Добавить задачу
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <nuxt-link class="logo" exact to="/">Todo App</nuxt-link>
            <nav class="navbar navbar-light bg-light nav-items justify-content-end">
                <ul class="navbar-nav navbar-expand-lg" v-if="!userToken">
                    <li class="nav-item mr-2">
                        <nuxt-link 
                            to="/register" 
                            class="nav-link"
                            active-class="active"
                        >
                            Регистрация
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link 
                            to="/login" 
                            class="nav-link"
                            active-class="active"
                        >
                            Вход
                        </nuxt-link>
                    </li>
                </ul>
                <ul v-else class="navbar-nav navbar-expand-lg">
                    <li class="nav-item">
                        <nuxt-link 
                            to="/profile" 
                            class="nav-link mr-2"
                            active-class="active"
                        >
                            Кабинет
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <button
                            class="btn btn-warning"
                            @click="userLogout"
                        >
                            Выйти
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="burger-menu" @click="toggleMenu">
            <div class="burger-line"></div>
        </div>
        <MobileNav 
            v-bind:userToken="userToken" 
            v-bind:open="showMobileMenu"
            v-bind:toggle="toggleMenu" 
        />
    </header>
</template>

<script>
import {mapMutations} from 'vuex';
import MobileNav from '@/components/MobileNav';

export default {
    data: () => ({
        showMobileMenu: false
    }),
    components: {
        MobileNav
    },
    props: ['userToken'],
    methods: {
        ...mapMutations({logout: 'users/logout'}),
        userLogout() {
            this.logout();
            this.$router.push('/login');
        },
        toggleMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        }
    }
}
</script>

<style scoped>
    .logo {
        color: #000;
        font-size: 22px;
        text-decoration: none;
    }
    .nav-items {
        flex: 0 0 44%;
    }
    .burger-menu {
        position: absolute;
        top: calc(50% - 15px);
        left: 20px;
        width: 30px;
        height: 30px;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        cursor: pointer;
        display: none;
    }
    .burger-menu .burger-line {
        position: relative;
        width: 100%;
        height: 2px;
        background: #000;
    }
    .burger-menu .burger-line:before {
        content: "";
        position: absolute;
        top: -5px;
        width: 100%;
        background: #000;
        height: 2px;
    }
    .burger-menu .burger-line:after {
        content: "";
        position: absolute;
        bottom: -5px;
        width: 100%;
        background: #000;
        height: 2px;
    }

    @media(max-width: 1000px) {
        .nav-items {
            display: none;
        }
        .header-items {
            justify-content: center!important;
        }
        .header {
            padding: 10px 0;
        }
        .burger-menu {
            display: flex;
        }
    }
</style>