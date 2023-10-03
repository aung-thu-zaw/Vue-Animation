<script setup>
import { ref } from "vue";

const lists = ref([
  { text: "Wake up immediate 6AM", completed: false },
  { text: "Keep the bed", completed: false },
  { text: "Brush the teeth", completed: false },
]);

const list = ref("");

const addList = (value) => {
  lists.value.push({ text: value, completed: false });
  list.value = "";
};

const toggleCompleted = (listIndex) => {
  const findList = lists.value.find((list, index) => index === listIndex);
  findList.completed = !findList.completed;
};

const removeList = (listIndex) => {
  lists.value = lists.value.filter((list, index) => index !== listIndex);
};

const handleSort = () => {
  lists.value.sort((a, b) => a.text.localeCompare(b.text));
};
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-5">
    <div class="flex items-center justify-center">
      <img
        src="https://img.freepik.com/premium-photo/een-tekening-van-een-document-met-een-pen-en-pen-erop_905510-1177.jpg?w=2000"
        class="rounded-md object-cover h-52"
      />
    </div>

    <h1 class="text-center w-full font-bold text-2xl">Write Down Your Lists</h1>

    <div class="px-5 py-3 flex flex-col w-[400px]">
      <form
        @submit.prevent="addList(list)"
        class="h-auto flex items-center justify-between w-full"
      >
        <input
          type="text"
          class="border border-slate-400 rounded-sm text-sm p-3 w-full font-semibold text-slate-600 focus:ring-0 focus:outline-none focus:border-slate-500"
          v-model="list"
        />
      </form>

      <div class="my-3 text-center">
        <button
          type="button"
          @click="handleSort"
          class="font-bold text-xs px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-sm"
        >
          Sort
        </button>
      </div>

      <TransitionGroup
        tag="ul"
        name="slide-up"
        class="my-5 flex flex-col items-start space-y-2"
        appear
      >
        <!-- List Card  -->
        <li v-for="(list, index) in lists" :key="index" class="w-full">
          <div
            class="border border-slate-300 shadow rounded-sm w-full text-xs font-medium p-3 flex items-center justify-between"
          >
            <div :class="{ 'line-through': list.completed }">
              {{ list.text }}
            </div>
            <div class="space-x-3">
              <button @click="removeList(index)">&#10060;</button>
              <button @click="toggleCompleted(index)">&#9989;</button>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.slide-up-move {
  transition: all 0.8s ease-in;
}

.slide-up-enter-active {
  transition: all 0.3s ease;
}
</style>
