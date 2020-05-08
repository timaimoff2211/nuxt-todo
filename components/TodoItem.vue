<template>
    <div class="card mb-3">
        <div class="card-body">
        <h5 class="card-title" @click="todoEditTitle">
            {{todo.title}}
        </h5>
        <p class="card-text" @click="todoEditBody">{{todo.text}}</p>
        <div class="border-top pt-2 pb-2 date-block">
            <span 
                class="text-secondary todo-date"
                @click="showEditDate"
            >
                Срок выполнения: {{todo.date}}
            </span>
            <div class="date-change" v-if="showNewDate">
                <input type="date" class="form-control" v-model="newDate">
                <button 
                    class="btn btn-success btn-sm mt-2"
                    @click="todoEditDate"
                >
                    Изменить
                </button>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <label>
            <input 
                type="checkbox" 
                :checked="todo.completed"
                @change="completeHandler"
            >
            <span>Выполнено</span>
            </label>
            <button 
                class="btn btn-danger"
                @click="removeHandler"
            >
                Удалить
            </button>
        </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data() {
        return {
            newDate: '',
            showNewDate: false
        }
    },

    props: ['todo'],
    methods: {
        ...mapMutations({
            removeTodo: 'todos/removeTodo', 
            toggleComplete: 'todos/toggleComplete',
            editTitle: 'todos/editTitle',
            editBody: 'todos/editBody',
            editDate: 'todos/editDate'
        }),
        removeHandler() {
            this.removeTodo(this.todo.id);
        },
        completeHandler() {
            this.toggleComplete(this.todo);
        },
        todoEditTitle() {
            const newTitle = prompt(this.todo.title, this.todo.title);
            if(!newTitle) return;
            this.editTitle({todo:this.todo, newTitle});
        },
        todoEditBody() {
            const newText = prompt(this.todo.text, this.todo.text);
            if(!newText) return;
            if(newText.length > 70) {
                alert('Максимум символов 70');
            } else {
                this.editBody({todo:this.todo, newText});
            }
        },
        showEditDate() {
            this.showNewDate = !this.showNewDate;
        },
        todoEditDate() {
            const newDate = this.newDate;
            if(!newDate) this.showEditDate();
            else {
                this.editDate({todo:this.todo, newDate});
                this.showEditDate();
            }
        }
    }
 }
</script>

<style scoped>
    .card:last-child {
        margin-bottom: 0!important;
    }
    .card-title, .card-text, .todo-date {
        transition: all .3s ease;
        cursor: pointer;
    }
    .card-title:hover, .card-text:hover {
        color: #686868;
    }
    .date-block {
        position: relative;
    }
    .date-change {
        position: absolute;
        top: 40%;
        left: 22%;
        padding: 10px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.25);
        width: 250px;
    }
</style>