import Picture from './picture';
import Save from './save';
import Files from './files';
import Share from './share';
import MapIcon from './map';
import React, { PureComponent } from 'react';



export default class Icons extends PureComponent {


  render() {
    return (
      <div>
        <Picture />
        <Save />
        <Files />
        <Share />
        <MapIcon />
      </div>
    );
  };
}





