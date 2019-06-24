
// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Base from './base';

export default class ArrowDown extends Component {
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string
  };

  static defaultProps = {
    height: '16px',
    predefinedClassName: 'data-ex-icons-address',
    viewBox: '0 0 1024 1024'
  };

  render() {
    return (
      <Base {...this.props}>
        <g transform="translate(-300, -200) scale(1.4, 1.4)" >
          <path d="M518.096 651.936c18.432-21.648 40.24-51.6 60.704-83.648 46.56-72.912 77.2-142.4 77.2-176.256C656 317.36 591.968 256 512 256s-144 61.36-144 136.032c0 33.856 30.64 103.36 77.2 176.256 20.48 32.048 42.272 62 60.704 83.648 2.112 2.48 4.144 4.832 6.096 7.008 1.952-2.176 4-4.528 6.096-7.008zM512 720c-30 0-192-226.336-192-327.968C320 290.384 405.968 208 512 208s192 82.4 192 184.032S542 720 512 720z m0-265.344a72 72 0 1 1 0-144 72 72 0 0 1 0 144z m0-48a24 24 0 1 0 0-48 24 24 0 0 0 0 48z m144 376v16a16 16 0 0 1-16 16H384a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16z" />
        </g>
      </Base>
    );
  }
};
