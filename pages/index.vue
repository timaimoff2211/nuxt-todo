<template>
  <div>
    <div class="d-flex flex-row justify-content-between align-items-center">
      <h1>Планировщик задач</h1>
      <div>
        <select 
          class="custom-select"
          v-model="selectedTasks"
        >
          <option value="all" completed>Все задачи</option>
          <option value="uncompleted">Текущие задачи</option>
          <option value="completed">выполненные задачи</option>
        </select>
      </div>
    </div>

    <hr>

    <div class="row" v-if="selectedTasks === 'all'">
      <div class="col" v-if="todos.length">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          v-bind:todo="todo"
        />
      </div>
      <div v-else class="col">
        <h3>Задач пока нет</h3>    
      </div>
    </div>

    <div class="row" v-else-if="selectedTasks === 'completed'">
      <div class="col" v-if="completedTodos.length">
        <TodoItem
          v-for="todo in completedTodos"
          :key="todo.id"
          v-bind:todo="todo"
        />
      </div>
      <div v-else class="col">
        <h3>Задач пока нет</h3>    
      </div>
    </div>

    <div class="row" v-else>
      <div class="col" v-if="uncompletedTodos.length">
        <TodoItem
          v-for="todo in uncompletedTodos"
          :key="todo.id"
          v-bind:todo="todo"
        />
      </div>
      <div v-else class="col">
        <h3>Задач пока нет</h3>    
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TodoItem from '@/components/TodoItem'

export default {
  components: {
    TodoItem
  },
  fetch({store}) {
    if(store.getters['todos/todos'].length === 0) {
      store.dispatch('todos/getTodos')
    }
  },
  data() {
    return {
      selectedTasks: 'all'
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/todos'];
    },
    completedTodos() {
      return this.$store.getters['todos/completedTodos'];
    },
    uncompletedTodos() {
      return this.$store.getters['todos/uncompletedTodos'];
    },
    authUser() {
      return this.$store.getters['users/authUser'];
    }
  }
}
</script>

<style>

</style>
