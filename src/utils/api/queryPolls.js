import { gql } from '@apollo/client';

export const GET_POLLS = gql`
  query GetPolls {
    polls(sort: "createdAt:desc") {
      data {
        id
        attributes {
          title
          startDate
          endDate
          shortDescription
          yes
          no
          abstain
          noWithVeto
          poll_addresses {
            data {
              id
              attributes {
                address
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_POLL = gql`
  query GetPoll($id: ID!) {
    poll(id: $id) {
      data {
        id
        attributes {
          title
          startDate
          endDate
          description
          yes
          no
          abstain
          noWithVeto
          poll_addresses {
            data {
              id
              attributes {
                address
              }
            }
          }
        }
      }
    }
  }
`;
