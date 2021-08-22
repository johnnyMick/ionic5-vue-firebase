<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{title(currentUser)}}</ion-title>
        <Logout slot="end" />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { onIonViewWillEnter } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Logout from '@/components/Logout.vue';
import libStore from "@/lib/libStore";

export default defineComponent({
  name: 'Tab2',
  components: {
    ExploreContainer,
    Logout,
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
    console.log(currentUser);
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