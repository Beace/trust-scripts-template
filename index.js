import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

class AppTest extends React.Component {
  render() {
    return (
      <h1 className={styles.title}>Hello,Trust Scripts!!!</h1>
    )
  }
}

ReactDOM.render(<AppTest />, document.getElementById('root-test'));
