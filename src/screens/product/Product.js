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
  Footer,
  Header,
} from "native-base";

import {
  ScrollView,
  View,
  Image,
  Animated
} from "react-native";
import Swiper from 'react-native-swiper';


import styles from "./styles";
import BottomBar from "../../components/BottomBar";

const HEADER_HEIGHT = 60
const MAX_SCROLL_OFFSET = 400

class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      scrollY : new Animated.Value(0)
    }
  }

  handleScroll = (event) => {
    this.setState({
      scrollY : event.nativeEvent.contentOffset.y
    })
  }

  render() {
    const { navigation, lang } = this.props
    const { scrollY } = this.state

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, MAX_SCROLL_OFFSET],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: 'clamp',
    });

    const onScroll = scrollY > 45

    const item = navigation.getParam('item', {});

    const images = item ? [ item.image ] : [];
    const info = item.info || [];
    const description = item.description ? item.description.replace(/↵/gi, '\n') : '';

    return (
      <Container style={styles.container}>
        <Animated.View style={[styles.header, {transform: [{translateY: headerTranslate }]} ]}>
            <View>
              <Button
                transparent
                onPress={()=>{ navigation.goBack() }}
              >
                <Icon style={styles.icon} name="arrow-back" />
              </Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button transparent>
                  <Icon style={styles.icon} name="share" />
                </Button>
                <Button transparent>
                  <Icon style={styles.icon} name="cart" />
                </Button>
                <Button transparent>
                  <Icon style={styles.icon} name="more" />
                </Button>
            </View>
        </Animated.View>
        <Content
          scrollEventThrottle={16}
          onScroll={Animated.event(
              [
                {
                   nativeEvent: {contentOffset:{y:this.state.scrollY}}
                }
              ]
          )}
        >
          <View>
            <Swiper
              autoplay
              autoplayTimeout={2}
              dotStyle={styles.swiperDot}
              activeDotStyle={styles.swiperActiveDot}
              style={{height: 400}}
              paginationStyle={styles.swiperPagination}
            >
              {images.map((image, i)=> {
                return(
                  <View
                    style={{flex: .9, justifyContent: 'flex-start'}}
                    key={i}
                  >
                    <Image
                      source={{uri: image}}
                      style={{
                        flex: 1,
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </View>
                )
              })}
            </Swiper>
          </View>

          <View style={[styles.boxShadow, { marginTop: -45 }]}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View>
              <Text style={{ fontSize: 11, color: 'gray' }}>Produk dari</Text>
            </View>
            <View
              style={styles.horizontalLine}
            />
            <View>
              <Text style={{ fontSize: 11, fontWeight: "600", color: 'gray' }}>Stock terbatas!</Text>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.wrapInfo}>
                <Text style={styles.text1}>Dilihat</Text>
                <Text style={styles.text2}>66,27rb</Text>
              </View>
              <View style={styles.wrapInfo}>
                <Text style={styles.text1}>Transaksi Berhasil</Text>
                <Text style={styles.text2}>99,33%</Text>
              </View>              
              <View style={styles.wrapInfo}>
                <Text style={styles.text1}>Wishlisht</Text>
                <Text style={styles.text2}>1193</Text>
              </View>
            </View>
          </View>

          <View style={[styles.boxShadow]}>
            <View>
              <Text style={styles.title}>{lang.product_info}</Text>
              {
                info.map(item => (
                  <View style={styles.infoList}>
                    <Text style={styles.description}>{item.label}</Text>
                    <Text style={styles.description}>{item.value}</Text>
                  </View>
                  ))
              }
              <Text style={styles.description}></Text>
            </View>
            <View>
              <Text style={styles.title}>{lang.product_description}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>

        </Content>

        <Footer>
          <View style={styles.footer}>
            <Button style={{ borderColor: 'lightgray', borderRadius: 5 }} bordered>
              <Icon style={{ color: 'gray' }} name='chatbubbles' />
            </Button>
            <Button
              style={styles.buttonBuy} bordered
              onPress={() => navigation.navigate("Login")}
              >
              <Text style={{ color: '#FF582F', fontSize: 12 }} uppercase={false}>Beli</Text>
            </Button>
            <Button
              style={styles.buttonCart} 
              onPress={() => navigation.navigate("Login")}
              >
              <Text style={{ fontSize: 12 }} uppercase={false}>Tambah Keranjang</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Home;