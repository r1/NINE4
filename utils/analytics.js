import ReactGA from "react-ga";
require('dotenv').config();

export const initGA = () => {
  // https://gyazo.com/3101aeec0a80c2e637e8856449ddf071 Select these settings when you are setting up your analytics to get a tracking ID (if not setup your enviroment variables in your hosting service. Here's a example on Vercel https://gyazo.com/13bc4b22b137c692a6a91bd9df97bf70 )
  ReactGA.initialize(process.env.GA_ENV);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
