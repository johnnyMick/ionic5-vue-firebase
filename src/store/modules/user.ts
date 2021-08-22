/* eslint-disable */
import "firebase/firestore"
import state from "@/store/modules/user/state"
import mutations from "@/store/modules/user/mutations"
import actions from "@/store/modules/user/actions"
import getters from "@/store/modules/user/getters"

const user = {
    namespaced: true,
    //
    // STATE
    //
    state: state,
    //
    // MUTATIONS
    //
    mutations: mutations,
    //
    // ACTIONS
    //
    actions: actions,
    //
    // GETTERS
    //
    getters: getters
}

export default user;