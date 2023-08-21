import React from "react";
import BottomTabNavigation from "./bottomtabnav";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFontLoaded: false,
    };
  }
  loadedFont = async () => {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });
    this.setState({
      isFontLoaded: true,
    });
  };
  componentDidMount() {
    this.loadedFont();
  }
  render() {
    if (this.state.isFontLoaded) {
      return <BottomTabNavigation />;
    }
    return null;
  }
}
