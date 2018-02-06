import React from 'react';
import ReactDOM from 'react-dom';

/// 使用 propTypes須引入
import PropTypes from 'prop-types';

/// 建立元件方法一
class App extends React.Component {
  //若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      secondsElapsed: 0,
      startTime:10
    };
  }
  tick() {
    // state內有多個參數時，可獨立更新某個參數

    // this.setState({
    //   secondsElapsed: this.state.secondsElapsed + 1
    // });

    // 如果要使用props的資料可傳入一個方法 prevState:state , props:外部props
    this.setState((prevState, props) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
    
  }
  componentDidMount() {
      this.interval = setInterval(this.tick,1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <div>State : {this.state.startTime}</div>
      </div>
     
    );
  }
}

/// 使用ES6 建立元件，但無法使用生命週期等方法(效能較好)
// const App = ({name}) => {
//   return(<div>Hello, {name}</div>);
// };

App.propTypes = {
  name: PropTypes.string
}

App.defaultProps = {
  name: 'Mia'
}

ReactDOM.render(<App name='mia' />, document.getElementById('app'));