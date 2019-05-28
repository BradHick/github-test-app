import { init } from '@rematch/core';
import models from '../model';

describe('The user process', () => {
  test('Should return a user', async () => {

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
    
    await store.dispatch.user.fetchUser('BradHick');

    const userData = store.getState().user;

    expect(userData.user).toBeTruthy();
    expect(userData.errors).toBeFalsy();
    expect(userData.loading).toBeFalsy();

  });

  test('Should return an error when user does not exist', async () => {

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
    
    await store.dispatch.user.fetchUser('abççç');

    const userData = store.getState().user;

    expect(userData.user).toBeFalsy();
    expect(userData.errors).toBeTruthy();
    expect(userData.loading).toBeFalsy();

  });

  test('Should an initial state when user is not passed', async () => {

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
    | User is not passed on function
    |--------------------------------------------------
    */
    
    await store.dispatch.user.fetchUser();

    const userData = store.getState().user;

    expect(userData.user).toBeFalsy();
    expect(userData.errors).toBeFalsy();
    expect(userData.loading).toBeFalsy();

  });

});