import {Layers, FilterFunnel, CursorClick, Settings} from '../components/icons';
export const DIMENSIONS = {
  sidePanel: {
    width: 300,
    margin: {top: 20, left: 20, bottom: 30, right: 20},
    headerHeight: 96
  },
  mapControl: {
    width: 204,
    padding: 12
  }
}

export const NAME = 'TEST'
export const VERSION = '0.1'
export const WEBSITE = 'test'

export const PANELS = [
  {
    id: "layer",
    label: "Layers",
    iconComponent: Layers
  },
  {
    id: "filter",
    label: "Filters",
    iconComponent: FilterFunnel
  },
  {
    id: "interaction",
    label: "Interactions",
    iconComponent: CursorClick
  },
  {
    id: "map",
    label: "Base map",
    iconComponent: Settings
  }
];

