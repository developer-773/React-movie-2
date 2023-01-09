

export const Debounce = (callback) => {
    let timeout;
      return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback(), 180);
    };
  };