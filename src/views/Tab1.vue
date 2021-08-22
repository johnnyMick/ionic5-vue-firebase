<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{title(currentUser)}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import { defineComponent } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import libStore from "@/lib/libStore";

export default defineComponent({
  name: 'Tab1',
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  },
  setup () {
    const { currentUser, goToLogin } = libStore();
    onIonViewWillEnter(() => {
      goToLogin();
    });
    return {
      currentUser
    }
  },
  methods: {
    title(user: { email: string }) {
      return (user)? user.email : null;
    }
  }
});
</script>