import { API_URL, REPOS_URL } from '../const';
import Immutable from 'seamless-immutable';

const state = new Immutable({
  commits: [],
  errors: {},
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
        errors: {},
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

        return fetch(`${API_URL}${REPOS_URL}/${params.username}/${params.repos}/commits?per_page=20&page=${commitPage}`)
        .then(response => response.json())
        .then(data => dispatch.commit.fetchCommitsFulfiled(data))
        .catch(error => dispatch.commit.fetchCommitsRejected(error));
      }
    }
  })

};

export default commit;