import { API_URL, REPOS_URL, USERS_URL } from '../const';

export const fetchCommits = (params, commitPage) => {
  return fetch(`${API_URL}${REPOS_URL}/${params.username}/${params.repos}/commits?per_page=20&page=${commitPage}`)
    .then(response => response.json())
    .then(data => {
      if(data.message && data.message !== ''){
        throw new Error(data);
      }
      else{
        return data;
      }
    })
    .catch(error => { throw new Error(error) });
}

export const fetchRepos = (username) => {
  return fetch(`${API_URL}${USERS_URL}/${username}/repos`)
    .then(response => response.json())
    .then(data => {
      if(data.message && data.message !== ''){
        throw new Error(data);
      }
      else{
        return data;
      }
    })
    .catch(error => { throw new Error(error) });
}

export const fetchUser = (username) => {
  return fetch(`${API_URL}${USERS_URL}/${username}`)
    .then(response => response.json())
    .then(data => {
      if(data.message && data.message !== ''){
        throw new Error(data);
      }
      else{
        return data;
      }
    })
    .catch(error => { throw new Error(error) });
}