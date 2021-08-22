
const mutations = {
    setLoading(state: { loading: any }, payload: any) {
        state.loading = payload
    },
    authChecked(state: { authChecked: any }, payload: { authChecked: any }) {
        state.authChecked = payload.authChecked
    },

    authError(state: { error: any; user: null }, payload: any) {
        state.error = payload
        state.user = null
    },

    // USER LOGIN
    userLogin(state: any, payload: any) {
        console.log(payload)
    },

    userLoginRequest(state: { isAuthenticated: boolean; loading: boolean; error: null }) {
        state.isAuthenticated = false
        state.loading = true
        state.error = null
    },

    userLoginSuccess(state: { isAuthenticated: boolean; loading: boolean; error: null; user: any }, payload: { user: any }) {
        console.log(payload)

        state.isAuthenticated = true
        state.loading = false
        state.error = null
        state.user = payload.user
    },

    // USER LOGOUT
    userLogout(state: any, payload: any) {
        console.log(payload)
    },

    userLogoutRequest(state: { isAuthenticated: boolean; loading: boolean; error: null }) {
        state.isAuthenticated = true
        state.loading = true
        state.error = null
    },

    userLogoutSuccess(state: { isAuthenticated: boolean; loading: boolean; error: null; user: null }, payload: any) {
        console.log(payload)

        state.isAuthenticated = false
        state.loading = false
        state.error = null
        state.user = null
    },

    // USER CREATE ACCOUNT
    createAccount(state: any, payload: any) {
        console.log(payload)
    },

    createAccountRequest(state: { isAuthenticated: boolean; loading: boolean; error: null }) {
        state.isAuthenticated = false
        state.loading = true
        state.error = null
    },

    createAccountSuccess(state: { isAuthenticated: boolean; loading: boolean; error: null;  user: null }, payload: any) {
        state.isAuthenticated = true
        state.loading = false
        state.error = null
        state.user = payload.user
    }
};

export default mutations