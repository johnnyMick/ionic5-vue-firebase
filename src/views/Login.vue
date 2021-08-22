<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <LogoContainer :moto="true" />
      <ion-item>
        <ion-icon color="primary" class="pd-r-10" :icon="personOutline" />
        <ion-input type="email" autocomplete="email" inputmode="email" pattern="email" v-model="email"
                   placeholder="email@example.com" ></ion-input>
      </ion-item>
      <ion-item>
        <ion-icon color="primary" class="pd-r-10" :icon="lockClosed" />
        <ion-input type="password" autocomplete="current-password" v-model="password"
                   placeholder="Password" ></ion-input>
      </ion-item>
      <ion-grid>
        <ion-row class="normalCase">
          <ion-col>
            <ion-button fill="solid" color="primary" expand="full" @click="doLogin">
              Login
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="normalCase">
          <ion-col>
            <ion-button fill="clear" color="primary" expand="full" router-link="/reset-password">
              Forgot Password?
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="normalCase">
          <ion-col>
            <ion-button fill="clear" color="primary" expand="full" router-link="/register">
              <ion-icon slot="start" :icon="star"></ion-icon>
              Click Here to Signup
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonInput,
  IonItem,
  IonContent,
  IonButton
} from '@ionic/vue';

import { defineComponent } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import LogoContainer from '@/components/LogoContainer.vue';
import {personOutline, lockClosed, star} from 'ionicons/icons';
import libStore from "@/lib/libStore";
import openToast from "@/lib/defaultToast";

export default defineComponent({
  name: 'Login',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonInput,
    IonItem,
    IonButton,
    IonContent,
    IonPage,
    LogoContainer
  },
  setup () {
    const { authErrorMessage, store, goToHome } = libStore();
    onIonViewWillEnter(() => {
      goToHome();
    });
    return {
      store,
      authErrorMessage,
      goToHome,
      star,
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
    async doLogin() {
      try {
        const user = await this.store.dispatch('user/userLogin', {email: this.email, password: this.password});
        if (user === false) {
          await openToast(this.authErrorMessage());
        } else {
          await openToast("Logged In Successfully");
          this.goToHome();
        }
      } catch (e) {
        await openToast(this.authErrorMessage(e));
      }
    }
  }
});
</script>

<style scoped>
  .normalCase, .normalCase ion-button{
    text-transform: unset;
  }
  .pd-r-10 {
    padding-right: 10px;
  }
</style>