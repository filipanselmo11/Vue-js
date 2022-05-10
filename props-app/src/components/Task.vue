<template>
  <div>
    <div class="taskItems">
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <button>{{ task.title }}</button>
        </li>
      </ul>
    </div>
    <div class="clearBtns">
      <button>Clear Completed</button>
      <button @click="clearAll">Clear All</button>
    </div>
    <div class="pendingTasks">
      <span>Pending Tasks: </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clearAll() {
      this.tasks = [];
    },
  },
};
</script>

<style></style>
