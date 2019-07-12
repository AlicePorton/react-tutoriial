import React, { PureComponent } from 'react';
import {Component} from 'react';
import ReactMapGL, {
  GeolocateControl
} from 'react-map-gl';
import styled from 'styled-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import {fromJS, List} from 'immutable';
import ScatterplotOverlay from "../layers/scatter";
import ChoroplethOverlay from '../layers/choropleth';
import CITIES from '../data/cities.json';
import ZIPCODES_SF from "../data/feature-example-sf.json";

import ControlPanel from '../control/control-panel';
import CustomSideBar from "./sidepanel/custom-sidebar";

import Icons from './icons/icons_spec';

const TOKEN = 'pk.eyJ1IjoiYWVzcWUiLCJhIjoiY2lmNGVxYnNnMDNrenJya2xzbmQ4M281bCJ9.GfMJ8R2NX1dDcc9Hs2PO3A'

const CITY_LOCATIONS = fromJS(CITIES.map(c => [c.longitude, c.latitude]));
const ZIPCODES = fromJS(ZIPCODES_SF.features).map(f => 
  f.setIn(['properties', 'value'], Math.random()*1000)
);


const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const taiwan = [23.6247, 120.2868];

class Map extends Component {

  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.785164,
      longitude: -122.41669,
      zoom: 8
    }
  };

  _onInteractiveLayersChange = () => {
  }

  render() {
    return (
      <MapContainer>
        <CustomSideBar />
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}>
          <ControlPanel
            containerComponent={this.props.containerComponent}
            onChange={this._onInteractiveLayersChange}
          />
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <ScatterplotOverlay
            key="scatterplot"
            locations={CITY_LOCATIONS}
            dotRadius={10}
            globalOpacity={0.8}
            compositeOperation="lighter"
            dotFill="#00a8fe"
            renderWhileDragging={true}
          />
          <ChoroplethOverlay
            key="choropleth"
            globalOpacity={0.8}
            colorDomain={[0, 500, 1000]}
            colorRange={["#31a354", "#addd8e", "#f7fcb9"]}
            renderWhileDragging={false}
            features={ZIPCODES}
          />
        </ReactMapGL>
      </MapContainer>
    );
  }
}

export default Map;