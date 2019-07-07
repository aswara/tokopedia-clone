import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  swiperDot: {
    backgroundColor: '#DDDDDD',
    width: 8,
    height: 8,
    borderRadius: 4
  },
  swiperActiveDot: {
    backgroundColor: '#2AAA4D',
    width: 8,
    height: 8,
    borderRadius: 4
  },
  swiperPagination: {
    position: 'absolute',
    left: 0,
    bottom: -10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
})

class Slider extends Component {

  render() {
    const banners =[
      {
        image: 'https://ecs7.tokopedia.net/img/banner/2019/6/26/20723472/20723472_5ea87185-63ee-4436-9b51-b063a90f9d38'
      }, {
        image: 'https://ecs7.tokopedia.net/img/banner/2019/6/26/20723472/20723472_69d5c086-e8f5-478e-8c53-953caa72f7dd'
      }
    ]

    return(
      <View style={{
        padding: 15
      }}>
        <Swiper
          autoplay
          autoplayTimeout={2}
          dotStyle={styles.swiperDot}
          activeDotStyle={styles.swiperActiveDot}
          style={{height: 120}}
          paginationStyle={styles.swiperPagination}
        >
          {banners.map((banner, i)=> {
            return(
              <View
                style={{flex: .9, justifyContent: 'flex-start'}}
                key={i}
              >
                <Image
                  source={{uri: banner.image}}
                  style={{
                    flex: 1,
                    height: '100%',
                    width: '100%',
                    borderRadius: 10
                  }}
                />
              </View>
            )
          })}
        </Swiper>
      </View>
    )
  }

}

export default Slider