import { TypedTypePolicies } from '../__generated__/typedTypePolicies';

export const typePolicies = {
  Query: {
    fields: {
      repositoryOwner: {
        merge: true,
      },
    },
  },
  RepositoryConnection: {
    fields: {
      nodes: {
        keyArgs: ['login'],
        merge(existing = [], incoming = [], { args = {} }) {
          if (!args?.after) {
            return incoming;
          }
          return [...existing, ...incoming];
        },
      },
    },
  },
} satisfies TypedTypePolicies;
