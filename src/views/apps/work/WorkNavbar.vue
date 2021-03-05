<!-- =========================================================================================
    File Name: ChatNavbar.vue
    Description: Chat Application - Chat navbar
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent


    comentario de COMPONETE
========================================================================================== -->

<template>
<div v-if="userId != null" class="chat__header">
      
    <vs-navbar class="p-4 flex navbar-custom" color="white" type="flat">
        <div class="relative flex mr-4">
            <feather-icon icon="MenuIcon" class="mr-4 cursor-pointer" v-if="isSidebarCollapsed" 
            @click.stop="$emit('open-contacts-sidebar')" />
        </div>

        <!--h6>Administrador de Tareas</h6--> 
        <vs-spacer></vs-spacer>
    </vs-navbar>
</div>
</template>

<script>
export default {
    props: {
        userId: {
            type: Number,
            required: true
        },
        isPinnedProp: {
            type: Boolean,
            required: true
        },
        isSidebarCollapsed: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        isPinnedLocal: {
            get() {
                return this.isPinnedProp
            },
            set(val) {
                const chatData = this.$store.getters['chat/chatDataOfUser'](this.userId)
                if (chatData) {
                    const payload = {
                        id: this.userId,
                        value: val
                    }
                    this.$store.dispatch('chat/toggleIsPinned', payload)
                        .then(() => {
                            this.$emit('toggleIsChatPinned', val)
                        })
                        .catch((err) => {
                            console.error(err)
                        })
                } else {
                    this.$emit('toggleIsChatPinned', val)
                }
            }
        },
        
        getConts2() 
        { 
         
        return  this.$store.getters['chat/contact'](this.userId)
         },
        getStatusColor() {
            return (isActiveUser) => {
                
                const userStatus = this.getUserStatus(isActiveUser)

                if (userStatus === 'online') {
                    return 'success'
                } else if (userStatus === 'do not disturb') {
                    return 'danger'
                } else if (userStatus === 'away') {
                    return 'warning'
                } else {
                    return 'grey'
                }
            }
        }
    },
    methods: {
       
        getUserStatus(isActiveUser) {
            return true
            //return isActiveUser ? this.$store.state.AppActiveUser.status : this.getConts2.status
        }
    }
}
</script>
