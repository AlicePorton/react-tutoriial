import React, { PureComponent } from 'react';
import {
  IntroductionCard
} from './components/common/card';
import Map from './components/map';


class Website extends PureComponent {
  render() {
    return (
      <div>
        {/* <IntroductionCard
          title="test"
          description="test2"
          linkText="linkText"
        ></IntroductionCard> */}
        <Map />
      </div>
    )
  }
}

export default Website