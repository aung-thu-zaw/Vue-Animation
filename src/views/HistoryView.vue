<script setup>
import { ref } from "vue";
import Velocity from "velocity-animate";

const histories = ref([
  {
    image:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1242",
    name: "Mr.Aung Thu Zaw",
    about: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, neque obcaecati! Eius sequi blanditiis, velit quidem ut iste. Omnis sed, ea, odit consequuntur asperiores iusto dicta doloremque perferendis pariatur excepturi enim tempora magni aspernatur suscipit voluptatum! Quisquam odit porro id iure! Impedit nesciunt eos, commodi labore, facilis magnam quia laboriosam animi odio fugiat illum ipsa dolor eum iste maiores. Corrupti laboriosam error sequi reiciendis. Ipsam porro exercitationem et perspiciatis eveniet dolore nobis odio voluptatem sed! Cumque, odio. Ut maiores assumenda et dolor quos. Vel, laboriosam labore, tempore quidem perspiciatis iure officia blanditiis repellat id nam quasi quibusdam consequatur at facere.`,
  },
  {
    image:
      "https://api.time.com/wp-content/uploads/2017/02/john-wick-2-keanu-reeves1.jpg",
    name: "Mr.John Wick",
    about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        facere repellat vitae incidunt nostrum. Nesciunt fuga nemo ullam
        excepturi, qui voluptate alias impedit dolores cupiditate? Veniam
        quisquam laborum in fuga temporibus ipsum ipsam, hic libero
        necessitatibus adipisci ut exercitationem alias molestiae harum repellat
        numquam nulla non tempore incidunt? Quasi temporibus id officiis! Iure
        rem quam aliquam earum repudiandae. Labore vel laborum expedita sed.
        Sunt quo aliquam voluptatibus qui quam totam iste doloribus dolorem
        eaque! Facere ab quisquam dolorem expedita harum consectetur eveniet,
        rerum atque quasi fugiat dolorum a maiores error fuga. Consequatur
        excepturi laborum odit nesciunt corporis assumenda ipsum hic optio
        debitis quod asperiores eius praesentium perspiciatis itaque
        reprehenderit accusantium eveniet molestiae quidem tenetur porro sint,
        aliquam ut? Odit fuga dolorum vel, veniam, ea numquam veritatis soluta
        omnis magni ipsum nobis enim. Expedita molestiae, sed quasi labore
        voluptate optio sequi. Nemo, eveniet deleniti. Provident, eum quidem.
        Quidem illum eligendi vero laudantium exercitationem vitae sint
        voluptate recusandae adipisci, cumque iusto est in ipsam modi.
        Cupiditate autem iure corrupti. Libero eos commodi quis esse, nam
        temporibus alias excepturi molestias corrupti, laudantium dicta, quas
        expedita voluptatem molestiae aspernatur in autem ratione at cumque?
        Perspiciatis a aliquid exercitationem perferendis officiis doloremque
        amet illo pariatur`,
  },
  {
    image:
      "https://vader.news/__export/1629983389035/sites/gadgets/img/2020/07/28/cillian_murphy_peaky_blinders.jpg_1143854455.jpg",
    name: "Mr. Tommy Shelby",
    about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        facere repellat vitae incidunt nostrum. Nesciunt fuga nemo ullam
        excepturi, qui voluptate alias impedit dolores cupiditate? Veniam
        quisquam laborum in fuga temporibus ipsum ipsam, hic libero
        necessitatibus adipisci ut exercitationem alias molestiae harum repellat
        numquam nulla non tempore incidunt? Quasi temporibus id officiis! Iure
        rem quam aliquam earum repudiandae. Labore vel laborum expedita sed.
        Sunt quo aliquam voluptatibus qui quam totam iste doloribus dolorem
        eaque! Facere ab quisquam dolorem expedita harum consectetur eveniet,
        rerum atque quasi fugiat dolorum a maiores error fuga. Consequatur
        excepturi laborum odit nesciunt corporis assumenda ipsum hic optio
        debitis quod asperiores eius praesentium perspiciatis itaque
        reprehenderit accusantium eveniet molestiae quidem tenetur porro sint,
        aliquam ut? Odit fuga dolorum vel, veniam, ea numquam veritatis soluta
        omnis magni ipsum nobis enim.`,
  },
]);

const selectedHistory = ref(null);

const handleSelectHistory = (index) => {
  if (selectedHistory.value) {
    closedHistory();

    setTimeout(() => {
      selectedHistory.value = histories.value[index];
    }, 1000);
  } else {
    selectedHistory.value = histories.value[index];
  }
};

const closedHistory = () => {
  selectedHistory.value = null;
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.width = "0px";
};

const enter = (el, done) => {
  Velocity(
    el,
    { opacity: 1, width: "700px" },
    { duration: 1000, easing: "easeOutCubic", complete: done }
  );
};

const leave = (el, done) => {
  Velocity(
    el,
    { opacity: 0, width: "0px" },
    { duration: 500, easing: "easeInCubic", complete: done }
  );
};
</script>

<template>
  <div class="flex flex-col items-start p-5 min-h-[650px] h-auto">
    <div class="flex items-center justify-between w-1/2 mx-auto mb-5">
      <div
        v-for="(history, index) in histories"
        :key="index"
        class="space-y-3 flex flex-col items-center justify-center"
        @click="handleSelectHistory(index)"
      >
        <img
          :src="history.image"
          class="w-24 h-24 ring-2 ring-slate-300 object-cover rounded-full"
        />
        <h1 class="font-bold text-md text-slate-600">{{ history.name }}</h1>
      </div>
    </div>

    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div
        v-if="selectedHistory"
        class="relative border border-slate-300 shadow p-5 rounded-md mx-auto h-full flex flex-col items-center justify-center"
      >
        <div
          @click="closedHistory"
          class="absolute top-3 right-5 cursor-pointer border w-6 h-6 flex items-center justify-center rounded-full bg-gray-100"
        >
          <span class="font-bold text-slate-500 hover:text-red-600">
            &#x2717;
          </span>
        </div>

        <div class="space-y-3 mb-3">
          <img
            :src="selectedHistory?.image"
            class="w-24 h-24 ring-2 ring-slate-300 object-cover rounded-full"
          />
          <h1 class="font-bold text-md text-slate-600">
            {{ selectedHistory?.name }}
          </h1>
        </div>

        <div class="text-xs font-medium text-slate-700">
          {{ selectedHistory?.about }}
        </div>
      </div>
    </Transition>
  </div>
</template>

