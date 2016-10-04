// Custom Dropdown built on Bootstrap-React Dropdown...

import React from 'react'
import {Dropdown} from 'react-bootstrap'
import PaneButton from '../PaneButton/PaneButton'

class PaneDropdownButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <PaneButton onClick={this.handleClick} title={this.props.title}>
        {this.props.children}
      </PaneButton>
    );
  }
}

export default PaneDropdownButton