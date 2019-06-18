import cdnUrl from '../utils';


export const EXAMPLES = [{
    title: 'California Earthquakes',
    description: 'Location, maginitude and magtype of 2.5+ magnitude earthquakes in california',
    image: cdnUrl('examples/cali-earthquakes.png'),
    url: '/demo/earthquakes'
  },
  {
    title: 'New York City Cab Rides',
    description: 'A small sample of yellow and green taxi trip records in New York City',
    image: cdnUrl('examples/ny-taxis.png'),
    url: '/demo/nyctrips'
  },
  {
    title: 'San Francisco Elevation Contour',
    description: 'Elevation contours of San Francisco mainland and Treasure Island/Yerba Island',
    image: cdnUrl('examples/sf-elevation.png'),
    url: '/demo/sfcontour'
  },
  {
    title: 'Travel Times from Uber Movement',
    description: 'Pittsburgh travel times before and during heavy inclement weather conditions',
    image: cdnUrl('examples/movement-pittsburgh.png'),
    url: '/demo/movement_pittsburgh'
  },
  {
    title: 'New york city population',
    description: 'This dataset contains the 2010 Census tract population data of NYC',
    image: cdnUrl('examples/ny-population.png'),
    url: '/demo/nyc_census'
  },
  {
    title: 'San Francisco Street Tree Map',
    description: 'A 3d hexbin density map showing every single streets in San Francisco',
    image: cdnUrl('examples/sf-street-trees.png'),
    url: '/demo/sftrees'
  },
  {
    title: 'Commute Patterns in the UK',
    description: 'A origin destination map using 3d arcs to show commute patterns of England and Wales residence',
    image: cdnUrl('examples/uk-commute.png'),
    url: '/demo/ukcommute'
  }
];