import Immutable from 'seamless-immutable';
import { fetchRepos } from '../api';

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
  
        return fetchRepos(username)
          .then(data => dispatch.repo.fetchReposFulfiled(data))
          .catch(error => dispatch.repo.fetchReposRejected(error));
      }

    }
  })
};

export default repo;