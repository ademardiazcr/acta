import Vue from "vue";
import store from '@/store/store'
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.use(new VueSocketIO({
    debug: true,

    connection: SocketIO(process.env.VUE_APP_SOCKET_URL, {
        query: `token=${store.state.dsoaLogin.token}`,
    }),
   // aca lo que se hace es que  le agrea un prefijo local a la acciones y la Mutaciones 

    vuex: {
        store,
        actionPrefix: 'SOCKET_ACTION_',
        mutationPrefix: 'SOCKET_MUTATION_'
    }
}));