<!--ACTIVITY TIMELINE -->
<template>
  <div class="vx-col w-full h-3/4 sm:w-1/2 md:w-1/2 mb-base">
    <vx-card :title="getConts2.displayName">
      <!--vs-spacer></vs-spacer-->
      <div class="chat-card-log">
        <component
          :is="scrollbarTag"
          ref="chatLogPS"
          class="scroll-area pt-6 px-6"
          :settings="settings"
          :key="$vs.rtl"
        >
          <vx-timeline :data="listaTareas"></vx-timeline>
        </component>
      </div>
    </vx-card>
  </div>
</template>
<script>
import VxTimeline from "@/components/timeline/VxTimeline.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VxTimeline,
    VuePerfectScrollbar,
  },

  props: {
    userId: {
      type: Number,
      required: true,
    },
  },

  mounted() {
    //funcionamiento scrollbar
    const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
    scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
  },

  computed: {
    getConts2() {
      return this.$store.getters["chat/contact"](this.userId);
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },

  data() {
    return {
      listaTareas: [
        {
          color: "primary",
          icon: "PlusIcon",
          title: "New Task Added",
          desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
          time: "25 Days Ago",
        },
        {
          color: "warning",
          icon: "AlertCircleIcon",
          title: "Task Update Found",
          desc: "Cupcake gummi bears soufflé caramels candy",
          time: "15 Days Ago",
        },
        {
          color: "success",
          icon: "CheckIcon",
          title: "Task Finished",
          desc: "Candy ice cream cake. Halvah gummi bears",
          time: "20 mins ago",
        },
        {
          color: "primary",
          icon: "PlusIcon",
          title: "New Task Added2",
          desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
          time: "25 Days Ago",
        },
        {
          color: "warning",
          icon: "AlertCircleIcon",
          title: "Task Update Found2",
          desc: "Cupcake gummi bears soufflé caramels candy",
          time: "15 Days Ago",
        },
        {
          color: "success",
          icon: "CheckIcon",
          title: "Task Finished2",
          desc: "Candy ice cream cake. Halvah gummi bears",
          time: "20 mins ago",
        },
      ],

      //scrollbar
      settings: {
        maxScrollbarLength: 200,
      },
      activeChatUser: "118",
    };
  },
};
</script>