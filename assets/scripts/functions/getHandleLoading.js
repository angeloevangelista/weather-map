function getHandleLoading(loadingContainer) {
  return {
    add: () => (loadingContainer.style.display = 'flex'),
    remove: () => (loadingContainer.style.display = 'none'),
  };
}

export default getHandleLoading;
