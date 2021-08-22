<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/home/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" @click="doLogout()">
          <ion-icon :icon="logOutOutline" />
          <ion-label>LOGOUT</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

import { defineComponent } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { logOutOutline, ellipse, triangle } from 'ionicons/icons';
import libStore from "@/lib/libStore";
import openToast from "@/lib/defaultToast";

export default defineComponent( {
  name: 'Home',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet
  },
  setup() {
    const { store, loggedIn, authError, currentUser, goToLogin } = libStore();
    onIonViewWillEnter(() => {
      goToLogin();
    });
    return {
      store,
      loggedIn,
      currentUser,
      authError,
      goToLogin,
      logOutOutline,
      ellipse,
      triangle,
    }
  },
  methods: {
    async doLogout() {
      try {
        const user = await this.store.dispatch('user/userLogout');
        if (user === false) {
          console.log(this.authError.err.message);
          await openToast(this.authError.err.message);
        } else {
          await openToast("Logged Out Successfully");
          this.goToLogin();
        }
      } catch (e) {
        await openToast(this.authError.err.message);
      }
    }
  }
})
</script>