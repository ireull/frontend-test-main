'use client';
import { useState } from 'react';

import { useRepositoriesSearch } from '@/features/model/useRepositoriesSearch';
import { SearchInput } from '@/features/components/SearchInput';
import { ReposList } from '@/widgets/ui/ReposList';
import { ScrollToTop } from '@/shared/ui/ScrollToTop';

export const ReposExplorer = () => {
  const [login, setLogin] = useState('');

  const {
    repos,
    pageInfo,
    totalCount,
    loading: isLoading,
    isFetchingMore,
    loadMore,
  } = useRepositoriesSearch(login);

  return (
    <div className="flex flex-col gap-8 w-full max-w-prose">
      <SearchInput value={login} onChange={setLogin} />
      {!!login && (
        <ReposList
          repos={repos}
          totalCount={totalCount}
          isLoading={isLoading}
          isFetchingMore={isFetchingMore}
          hasNextPage={pageInfo?.hasNextPage}
          onLoadMore={loadMore}
        />
      )}
      <ScrollToTop threshold={400} />
    </div>
  );
};
