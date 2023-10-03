<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";

const cards = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
]);

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "scale(0,0)";
};

const enter = (el, done) => {
  gsap.to(el, {
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "bounce.out",
    onComplete: done,
  });
};

onMounted(() => {
  gsap.from(".card", {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    y: 200,
    ease: "power1",
    stagger: {
      each: 0.1,
      // from: "edges",
    },
  });
});
</script>

<template>
  <div
    class="p-5 min-h-[650px] h-auto border border-slate-300 rounded-sm shadow space-y-6"
  >
    <div class="space-y-3">
      <h1 class="font-bold text-slate-600 text-md text-center w-full">
        Scale And Bounce
      </h1>

      <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        :css="false"
        appear
      >
        <div
          class="shadow rounded-md border border-slate-300 w-32 h-32 bg-sky-600 mx-auto"
        ></div>
      </Transition>
    </div>

    <div class="space-y-3">
      <h1 class="font-bold text-slate-600 text-md text-center w-full">
        Stagger Animation
      </h1>
      <div class="flex items-center justify-between">
        <div v-for="card in cards" :key="card.id" class="card"></div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid rgba(40, 40, 40, 0.653);
  border-radius: 3px;
  width: 8rem;
  height: 8rem;
  background: rgb(175, 198, 3);
}
</style>