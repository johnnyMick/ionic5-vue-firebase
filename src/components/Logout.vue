<template>
  <ion-button fill="clear" @click="doLogout()">
    <ion-icon :icon="logOutOutline" />
  </ion-button>
</template>

<script lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import libStore from "@/lib/libStore";
import openToast from "@/lib/defaultToast";
import { logOutOutline } from "ionicons/icons";

export default defineComponent({
  name: 'Logout',
  components: {
    IonButton,
    IonIcon
  },
  setup() {
    const { store, authErrorMessage,  goToLogin } = libStore();
    return {
      store,
      goToLogin,
      authErrorMessage,
      logOutOutline
    }
  },
  methods: {
    async doLogout() {
      try {
        const user = await this.store.dispatch('user/userLogout');
        if (user === false) {
          await openToast(this.authErrorMessage());
        } else {
          await openToast("Logged Out Successfully");
          this.goToLogin();
        }
      } catch (e) {
        console.log(e)
        await openToast(this.authErrorMessage(e));
      }
    }
  }
});
</script>

<style scoped>
ion-button{
  color: white;
}
ion-icon {
  font-size: 32px;
}
</style>