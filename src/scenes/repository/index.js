import React, { Component } from 'react';
// import differenceInDays from 'date-fns/difference_in_days';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { getTimeRange, sortRepos } from '../../helpers';

// Container
import container from './container';

// Components
import {
  If,
  Card,
  Info,
  Avatar,
  Loading,
  Select,
  Button,
  Form,
  BackPage,
  Preloader,
  Repo
} from '../../components';

const getReposList = (params, fetchRepos, fetchUser) => {
  if (params.username) {
    fetchRepos(params.username);
    fetchUser(params.username);
  }
};

class Repository extends Component {
  state = {
    sortedRepos: []
  };

  componentDidMount() {
    const {
      fetchRepos,
      fetchUser,
      match: { params }
    } = this.props;
    getReposList(params, fetchRepos, fetchUser);
  }

  componentWillUnmount() {
    const { resetRepos } = this.props;
    resetRepos();
  }

  render() {
    const { repos, user, fetchCommits, loading } = this.props;

    if (!user) return null;

    return (
      <>
        <If condition={repos && repos.length}>
          <Card white>
            <div>
              <Avatar src={user.avatar_url} />
              {/* <center>
                <h2>{user.login}</h2>
              </center> */}
            </div>

            <Info
              value={user ? user.following : null}
              description="following"
            />
            <Info
              value={user ? user.followers : null}
              description="followers"
            />
            <Info
              value={user ? user.public_repos : null}
              description="public repos"
            />
            <Info
              value={user ? user.public_gists : null}
              description="public gists"
            />
          </Card>

          <Card>
            <Formik
              initialValues={{ field: 'stargazers_count', order: 'desc' }}
              onSubmit={values => {
                this.setState({
                  sortedRepos: sortRepos(repos, values.field, values.order)
                });
              }}
              render={({ handleSubmit, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <Select name="field" onChange={handleChange}>
                    <option value="stargazers_count">Stars</option>
                    <option value="watchers_count">Watchers</option>
                    <option value="updated_at">Updated at</option>
                  </Select>
                  <Select name="order" onChange={handleChange}>
                    <option value="desc">Desc</option>
                    <option value="asc">Asc</option>
                  </Select>
                  <Button type="submit">{'Sort'}</Button>
                </Form>
              )}
            />
          </Card>
          <BackPage to={'/'} />
          {this.state.sortedRepos.length > 0
            ? this.state.sortedRepos.map(
                (
                  {
                    name,
                    updated_at,
                    description,
                    watchers_count,
                    stargazers_count
                  },
                  i
                ) => {
                  return (
                    <Card
                      white
                      key={i}
                      onClick={() => fetchCommits(user.login, name)}
                    >
                      <Link
                        to={`/commits-list/${user.login}/${name}`}
                        style={{ textDecoration: 'none', flex: 1 }}
                      >
                        <Repo
                          name={name}
                          description={description}
                          commitStatus={getTimeRange(updated_at)}
                          stars={stargazers_count}
                          watchers={watchers_count}
                        />
                      </Link>
                    </Card>
                  );
                }
              )
            : repos.map(
                (
                  {
                    name,
                    updated_at,
                    description,
                    watchers_count,
                    stargazers_count
                  },
                  i
                ) => {
                  return (
                    <Card
                      white
                      key={i}
                      onClick={() => fetchCommits(user.login, name)}
                    >
                      <Link
                        to={`/commits-list/${user.login}/${name}`}
                        style={{ textDecoration: 'none', flex: 1 }}
                      >
                        <Repo
                          name={name}
                          description={description}
                          commitStatus={getTimeRange(updated_at)}
                          stars={stargazers_count}
                          watchers={watchers_count}
                        />
                      </Link>
                    </Card>
                  );
                }
              )}
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

export default container(Repository);
