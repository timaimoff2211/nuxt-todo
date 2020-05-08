<template>
    <div class="mobile-menu" v-bind:class="{ 'menu-show': open, 'hide-menu': !open }">
        <div class="close-menu" @click="toggleMenu">&times;</div>
        <ul class="nav-items">
            <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active"
                    class="nav-link" 
                    to="/"
                    exact
                >
                    Главная
                </nuxt-link>
            </li>
            <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active" 
                    class="nav-link" 
                    to="/about"
                >
                    О приложении
                </nuxt-link>
            </li>
            <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active" 
                    class="nav-link" 
                    to="/create"
                >
                    Добавить задачу
                </nuxt-link>
            </li>
            <div v-if="!userToken">
                <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active" 
                    class="nav-link" 
                    to="/register"
                >
                    Регистрация
                </nuxt-link>
            </li>
            <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active" 
                    class="nav-link" 
                    to="/login"
                >
                    Вход
                </nuxt-link>
            </li>
            </div>
            <div v-else>
            <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active" 
                    class="nav-link" 
                    to="/create"
                >
                    Кабинет
                </nuxt-link>
            </li>
            <li class="pt-2 pb-2 border-bottom" @click="toggleMenu">
                <nuxt-link
                    active-class="active" 
                    class="nav-link" 
                    to="/create"
                >
                    Выйти
                </nuxt-link>
            </li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['userToken', 'open', 'toggle'],
    methods: {
        toggleMenu() {
            this.toggle();
        }
    }
}
</script>

<style scoped>
    .mobile-menu {
        position: fixed;
        top: 0;
        bottom: 0;
        background: #fff;
        width: 300px;
        transition: all .3s ease;
        box-shadow: 3px 0 7px 0 rgba(0,0,0,0.2);
        z-index: 99999;
    }
    .menu-show { 
        left: 0;
    }
    .hide-menu {
        left: -200%;
    }
    .close-menu {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        font-size: 25px;
        cursor: pointer;
    }
    .nav-items {
        padding: 30px 10px;
    }
    li {
        list-style: none;
    }
    li > a {
        color: #000;
    }
</style>