import React, { createRef, PureComponent } from 'react';
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/line';

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.lineRef = createRef();
  }

  // componentDidMount() {
  //   this.myChart = echarts.getInstanceByDom(this.lineRef.current);
  //   if (this.myChart === undefined) {
  //     this.myChart = echarts.init(this.lineRef);
  //   }
  // }

  render() {
    return (
      <div id="dashboard">
        <div className="chart" ref={this.lineRef} />
        <div className="data">
          <div className="describe"></div>
          <div className="option"></div>
        </div>
      </div>
    );
  }
}
