import * as React from "react";
import {
  Container,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
} from "native-base";

import {
  ScrollView,
  View,
  StatusBar,
  Animated
} from "react-native";

import styles from "./styles";
import BottomBar from "../../components/BottomBar";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Menu from "../../components/Menu";
import HomeCategory from "../../components/HomeCategory";
import ProductList from "../../components/ProductList";

const HEADER_HEIGHT = 60
const MAX_SCROLL_OFFSET = 200

class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
       scrollY : new Animated.Value(0),
       scroll : 0
    }
  }

  handleScroll(event) {
    this.setState({
      scroll : event.nativeEvent.contentOffset.y
    })
     Animated.event(
          [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
          {onScroll: this.props.onScroll}
      )(event)
  }

  render() {
    const { navigation } = this.props
    const { scrollY, scroll } = this.state

    const onScroll = scroll > 70

    const headerColor = scrollY.interpolate({
      inputRange: [0, MAX_SCROLL_OFFSET],
      outputRange: ['#2aaa4d', 'white'],
      extrapolate: 'clamp',
    });

    const searchColor = scrollY.interpolate({
      inputRange: [0, MAX_SCROLL_OFFSET],
      outputRange: ['white', '#F6F6F6'],
      extrapolate: 'clamp',
    });

    return (
      <Container style={styles.container}>
      <StatusBar backgroundColor={headerColor} barStyle="light-content" />
        <Header
          onScroll={onScroll}
          color={onScroll ? '#9DA5AE' : 'white'}
          backgroundColor={headerColor}
          searchColor={searchColor}
          navigation={navigation}
        />
        <Content
          scrollEventThrottle={16}
          onScroll={this.handleScroll.bind(this)}
        >
          <View style={styles.circle}>

          </View>
          <Slider />
          <Menu />
          <HomeCategory />
          <ProductList navigation={navigation} />
        </Content>
        <BottomBar 
          navigation={navigation}
        />
      </Container>
    );
  }
}

export default Home;
