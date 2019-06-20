import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyledPanelDropdown} from '../common/style-components';
import listensToClickOutside from 'react-onclickoutside';

class ClickOutsideCloseDropdown extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool
  };

  static defaultProps = {
    show: true
  };

  handleClickOutside = (e) => {
    if (typeof this.props.onClose === 'function' && this.props.show) {
      this.props.onClose(e);
    }
  };

  render() {
    return (
      <StyledPanelDropdown className={this.props.className}>
        {this.props.children}
      </StyledPanelDropdown>
    );
  }
};

export default listensToClickOutside(ClickOutsideCloseDropdown);