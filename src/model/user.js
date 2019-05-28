import { API_URL, USERS_URL } from '../const';
import Immutable from 'seamless-immutable';

const state = new Immutable( {
  user: {},
  loading: false,
  errors: {}
});

const user = {
  state,
  reducers: {
    fetchUserFulfiled: ( state, payload ) => {
      return state.merge({
        user: payload.data || payload,
        errors: {},
        loading: false
      });
    },

    fetchUserPending: (state) => {
      return state.merge({
        loading: true
      });
    },

    fetchUserRejected: (state, payload) => {
      return state.merge({
        user: {},
        errors: payload.errors || payload,
        loading: false
      });
    },

    resetUser: (state) => {
      return state.merge({
        user: {},
        loading: false,
        errors: {}
      });
    },
  },

  effects: (dispatch) => ({
    fetchUser(username){
      dispatch.user.fetchUserPending();

      return fetch(`${API_URL}${USERS_URL}/${username}`)
        .then(response => response.json())
        .then(data => dispatch.user.fetchUserFulfiled(data))
        .catch(error => dispatch.user.fetchUserRejected(error));
    },
  })
  
};


export default user;