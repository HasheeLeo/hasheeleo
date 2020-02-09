module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' }
    };
  }
};
