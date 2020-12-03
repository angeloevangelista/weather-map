function debounceEvent(fn, wait, timeout) {
  return (...args) => {
    clearTimeout(timeout, (timeout = setTimeout(() => fn(...args), wait)));
  };
}

export default debounceEvent;
