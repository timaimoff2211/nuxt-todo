<template>
    <div>
        <div class="jumbotron">
            <h1>Добавьте новую задачу</h1>
        </div>
        <hr>
        <div>
            <form @submit.prevent="createTodo">
                <div class="form-group">
                    <input 
                        type="text" 
                        class="form-control"
                        placeholder="Заголовок задачи"
                        v-model="inputTitle"
                        required
                    >
                </div>
                <div class="form-group">
                    <textarea 
                        type="text" 
                        class="form-control"
                        placeholder="Текст задачи"
                        v-model="inputText"
                        maxlength="70"
                        required
                    />
                    <small class="form-text text-muted">Максимум 70 символов</small>
                </div>
                <div class="form-group">
                    <input 
                        type="date"
                        class="form-control"
                        v-model="inputDate"
                        required
                    >
                </div>
                <button 
                    type="submit" 
                    class="btn btn-primary"
                >
                    Создать
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data() {
        return {
            inputDate: '',
            inputTitle: '',
            inputText: ''
        }
    },
    methods: {
        ...mapMutations({
            addTodo: 'todos/addTodo'
        }),
        createTodo() {
            const newTodo = {
                id: Date.now(),
                title: this.inputTitle,
                text: this.inputText,
                date: this.inputDate,
                completed: false
            }
    
            this.addTodo(newTodo);

            this.inputTitle = '';
            this.inputText = '';
            this.inputDate = '';

            alert('Задача добавлена!');
        }
    }
}
</script>
