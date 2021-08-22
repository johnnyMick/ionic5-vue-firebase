
import { toastController } from '@ionic/vue';

export default async function  (_message: string) {
    const toast = await toastController
        .create({
            message: _message,
            keyboardClose: true,
            position: "bottom",
            duration: 2000
        })
    return toast.present();
}