import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  color: ${props => props.theme.textColorLT};
  font-size: 12px;
  text-decoration: underline;

  :hover {
    cursor: pointer;
    font-weight: 500;
  }
`;

export default class UploadButton extends Component {
  static propTypes = {
    onUpload: PropTypes.func.isRequired
  };

  _onClick = () => {
    this._fileInput.value = null;
    this._fileInput.click();
  }

  _onChange = ({target: {files}}) => {
    if (!files) {
      return;
    }

    this.props.onUpload(files);
  };

  render() {
    return (
      <Wrapper>
        <input
          type="file"
          ref={ref => {this._fileInput = ref}}
          style={{display: 'none'}}
          onChange={this._onChange}
        />
        <span onClick={this._onClick}>{this.props.children}</span>
      </Wrapper>
    );
  }
};
