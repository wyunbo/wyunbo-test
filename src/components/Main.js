require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  state = {
  	inputContent: 'aaaaaa'
  }
  changeHandler = (e) => {
  	this.setState({inputContent: e.target.value});
  	e.preventDefault();
  	e.stopPropagation();
  }
  render() {
    return (
      <div>
      	<input type="text" onChange={(e) => this.changeHandler(e) }/><span>{this.state.inputContent}</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
