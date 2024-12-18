export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
