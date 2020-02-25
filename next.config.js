module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/portfolio': { page: '/portfolio' },
      '/contact': { page: '/contact' }
    };
  }
};
