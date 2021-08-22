<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" router-link="/login">
          <ion-icon class="color-white" slot="start" :icon="chevronBackOutline"></ion-icon>
          Back
        </ion-buttons>
        <ion-title class="ion-text-center">Reset your Password ?</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <LogoContainer />
      <ion-grid :fixed="true" class="flex">
        <ion-row class="ion-align-items-center w-full">
          <ion-col size="12" class="ion-text-center">
            <ion-item>
              <ion-icon class="color-blue pd-r-10" :icon="personOutline" />
              <ion-input type="email" autocomplete="email" inputmode="email" v-model="email"
                         placeholder="email@example.com" ></ion-input>
            </ion-item>
            <div class="mt-15px">
              <ion-button color="success" fill="solid" expand="full" @click="doReset">
                Send
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonIcon, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { chevronBackOutline, personOutline } from "ionicons/icons";
import LogoContainer from '@/components/LogoContainer.vue';
import libStore from "@/lib/libStore";
import openToast from "@/lib/defaultToast";

export default defineComponent({
  name: 'ResetPassword',
  components: {
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonPage,
    IonGrid,
    IonInput,
    IonRow,
    IonCol,
    LogoContainer
  },
  setup () {
    const { goToHome, goToLogin, authError, store } = libStore();
    onIonViewWillEnter(() => {
      goToHome();
    });
    return {
      store,
      goToLogin,
      authError,
      chevronBackOutline,
      personOutline
    }
  },
  data() {
    return {
      email: null
    }
  },
  methods: {
    async doReset() {
      try {
        const isSuccess = await this.store.dispatch('user/resetPassword', {email: this.email});

        if (isSuccess === false) {
          console.log(this.authError.err.message);
          await openToast(this.authError.err.message);
        } else {
          await openToast("Email Reset Sent Successfully");
          this.goToLogin();
        }
      } catch (e) {
        console.log(e);
        await openToast(this.authError.err.message);
      }
    }
  }
});
</script>

<style scoped>
.pd-r-10 {
  padding-right: 10px;
}
.mt-15px {
  margin-top: 15px;
}
.flex {
  display: flex;
}
.w-full {
  width: 100%;
}
</style>