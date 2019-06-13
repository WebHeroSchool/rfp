import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@octokit/rest';

import Avatar from '@material-ui/core/Avatar';

import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      repoList: [],
      hasError: false,
      error: {}
    };
  }

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: 'v1valasvegan'
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({
          repoList: data,
          isLoading: false,
          avatarUrl: data[0].owner.avatar_url,
          login: data[0].owner.login
        });
      })
      .catch(err =>
        this.setState({
          hasError: true,
          error: err,
          isLoading: false
        })
      );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className={styles.wrapper}>
        {this.state.hasError && (
          <div>
            <h3>{this.state.error.name}</h3>
            <p>{this.state.error.message}</p>
          </div>
        )}
        
        {isLoading && <CircularProgress className={styles.loader} />}
        
        {!isLoading && !this.state.hasError && (
          <div className={styles.container}>
            <div className={styles['user-info']}>
              <Avatar
                classname={styles.avatar}
                alt={this.state.repoList.username}
                src={this.state.avatarUrl}
              />
              <h5 className={styles.login}>{this.state.login}</h5>
            </div>
            <h3>List of repositories</h3>
            <ol>
              {this.state.repoList.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} className={styles.link}>
                    {repo.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}
export default About;
