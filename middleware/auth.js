export default function({store, redirect}) {
    if(!store.getters['users/hasToken']) {
        redirect('/login');
    }
}