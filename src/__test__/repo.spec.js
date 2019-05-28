import { init } from '@rematch/core';
import models from '../model';

describe('The repo process', () => {
  test('Should return a list of repos', async () => {

    /**
    |--------------------------------------------------
    | init store
    |--------------------------------------------------
    */
    
    const store = init({
      models
    });

    /**
    |--------------------------------------------------
    | Using a valid user
    |--------------------------------------------------
    */
    
    await store.dispatch.repo.fetchRepos('BradHick');

    const repoData = store.getState().repo;

    expect(repoData.repos).toBeTruthy();
    expect(repoData.repos.length).toBeGreaterThan(0);
    expect(repoData.errors).toBeFalsy();
    expect(repoData.loading).toBeFalsy();

  });

  test('Should return an error if user does not exist', async () => {

    /**
    |--------------------------------------------------
    | init store
    |--------------------------------------------------
    */
    
    const store = init({
      models
    });

    /**
    |--------------------------------------------------
    | Using a invalid user
    |--------------------------------------------------
    */
    
    await store.dispatch.repo.fetchRepos('abçççç');

    const repoData = store.getState().repo;

    expect(repoData.repos).toBeTruthy();
    expect(repoData.repos.length).toBe(0);
    expect(repoData.errors).toBeTruthy();
    expect(repoData.loading).toBeFalsy();

  });

  test('Should return a initial state if user was not passed', async () => {

    /**
    |--------------------------------------------------
    | init store
    |--------------------------------------------------
    */
    
    const store = init({
      models
    });

    /**
    |--------------------------------------------------
    | Using a invalid user
    |--------------------------------------------------
    */
    
    await store.dispatch.repo.fetchRepos();

    const repoData = store.getState().repo;

    expect(repoData.repos).toBeTruthy();
    expect(repoData.repos.length).toBe(0);
    expect(repoData.errors).toBeTruthy();
    expect(repoData.loading).toBeFalsy();

  });

});