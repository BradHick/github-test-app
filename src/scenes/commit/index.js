import React, { Component } from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import { filterCommits } from '../../helpers';
import { DEFAULT_AVATAR } from '../../const';

// Container
import container from './container';

// Components
import {
  If,
  Card,
  Commit,
  Title,
  Button,
  Input,
  Form,
  Loading,
  Preloader,
  BackPage,
  Icon
} from '../../components';
import Search from '../../assets/icons/search.svg';

class CommitList extends Component {
  state = {
    commits: [],
    paginatedCommits: [],
    per_page: 20,
    hasMore: true,
    loadingState: false
  };

  infinityScroll = () => {
    const {
      fetchCommits,
      loading,
      match: { params }
    } = this.props;
    if (!loading) {
      window.onscroll = e => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 25
        ) {
          if (params.username && params.repos) {
            fetchCommits(params);
          }
        }
      };
    }
  };

  componentDidMount = () => {
    const {
      fetchCommits,
      match: { params }
    } = this.props;
    this.infinityScroll();
    if (params.username && params.repos) {
      fetchCommits(params);
    }
  };

  componentWillUnmount() {
    const { resetCommits } = this.props;
    resetCommits();
  }

  render() {
    const {
      commitsList,
      loading,
      match: { params }
    } = this.props;
    return (
      <>
        <Title>Commits</Title>
        <Card>
          <Formik
            initialValues={{ text: '' }}
            onSubmit={values => {
              this.setState({
                commits: filterCommits(commitsList, values.text)
              });
            }}
            render={({ handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit} flex>
                <Icon src={Search} />
                <Input
                  name="text"
                  placeholder="Text to search"
                  onChange={handleChange}
                />

                <Button type="submit">{'Filter'}</Button>
              </Form>
            )}
          />
        </Card>

        <BackPage to={`/${params.username}`} />

        <If condition={commitsList}>
          {this.state.commits.length > 0
            ? this.state.commits.map(({ commit, author }, i) => {
                return (
                  <Card white key={i}>
                    <Commit
                      username={commit.author.name}
                      message={commit.message}
                      date={moment(commit.committer.date).format('DD/MM/YYYY')}
                      img={author ? author.avatar_url : DEFAULT_AVATAR}
                    />
                  </Card>
                );
              })
            : commitsList.map(({ commit, author }, i) => {
                return (
                  <Card white key={i}>
                    <Commit
                      username={commit.author.name}
                      message={commit.message}
                      date={moment(commit.committer.date).format('DD/MM/YYYY')}
                      img={author ? author.avatar_url : DEFAULT_AVATAR}
                    />
                  </Card>
                );
              })}
        </If>
        <If condition={commitsList.length <= 0}>
          <Card white>
            <Commit
              username={'Empty :('}
              message={'This repository has no commits'}
              img={DEFAULT_AVATAR}
            />
          </Card>
        </If>
        <If condition={loading}>
          <Loading>
            <Preloader />
          </Loading>
        </If>
      </>
    );
  }
}

export default container(CommitList);
