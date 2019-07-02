import { API_URL, REPOS_URL, USERS_URL } from '../const';

const treatPromise = promise => {
  return promise.then(response => response.json())
    .then(data => {
      if(data.message){
        throw new Error(data);
      }

      return data;
    })
    .catch(error => { throw new Error(error) });
}

export const fetchCommits = (params, commitPage) => {
  return treatPromise(
    fetch(`${API_URL}${REPOS_URL}/${params.username}/${params.repos}/commits?per_page=20&page=${commitPage}`)
  );
}

export const fetchRepos = (username) => {
  return treatPromise(fetch(`${API_URL}${USERS_URL}/${username}/repos`));
}

export const fetchUser = (username) => {
  return treatPromise(fetch(`${API_URL}${USERS_URL}/${username}`));
}
