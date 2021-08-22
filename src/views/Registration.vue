<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start" router-link="/login">
          <ion-icon slot="start" :icon="chevronBackOutline"></ion-icon>
          Back
        </ion-buttons>
        <ion-title class="ion-text-center">Create an Account Today! </ion-title>
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
            <ion-item>
              <ion-icon class="color-blue pd-r-10" :icon="lockClosed" />
              <ion-input type="password" autocomplete="current-password" v-model="password"
                         placeholder="Password" ></ion-input>
            </ion-item>
            <div class="mt-15px">
              <ion-button color="primary" fill="solid" expand="full" @click="doCreate">
                Create
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
import { chevronBackOutline, personOutline, lockClosed } from "ionicons/icons";
import LogoContainer from '@/components/LogoContainer.vue';
import libStore from "@/lib/libStore";
import openToast from "@/lib/defaultToast";

export default defineComponent({
  name: 'Registration',
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
    const { goToHome, authErrorMessage, store } = libStore();
    onIonViewWillEnter(() => {
      goToHome();
    });
    return {
      store,
      goToHome,
      authErrorMessage,
      chevronBackOutline,
      personOutline,
      lockClosed
    }
  },
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async doCreate() {
      try {
        const isSuccess = await this.store.dispatch('user/createAccount', {email: this.email, password: this.password});
        if (isSuccess === false) {
          await openToast(this.authErrorMessage());
        } else {
          await openToast("Account Created Successfully");
          this.goToHome();
        }
      } catch (e) {
        console.log(e);
        await openToast(this.authErrorMessage(e));
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