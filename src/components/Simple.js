import React from 'react';

export default class ExampleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      dataReady: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => {
        this.setState({ dataReady: true });
        return data.json();
      })
      .then(json => console.log(json));
  }

  render() {
    if (this.state.dataReady) {
      return (<div> data is ready! </div>);
    }
    return (<div> spinner! </div>);
  }
}
