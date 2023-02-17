import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            currentUserid : "60d21bf767d0d8992e610e94"
        }
    },
    mutations : {
        updateState(state,val) {
            state.currentUserid = val
        }
    },
    getters : {
        returnCurrentUser(state) {
            return state.currentUserid
        }
    }
})

export default store;