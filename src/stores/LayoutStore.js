import { Store } from "vuex";

const LayoutStore = new Store({
    namespaced: true,
    state: {
        isSideBarOpen: false,
        isBasketBarOpen: false,

        isOffline: false,

        updateAvailable: false,
        updatedServiceWorker: null,
    },
    mutations: {
        toggleSideBar (state) {
            state.isSideBarOpen = !state.isSideBarOpen;
        },

        openSideBar (state) {
            state.isSideBarOpen = true;
        },

        closeSideBar (state) {
            state.isSideBarOpen = false;
        },

        openBasketBar (state) {
            state.isBasketBarOpen = true;
        },

        closeBasketBar (state) {
            state.isBasketBarOpen = false;
        },

        updateAvailable (
            state,
            updatedServiceWorker
        ) {
            state.updateAvailable = true;
            state.updatedServiceWorker = updatedServiceWorker;
        },

        online (state) {
            state.isOffline = false;
        },

        offline (state) {
            state.isOffline = true;
        }
    },
});

window.addEventListener(
    "online",
    (evt) => {
        LayoutStore.commit("layout/online");
    }
);

window.addEventListener(
    "offline",
    (evt) => {
        LayoutStore.commit("layout/offline");
    }
);

export default LayoutStore;
