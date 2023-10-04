<script setup>
import gsap from "gsap";
import { onMounted, ref, watch } from "vue";

const number = ref(0);
const tweenedNumber = ref(0);
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

const gsapTimelineSequence = () => {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  timeline.to(".first", { x: 1000, duration: 2, ease: "expo.out" });
  timeline.to(".second", { x: 1000, duration: 2, ease: "expo.out" }, "<0.5");
  timeline.to(".third", { x: 1000, duration: 2, ease: "expo.out" });
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

  setInterval(randomNumber, 1300);

  gsapTimelineSequence();
});

const randomNumber = () => {
  number.value = Math.floor(Math.random() * (800 - 0));
};

watch(
  () => number.value,
  (currentValue, previousValue) => {
    gsap.to(tweenedNumber, {
      duration: 1,
      ease: "circ.out",
      value: currentValue,
    });
  }
);
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

    <div class="space-y-3">
      <h1 class="font-bold text-slate-600 text-md text-center w-full">
        Dynamic Number Bar Animation
      </h1>
      <div :style="{ width: tweenedNumber + 'px' }" class="bar">
        <span class="font-semibold">{{ tweenedNumber.toFixed(0) }}</span>
      </div>
    </div>

    <div class="space-y-3">
      <h1 class="font-bold text-slate-600 text-md text-center w-full">
        Gsap Timeline
      </h1>
      <div>
        <img
          class="runner first"
          src="https://media.istockphoto.com/id/1167084433/photo/young-man-in-sportswear-running.jpg?s=612x612&w=0&k=20&c=DbWPp6FjB_XU0bXIWge0qNHLRUnBQXNeBSrFTMI4G7Q="
          alt="runner"
        />
        <img
          class="runner second"
          src="https://media.istockphoto.com/id/1167084433/photo/young-man-in-sportswear-running.jpg?s=612x612&w=0&k=20&c=DbWPp6FjB_XU0bXIWge0qNHLRUnBQXNeBSrFTMI4G7Q="
          alt="runner"
        />
        <img
          class="runner third"
          src="https://media.istockphoto.com/id/1167084433/photo/young-man-in-sportswear-running.jpg?s=612x612&w=0&k=20&c=DbWPp6FjB_XU0bXIWge0qNHLRUnBQXNeBSrFTMI4G7Q="
          alt="runner"
        />
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

.bar {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(3, 137, 134);
}

.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
  object-fit: cover;
}
</style>