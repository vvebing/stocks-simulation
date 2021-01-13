import React, { lazy, PureComponent } from 'react';
import localForage from 'localforage';
import { Button, Skeleton } from 'antd';

const Login = lazy(() => import('./Login'));
const Error = lazy(() => import('./Error'));
const Finish = lazy(() => import('./Finish'));
const Notice = lazy(() => import('./Notice'));
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
      /**
       * [{
       *  stock: A | B | C | D | E,
       *  buy: [],  // length = 20
       *  sell: [], // length = 20
       *  mood: [], // length = 5
       * }]
       */
      finish: false,
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const { uuid = '', groupID = '' } = await localForage.getItem('userInfo') ?? {};
      const noticed = await localForage.getItem('noticed') ?? false;
      const nextState = {
        uuid,
        groupID,
        noticed,
        showNotice: !noticed,
        loading: false,
      };
      if (!uuid || !groupID) {
        return this.setState(nextState);
      }
      const trades = await localForage.getItem('trades') ?? [];
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }

  login = ({ uuid, groupID }) => {
    localForage.setItem('userInfo', {
      uuid,
      groupID,
    }, () => {
      this.setState({
        uuid,
        groupID,
      });
    });
  }

  closeModal = () => {
    localForage.setItem('noticed', true, () => {
      this.setState({
        noticed: true,
        showNotice: false,
      });
    });
  }

  clearUserInfo = async () => {
    await localForage.removeItem('userInfo');
    await localForage.removeItem('noticed');
    this.setState({
      uuid: '',
      groupID: '',
      noticed: false,
      showNotice: true,
    });
  }

  clearDashboard = async () => {
    await localForage.removeItem('trades');
    this.setState({
      trades: [],
    });
  }

  render() {
    const {
      loading,
      error,
      uuid,
      groupID,
      noticed,
      showNotice,
      trades,
      finish,
     } = this.state;

    if (loading) {
      return <div id="skeleton"><Skeleton active /></div>;
    }

    if (error) {
      return <Error />;
    }

    if (!uuid || !groupID) {
      return <Login login={this.login} />;
    }

    if (finish) {
      return <Finish />;
    }

    return (
      <>
        <Button onClick={this.clearUserInfo}>清除用户数据</Button>
        <Button onClick={this.clearDashboard}>清除实验数据</Button>
        <Notice
          noticed={noticed}
          visible={showNotice}
          onCancel={this.closeModal}
        />
      </>
    );
  }
}
