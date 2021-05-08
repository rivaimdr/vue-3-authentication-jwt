import AuthService from '../services/auth.service' ;

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user 
    ? {status: {loggedIn: true}, user}
    : {status: {loggedIn: false}, user:null};

export const auth = {
    namespaced: true, 
    state: initialState, 
    action: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        
        logout({ commit}) {
            AuthService.logout();
            commit('logout');
        },
        register({ commit}, user) {
            return
        }

    }
}