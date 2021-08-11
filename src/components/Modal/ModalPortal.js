import React from 'react';
import ReactDOM from 'react-dom';


export class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.root = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.root
    );
  }
}

export default ModalPortal;