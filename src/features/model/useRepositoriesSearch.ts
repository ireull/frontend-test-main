import { useState, useEffect } from 'react';

import { useRepositoriesByOwnerQuery } from '@/entities/repositories/gql/queries/repositoriesByOwner.graphql';

export const useRepositoriesSearch = (login: string) => {
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { data, loading, fetchMore } = useRepositoriesByOwnerQuery({
    variables: {
      login,
      first: 10,
    },
    notifyOnNetworkStatusChange: true,
    skip: !login,
  });

  const repos = data?.repositoryOwner?.repositories.nodes || [];
  const pageInfo = data?.repositoryOwner?.repositories.pageInfo;
  const totalCount = data?.repositoryOwner?.repositories.totalCount || 0;

  const loadMore = async () => {
    if (!pageInfo?.hasNextPage || isFetchingMore || loading) return;

    try {
      setIsFetchingMore(true);
      await fetchMore({
        variables: {
          login,
          after: pageInfo.endCursor,
          first: 10,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.repositoryOwner?.repositories) return prev;
          return {
            repositoryOwner: {
              ...prev.repositoryOwner,
              repositories: {
                ...fetchMoreResult.repositoryOwner.repositories,
                nodes: [
                  ...(prev.repositoryOwner?.repositories?.nodes || []),
                  ...(fetchMoreResult.repositoryOwner?.repositories?.nodes ||
                    []),
                ],
              },
            },
          };
        },
      });
    } catch (error) {
      console.error('Error loading more repos:', error);
    } finally {
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    setIsFetchingMore(false);
  }, [login]);

  return {
    repos,
    pageInfo,
    totalCount,
    loading,
    isFetchingMore,
    loadMore,
  };
};
