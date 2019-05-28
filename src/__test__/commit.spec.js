import { init } from '@rematch/core';
import models from '../model';

describe('The commit process', () => {
  test('Should return a list of commits', async () => {

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
    | Using a valid user and repo
    |--------------------------------------------------
    */

    const userData = {
      username: 'BradHick', 
      repos: 'moviedb-test'
    };
    
    await store.dispatch.commit.fetchCommits(userData);

    const commitData = store.getState().commit;

    expect(commitData.commits).toBeTruthy();
    expect(commitData.commits.length).toBeGreaterThan(0);
    expect(commitData.commitPage).toBe(2);
    expect(commitData.errors).toBeFalsy();
    expect(commitData.loading).toBeFalsy();

  });

  test('Should return a second page of the commits list', async () => {

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
    | Using a valid user and repo
    |--------------------------------------------------
    */

    const userData = {
      username: 'BradHick', 
      repos: 'moviedb-test'
    };
    
    await store.dispatch.commit.fetchCommits(userData);
    await store.dispatch.commit.fetchCommits(userData);

    const commitData = store.getState().commit;

    expect(commitData.commits).toBeTruthy();
    expect(commitData.commits.length).toBeGreaterThan(0);
    expect(commitData.commitPage).toBe(3);
    expect(commitData.errors).toBeFalsy();
    expect(commitData.loading).toBeFalsy();

  });

  test('Should return an error if user was not passed', async () => {

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
    | Using a invalid user and a valid repo
    |--------------------------------------------------
    */

    const userData = {
      username: undefined, 
      repos: 'moviedb-test'
    };
    
    await store.dispatch.commit.fetchCommits(userData);
    await store.dispatch.commit.fetchCommits(userData);

    const commitData = store.getState().commit;

    expect(commitData.commits).toBeTruthy();
    expect(commitData.commits.length).toBe(0);
    expect(commitData.commitPage).toBe(1);
    expect(commitData.errors).toBeTruthy();
    expect(commitData.loading).toBeFalsy();

  });

  test('Should return an error if repo was not passed', async () => {

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
    | Using a valid user and an invalid repo
    |--------------------------------------------------
    */

    const userData = {
      username: 'BradHick', 
      repos: undefined
    };
    
    await store.dispatch.commit.fetchCommits(userData);
    await store.dispatch.commit.fetchCommits(userData);

    const commitData = store.getState().commit;

    expect(commitData.commits).toBeTruthy();
    expect(commitData.commits.length).toBe(0);
    expect(commitData.commitPage).toBe(1);
    expect(commitData.errors).toBeTruthy();
    expect(commitData.loading).toBeFalsy();

  });

  test('Should return an error if repo and user was not passed', async () => {

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
    | Using a valid user and an invalid repo
    |--------------------------------------------------
    */

    const userData = {
      username: undefined, 
      repos: undefined
    };
    
    await store.dispatch.commit.fetchCommits(userData);
    await store.dispatch.commit.fetchCommits(userData);

    const commitData = store.getState().commit;

    expect(commitData.commits).toBeTruthy();
    expect(commitData.commits.length).toBe(0);
    expect(commitData.commitPage).toBe(1);
    expect(commitData.errors).toBeTruthy();
    expect(commitData.loading).toBeFalsy();

  });


});