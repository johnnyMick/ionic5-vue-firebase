import { createStore } from 'vuex'
import user from './modules/user'
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
});

const store = createStore({
    modules: {
        user
    },
})

export default store
