import Immutable from 'seamless-immutable';
import { fetchCommits } from '../api';

const state = new Immutable({
  commits: [],
  errors: null,
  hasMoreCommits: true,
  commitPage: 1,
  loading: false
});

const commit = {
  state,
  reducers:{
    fetchCommitsFulfiled: (state, payload) => {
      if (payload.length > 0){
        return state.merge({
          commits: state.commits.concat(payload),
          commitPage: state.commitPage + 1,
          loading: false
        });
      }
      return state.merge({
        loading: false,
        hasMoreCommits: false
      });
    },
    fetchCommitsPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    resetCommits: (state) => {
      return state.merge({
        commits: [],
        hasMoreCommits: true,
        commitPage: 1,
        errors: null,
        loading: false
      });
    },
    fetchCommitsRejected: (state, payload) => {
      return state.merge({
        errors: payload.errors || payload,
        loading: false
      });
    }
  },
  effects: (dispatch) => ({
    fetchCommits(params,state){
      const { commitPage, hasMoreCommits } = state.commit;
      if (hasMoreCommits){
        dispatch.commit.fetchCommitsPending();

        return fetchCommits(params, commitPage)
          .then(data => dispatch.commit.fetchCommitsFulfiled(data))
          .catch(error => dispatch.commit.fetchCommitsRejected(error));
      }
    }
  })

};

export default commit;