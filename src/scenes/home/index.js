import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../helpers'

// Container
import container from './container';

// Components
import {
  Card,
  Input,
  If,
  UsersList,
  Title,
  Button,
  Loading,
  Preloader,
  NotFound
} from '../../components';

const checkEmptyInput = (text, fetchUser) => {
  if (text !== '' ){
    return fetchUser(text);
  }
}

class Home extends Component {
  state = {
    text: ''
  }

  render() {
    const { user, errors, loading, fetchUser, fetchRepos } = this.props;
    return (
      <>
        <Title>Github Test</Title>
        <Card info>
          <Input
            placeholder='Username'
            onChange={e => this.setState({text: e.target.value})}
          />
          <Button onClick={() => checkEmptyInput(this.state.text, fetchUser)}>
            {'Search'}
          </Button>
        </Card>
        <If condition={ user && get(user, 'id') && !get(errors, 'response') }>
          <Card onClick={() => fetchRepos()}>
            <Link style={{ textDecoration: 'none' }} to={`/${get(user, 'login')}`}>
              <UsersList
                img={get(user, 'avatar_url')}
                name={get(user, 'name')}
                bio={get(user, 'bio')}
                location={get(user, 'location')}
                id={get(user, 'id')}
              />
            </Link>
          </Card>
        </If>
        <If condition={get(errors, 'response') || get(errors, 'message')}>
          <NotFound />
        </If>
        <Loading>
          <If condition={loading}>
            <Preloader />
          </If>
        </Loading>
      </>
    );
  }
}

export default container(Home);