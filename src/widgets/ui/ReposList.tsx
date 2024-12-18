import { RepoCard } from '@/entities/repositories';
import { Spinner } from '@/shared/components/ui/Spinner';
import { RepositoryFragment } from '@/entities/repositories/gql/fragments/repository.graphql';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';

interface ReposListProps {
  repos: (RepositoryFragment | null)[];
  totalCount: number;
  isLoading: boolean;
  isFetchingMore: boolean;
  hasNextPage?: boolean;
  onLoadMore: () => void;
}

export const ReposList = ({
  repos,
  totalCount,
  isLoading,
  isFetchingMore,
  hasNextPage,
  onLoadMore,
}: ReposListProps) => {
  const loaderRef = useInfiniteScroll<HTMLDivElement>({
    hasNextPage,
    isLoading: isFetchingMore,
    onLoadMore,
  });

  if (isLoading && !repos.length) {
    return <Spinner className="self-center" />;
  }

  if (!repos.length) {
    return <p>Репозитории не найдены</p>;
  }

  if (repos.length > 0) {
    return (
      <>
        <div className="flex flex-col gap-3">
          {repos.map(repo =>
            repo ? <RepoCard key={repo.id} repo={repo} /> : null
          )}
        </div>

        {hasNextPage && (
          <div ref={loaderRef} className="flex justify-center p-4 h-20">
            {(isLoading || isFetchingMore) && (
              <Spinner className="self-center" />
            )}
          </div>
        )}

        <div className="text-sm text-muted-foreground text-center">
          Показано {repos.length} из {totalCount} репозиториев
        </div>
      </>
    );
  }

  if (!isLoading && !isFetchingMore) {
    return <p>Репозитории не найдены</p>;
  }

  return null;
};
