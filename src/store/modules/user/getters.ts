
const getters = {
    loggedIn: (state: { user: any }) => {
        return state.user ? true : false
    },
    authError: (state: { error: any }) => {
        return state.error
    },
    currentUser: (state: { user: any }) => {
        return state.user
    }
};

export default getters;