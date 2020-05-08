export const state = () => ({
    users: [],
    authUser: null,
    token: null
})

export const mutations = {
    getUsers(state, users) {
        state.users = users;
    },
    addUser(state, newUser) {
        state.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(state.users));
    },
    authUser(state, user) {
        const currUser = state.users.find(p => p.login == user.login && p.password == user.password);
        localStorage.setItem('authUser', JSON.stringify(currUser));
        state.authUser = currUser;
        state.token = 'truetoken';
    },
    logout(state) {
        localStorage.removeItem('authUser');
        state.authUser = null;
        state.token = null;
    }
}

export const actions = {
    getUsers({commit}) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        commit('getUsers', users);
    }
}

export const getters = {
    users: state => state.users,
    authUser: state => state.authUser,
    hasToken: state => !!state.token,
}