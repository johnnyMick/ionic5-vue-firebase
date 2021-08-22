import firebase from "firebase";

const actions = {
    doAuthCheck({ commit }: any) {
        return new Promise((resolve, reject) => {
            // Setup Firebase onAuthStateChanged handler
            // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
            firebase.auth().onAuthStateChanged(user => {
                commit("authChecked", {authChecked: true})
                if (user) {
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email
                    }
                    commit("userLoginSuccess", {user: { ...newUser }})
                    resolve(newUser)
                } else {
                    commit("authError", null)
                    commit("authChecked", {authChecked: true})
                    resolve(null)
                }
            })
        }).catch(cc => {
            console.log(cc)
            commit("authError", cc)
        });
    },

    /**
     *
     * @param {*} param0
     */
    userLogout({ commit }: any) {
        commit("setLoading", true)
        commit("authError", {error: null});
        // start the request...
        commit("userLogoutRequest")
        // MAKE API CALL
        return firebase
            .auth()
            .signOut()
            .then(user => {
                // when successful...
                commit("userLogoutSuccess", user)
                return true
            })
            .catch(err => {
                console.log(err)
                commit("authError", err)
                return false
            })
    },

    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    resetPassword({ commit }: any, payload: any) {
        commit("setLoading", true)
        commit("authError", {error: null});
        // MAKE API CALL
        return firebase
            .auth()
            .sendPasswordResetEmail(payload.email)
            .then(() => {
                return true;
            })
            .catch(err => {
                console.log(err)
                commit("authError", err)
                return false
            })
    },

    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    userLogin({ commit }: any, payload: any) {
        commit("setLoading", true)
        commit("authError", {error: null})
        // start the request...
        commit("userLoginRequest", payload)
        // MAKE API CALL
        return firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                // when successful...
                commit("userLoginSuccess", user)
                return true
            })
            .catch(err => {
                console.log(err)
                commit("authError", err)
                return false
            });
    },
    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    createAccount({ commit }: any, payload: any) {
        commit("setLoading", true)
        commit("authError", {error: null})
        try {
            console.log("try createAccount")
            // start the request...
            commit("createAccountRequest", payload)
            // MAKE API CALL
            return firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    // when successful...
                    commit("createAccountSuccess", user)
                    return true
                })
                .catch(err => {
                    console.log(err)
                    commit("authError", err)
                    return false
                })
        } catch (err) {
            console.log(err)
            commit("authError", err)
            return false
        }
    }
};

export default actions;