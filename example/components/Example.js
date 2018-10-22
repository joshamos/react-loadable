import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import delay from '../utils/delay';
import path from 'path';

const LoadableNested = Loadable({
  loader: () => import(/* webpackChunkName: 'ExampleNested' */ './ExampleNested'),
  loading: Loading,
});

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      display: false,
    };
  }


  render () {
    const onClick = () => {
      console.log('hello');
      this.setState({
        display: true
      });
    }
    return (
      <div>
        <h1>Hello from a loadable component</h1>
        <span onClick={onClick}> test</span>
        {
          this.state.display ? <LoadableNested/> : <div></div>
        }

      </div>
    );
  }
}
