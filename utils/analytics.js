import ReactGA from 'react-ga'

export const initGA = () => {
// https://gyazo.com/3101aeec0a80c2e637e8856449ddf071 Select these settings when you are setting up your analytics to get a tracking ID
  ReactGA.initialize('UA-152031643-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}