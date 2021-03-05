<!-- =========================================================================================
  File Name: bASE COMENTARIOS
  Description: Solicitar Pedido
========================================================================================== -->

<template>
  <div id="profile-page">
    <div class="vx-row">
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
};
</script>


<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
