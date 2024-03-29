import React from "react";
import { initGA, logPageView } from "../utils/analytics";

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

export default class Layout extends React.Component<any, any> {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
