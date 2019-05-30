import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../helpers';
import Search from '../../assets/icons/search.svg';

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
  NotFound,
  Icon
} from '../../components';

const checkEmptyInput = (text, fetchUser) => {
  if (text !== '') {
    return fetchUser(text);
  }
};

class Home extends Component {
  state = {
    text: ''
  };

  render() {
    const { user, errors, loading, fetchUser, fetchRepos } = this.props;
    return (
      <>
        <Title>Github</Title>
        <Card>
          <Icon src={Search} alt='' />
          <Input
            placeholder="Enter with username"
            onChange={e => this.setState({ text: e.target.value })}
          />
          <Button onClick={() => checkEmptyInput(this.state.text, fetchUser)}>
            Search
          </Button>
        </Card>
        <If condition={user && get(user, 'id') && !get(errors, 'response')}>
          <Card white onClick={() => fetchRepos()}>
            <Link
              style={{ textDecoration: 'none', width: '100%' }}
              to={`/${get(user, 'login')}`}
            >
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
        <If condition={get(errors, 'response')}>
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
