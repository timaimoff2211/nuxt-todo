export const state = () => ({
    list: []
})

export const mutations = {
    setTodos(state, todos) {
        state.list = todos;
    },
    addTodo(state, todo) {
        state.list.push(todo);
        saveToLocalStorage(state.list);
    },
    toggleComplete(state, todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage(state.list);
    },
    removeTodo(state, id) {
        state.list = state.list.filter(todo => todo.id !== id);
        saveToLocalStorage(state.list);
    },
    editTitle(state, {todo, newTitle}) {
        todo.title = newTitle;
        saveToLocalStorage(state.list);
    },
    editBody(state, {todo, newText}) {
        todo.text = newText;
        saveToLocalStorage(state.list);
    },
    editDate(state, {todo, newDate}) {
        todo.date = newDate;
        saveToLocalStorage(state.list);
    }
}

export const actions = {
    getTodos({commit}) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        commit('setTodos', todos);
    }
}

export const getters = {
    todos: state => state.list,
    completedTodos: state => state.list.filter(t => t.completed),
    uncompletedTodos: state => state.list.filter(t => !t.completed)
}

const saveToLocalStorage = (state) => {
    localStorage.setItem('todos', JSON.stringify(state));
}