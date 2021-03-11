import login from "@/api/user/login";
import authToken from "@/api/user/authToken";
import logout from "@/api/user/logout";

import localforage from "localforage";

const UserStore = {
    namespaced: true,
    state: {
        status: "initial",

        message: "",

        loggedIn: false,
        loginFailed: false,
        registerFailed: false,

        token: "",
        user: {
            profile: {}
        },
    },
    mutations: {
        resetStatus (state) {
            state.status = "loggedOut";
        },

        setLoggingIn (state) {
            state.status = "loggingIn";
        },

        setLoginSuccess (state) {
            state.status = "loggedIn";
        },

        setLoginFailed (state) {
            state.status = "loginFailed";
        },

        setVerifying2FA (state) {
            state.status = "verifying2FA";
        },

        setRegistering (state) {
            state.status = "registering";
        },

        setRegisterFailed (state) {
            state.status = "registerFailed";
        },

        setMessage (state, message) {
            state.message = message;
        },

        unsetMessage (state) {
            state.message = "";
        },

        setUser (state, user) {
            let temp = Object.assign({}, user);
            delete temp.__v;
            state.user = temp;
        }
    },
    actions: {
        async loadToken (
            { commit }
        ) {
            const token = await localforage.getItem(TokenName);
            commit("setLoggingIn");
            if (token){
                let user;
                try {
                    user = await authToken(token);
                } catch (e) {
                    await localforage.setItem(TokenName, "");
                    commit("resetStatus");
                    throw e;
                }

                if (user.twoFactorAuth) {
                    if (!user.twoFactorAuthenticated) {
                        await localforage.setItem(TokenName, "");
                        commit("resetStatus");
                        throw "2FA not authenticated";
                    }
                }

                commit("setLoginSuccess");
                commit("setMessage", "");
                commit("setUser", user);
                return token;
            }

            commit("resetStatus");
            throw false;
        },

        async login (
            { commit },
            payload
        ) {
            commit("setLoggingIn");
            commit("setMessage", "");

            let token;
            try {
                token = await login(
                        payload
                    );
            } catch (e) {
                console.error(e);
                commit("setLoginFailed");
                commit("setMessage", e.reason);
                throw e;
            }

            let user;
            try {
                user = await authToken(token);
            } catch (e) {
                if (e === "2FA unauthenticated") {
                    commit("setVerifying2FA");
                }
                throw e;
            }

            commit("setLoginSuccess");
            commit("setUser", user);
            return user;
        },

        /*async verify2FA (
            { commit },
            { type, token }
        ) {
            commit("setVerifying2FA");
            commit("setMessage", "");
            let result;
            try {
                result = await UserAPI
                    .verify2FA(
                        type,
                        token
                    );
            } catch (e) {
                console.error(e);
                commit("resetStatus");
                commit("setMessage", e.reason);
                throw e;
            }
            const user = await UserAPI.authToken(result);
            commit("setUser", user);
            commit("setLoginSuccess");
            await localforage.setItem(TokenName, result);
            return user;
        },

        async enable2FA (
            { commit },
            type
        ) {
            let result;
            try {
                result = await UserAPI
                    .enable2FA(
                        type
                    );
            } catch (e) {
                console.error(e);
                throw e;
            }
            return result;
        },

        async disable2FA (
            { commit },
            type
        ) {
            let result;
            try {
                result = await UserAPI
                    .disable2FA(
                        type
                    );
            } catch (e) {
                console.error(e);
                throw e;
            }
            commit("setUser", result);
            return result;
        },

        async updateProfile (
            { commit },
            profile
        ) {
            let result;
            try {
                result = await UserAPI
                    .updateProfile(
                        profile
                    );
            } catch (e) {
                console.error(e);
                throw e;
            }
            commit("setUser", result);
            return result;
        },*/

        logout (
            { commit },
        ) {
            logout();
            commit("setMessage", "");
            commit("resetStatus");
        },

        setMessage (
            { commit },
            message
        ) {
            commit("setMessage", message);
        },

        unsetMessage (
            { commit },
        ) {
            commit("unsetMessage");
        },
    }
};

export default UserStore;
