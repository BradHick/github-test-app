import { API_URL, USERS_URL } from '../const';
import Immutable from 'seamless-immutable';

const state = new Immutable( {
  user: null,
  loading: false,
  errors: null
});

const user = {
  state,
  reducers: {
    fetchUserFulfiled: ( state, payload ) => {
      return state.merge({
        user: payload.data || payload,
        errors: null,
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
        user: null,
        errors: payload.errors || payload,
        loading: false
      });
    },

    resetUser: (state) => {
      return state.merge({
        user: null,
        loading: false,
        errors: null
      });
    },
  },

  effects: (dispatch) => ({
    fetchUser(username){
      if(username){
        dispatch.user.fetchUserPending();
        return fetch(`${API_URL}${USERS_URL}/${username}`)
          .then(response => response.json())
          .then(data => {
            if(data.message && data.message !== ''){
              dispatch.user.fetchUserRejected(data)
            }
            else{
              dispatch.user.fetchUserFulfiled(data)
            }
          })
          .catch(error => dispatch.user.fetchUserRejected(error));
      }
    },
  })
  
};


export default user;