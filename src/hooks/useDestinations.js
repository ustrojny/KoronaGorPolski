import { graphql, useStaticQuery } from 'gatsby';

export default function useDestinations() {
  const { gcms = {} } = useStaticQuery( graphql`
    query {
      gcms {
        destinations {
          id
          name
          peakNumber
          winter
          location {
            latitude
            longitude
          }
        }
      }
    }
  ` );

  let { destinations } = gcms;
  return {
    destinations,
  };
}