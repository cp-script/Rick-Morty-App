import { gql } from "@apollo/client";

export const GET_CHARACTER_LIST = gql`
  query getCharacterList($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          residents {
            id
          }
        }
        location {
          id
          name
          type
          dimension
          residents {
            id
          }
        }
        image
        episode {
          id
          name
          air_date
          episode
          characters {
            id
          }
        }
      }
    }
  }
`;

export const GET_CHARACTER_DATA = gql`
  query getCharacterData($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      location {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      image
      episode {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`;
