<!-- =========================================================================================
  File Name: Vpedidos.vue
  Description: Solicitar Pedido
========================================================================================== -->

<template>
  <div id="profile-page">
    <div class="vx-row">
      <!-- COL 1 -->
      <div class="vx-col w-full lg:w-2/3">
        <vx-card class="mt-base">
          <div>
            <!-- -->
            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-user"
                  icon-no-border
                  label="First Name"
                  v-model="input13"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input
                  type="email"
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-mail"
                  icon-no-border
                  label="Email"
                  v-model="input14"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-smartphone"
                  icon-no-border
                  label="Mobile"
                  v-model="input15"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col w-full">
                <vs-input
                  type="password"
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-lock"
                  icon-no-border
                  label="Password"
                  v-model="input16"
                />
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col w-full">
                <vs-button class="mr-3 mb-2">Submit</vs-button>
                <vs-button
                  color="warning"
                  type="border"
                  class="mb-2"
                  @click="
                    input13 = input14 = input15 = input16 = '';
                    check4 = false;
                  "
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vx-card>
      </div>

      <!-- COL 2 -->
      <div class="vx-col w-full lg:w-1/3">
        <!-- COMENTARIOS -->
        <vx-card title="Comentarios" class="mt-base">
          <div>
            <div class="post-comment">
              <vs-textarea
                class="mb-2"
                counter="500"
                label="Comentario"
                :counter-warning.sync="counterDanger"
                v-model="comentario"
              />
              <vs-button size="small" @click="agregarComentario"
                >Publicar</vs-button
              >
            </div>
          </div>

          <ul class="mt-4">
            <li
              v-for="(commentedUser, commentIndex) in usersCommented"
              :key="commentIndex"
              class="commented-user flex items-center mb-4"
            >
              <div class="">
                <p class="m-0 font-semibold text-justify">
                  {{ commentedUser.author }}
                </p>
                <p class="m-0 font-light">{{ commentedUser.comment }}</p>
              </div>
            </li>
          </ul>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //area de comentario
      counterDanger: false,
      comentario: "",

      usersCommented: [
        {
          comment: "orthoplumbate morningtide naphthaline exarteritis",
          author: "Kitty Allanson",
          img: require("@/assets/images/portrait/small/avatar-s-6.jpg"),
          time: "Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)",
        },
        {
          comment: "blockiness pandemy metaxylene speckle coppy",
          author: "Jeanie Bulgrin",
          img: require("@/assets/images/portrait/small/avatar-s-8.jpg"),
          time: "Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)",
        },
      ],
      wasSidebarOpen: null,
    };
  },
  methods: {
    agregarComentario() {
      let newComment = {
        comment: "orthoplumbate morningtide naphthaline exarteritis",
        author: "Kitty Allanson",
        img: require("@/assets/images/portrait/small/avatar-s-6.jpg"),
        time: "Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)",
      };

      this.usersCommented.push(newComment);

      this.comentario = "";
    },
  },

  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit("TOGGLE_REDUCE_BUTTON", true);
  },

  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit("TOGGLE_REDUCE_BUTTON", false);
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
