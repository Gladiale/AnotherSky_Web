type AppOptionType = {
  loadingAnime: boolean;
  parallax: boolean;

  lastingAnime: {
    cg: boolean;
    video: boolean;
  };

  dropShadow: {
    cg: boolean;
    video: boolean;
    icon: boolean;
    character: boolean;
  };
};

const appOptionInit: AppOptionType = {
  loadingAnime: true,
  parallax: true,

  lastingAnime: {
    cg: true,
    video: true,
  },

  dropShadow: {
    cg: true,
    video: true,
    icon: true,
    character: false,
  },
};

export { appOptionInit, type AppOptionType };
