<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button color="primary" tab="tab1" href="/home/tab1">
          <ion-icon :icon="home" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button color="primary" tab="tab2" href="/home/tab2">
          <ion-icon :icon="informationCircleOutline" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

import { defineComponent } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import { home, informationCircleOutline } from 'ionicons/icons';
import libStore from "@/lib/libStore";

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
    const { goToLogin } = libStore();
    onIonViewWillEnter(() => {
      goToLogin();
    });
    return {
      home,
      informationCircleOutline,
    }
  }
})
</script>

<style scoped>
ion-tab-bar{
    --background: #f3f3f3;
  }
</style>