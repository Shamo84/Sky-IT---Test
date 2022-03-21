import { gql } from '@apollo/client';

export const LOAD_MISSION = gql`
  query Launches {
    launches {
      mission_name
      mission_id
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
      }
      launch_site {
        site_name
      }
      launch_date_local
    }
  }
`;
