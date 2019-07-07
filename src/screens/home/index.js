// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "./Home";

function bindAction(dispatch) {
  return {
    
  };
}

const mapStateToProps = state => ({
  lang: state.lang
});
export default connect(mapStateToProps, bindAction)(Home);
