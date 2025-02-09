const makeFinalFilter = (filter) => {
  if (Array.isArray(filter)) {
    const subs = filter;
    filter = (mod) => subs.every((s) => mod[s] || (mod.__proto__ && mod.__proto__[s]));
  }

  return filter;
};

module.exports = {
  getModule: (filter, retry, _forever) => { // Ignoring retry and forever arguments for basic implementation
    filter = makeFinalFilter(filter);

    const result = goosemodScope.webpackModules.find(filter);

    if (!retry) { // retry = false: sync, retry = true: async (returns Promise)
      return result;
    }

    return new Promise((res) => res(result));
  },

  getAllModules: (filter) => {
    filter = makeFinalFilter(filter);

    return goosemodScope.webpackModules.findAll(filter);
  },

  getModuleByDisplayName: (displayName) => {
    return goosemodScope.webpackModules.findByDisplayName(displayName);
  },

  ...goosemodScope.webpackModules.common // Export common modules (eg: React)
};