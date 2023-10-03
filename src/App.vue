<script setup>
</script>

<template>
  <nav class="space-x-5 text-center my-5">
    <router-link
      :to="{ name: 'home' }"
      class="text-slate-700 font-bold text-lg"
    >
      Home
    </router-link>

    <span class="text-slate-500 font-bold">|</span>

    <router-link
      :to="{ name: 'about' }"
      class="text-slate-700 font-bold text-lg"
    >
      About
    </router-link>

    <span class="text-slate-500 font-bold">|</span>

    <router-link
      :to="{ name: 'lists' }"
      class="text-slate-700 font-bold text-lg"
    >
      List
    </router-link>
  </nav>

  <div class="container mx-auto p-10">
    <Transition name="slide-fade" mode="out-in">
      <router-view />
    </Transition>
  </div>
</template>

<style scoped>
a.router-link-active {
  color: green;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
