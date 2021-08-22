/* eslint-disable */
import { computed } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default function () {
    const store = useStore()
    const router = useRouter()
    const loggedIn = computed(() => store.getters['user/loggedIn'])
    const authError = computed(() => store.getters['user/authError'])
    const currentUser = computed(() => store.getters['user/currentUser'])

    const goToLogin = function () {
        if (!loggedIn.value) {
            router.push('/login')
        }
    }
    const goToHome = function () {
        if (loggedIn.value) {
            router.push('/home/tab1')
        }
    }
    const goToMainPage = function () {
        if (!loggedIn.value) {
            router.push('/login')
        }
        if (loggedIn.value) {
            router.push('/home/tab1')
        }
    }
    return {
        store: store,
        goToLogin: goToLogin,
        goToHome: goToHome,
        goToMainPage: goToMainPage,
        loggedIn: loggedIn,
        authError: authError,
        currentUser: currentUser,
    }
}