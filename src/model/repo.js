import { API_URL, USERS_URL } from '../const';
import Immutable from 'seamless-immutable';

const state = new Immutable({
  repos: [],
  errors: null,
  loading: false
});

const repo = {
  state,
  reducers: {
    fetchReposFulfiled: (state, payload) => {
      return state.merge({ 
        repos: payload.data || payload,
        loading: false
      });
    },
    fetchReposPending: (state) => {
      return state.merge({ 
        loading: true
      });
    },
    fetchReposRejected: (state, payload) => {
      return state.merge({
        errors: payload.errors || payload,
        loading: false
      });
    },
    resetRepos: (state) => {
      return state.merge({ 
        repos: [],
        errors: null,
        loading: false 
      });
    }
  },

  effects: (dispatch) => ({
    fetchRepos(username){
      if(username){
        dispatch.repo.fetchReposPending();
  
        return fetch(`${API_URL}${USERS_URL}/${username}/repos`)
          .then(response => response.json())
          .then(data => {
            if(data.message && data.message !== ''){
              dispatch.repo.fetchReposRejected(data);
            }
            else{
              dispatch.repo.fetchReposFulfiled(data);
            }
          })
          .catch(error => dispatch.repo.fetchReposRejected(error));
      }

    }
  })
};

export default repo;