import React, { lazy, PureComponent, Suspense } from 'react';
import localForage from 'localforage';
import { Skeleton, Spin } from 'antd';

const Login = lazy(() => import('./Login'));
const Error = lazy(() => import('./Error'));
const Finish = lazy(() => import('./Finish'));
const Dashboard = lazy(() => import('./Dashboard'));
const Questionnaire = lazy(() => import('./Questionnaire'));

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uuid: '',
      groupID: '',
      noticed: false,
      showNotice: false,
      trades: [],
      moods: [],
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const { uuid, groupID } = await localForage.getItem('userInfo') ?? {};
      if (!uuid || !groupID) {
        return this.setState({
          uuid: '',
          groupID: '',
          loading: false,
        });
      }
      const noticed = await localForage.getItem('noticed') ?? false;
      const trades = await localForage.getItem('trades') ?? [];
      const moods = await localForage.getItem('moods') ?? [];
      if (trades.length - 1 > moods.length) {
        trades.splice(moods.length, trades.length - moods.length - 1);
      } else if (moods.length > trades.length) {
        moods.splice(trades.length, moods.length - trades.length);
      }
      this.setState({
        uuid,
        groupID,
        noticed,
        showNotice: !noticed,
        trades,
        moods,
        loading: false,
      });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  }

  login = ({ uuid, groupID }) => {
    this.setState({ uuid, groupID });
    localForage.setItem('userInfo', { uuid, groupID });
  }

  render() {
    const {
      loading,
      error,
      uuid,
      groupID,
      noticed,
      trades,
      moods,
     } = this.state;

    if (loading) {
      return <Skeleton active />;
    }

    return (
      <Suspense fallback={<Spin size="large" />}>
        {
          (() => {
            if (error) {
              return <Error />;
            }
            if (!uuid || !groupID) {
              return <Login login={this.login} />;
            }
          })()
        }
      </Suspense>
    );
  }
}
