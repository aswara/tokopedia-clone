import React, { Component } from 'react'
import { 
  View, 
  Image, 
  Text, 
  Dimensions, 
  StyleSheet, 
  ScrollView 
} from 'react-native'
import { Button } from 'native-base'

const styles = StyleSheet.create({
  featuredWrappper: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15
  },
  featuredMenu: {
    margin: 2,
    width: 100,
    height: 70,
    flexDirection: 'column',
    marginVertical: 10,
  },
  menuIcon: {
    width: 100,
    height: 58,
    borderRadius: 10
  },
  menuText: {
    width: '100%',
    height: '100%',
    fontSize: 11,
    position: 'absolute',
    fontWeight: "600",
    color: 'white',
    padding: 10,
    paddingTop: 20
  },
})



export default class Menu extends Component {

  state = {
    featuredMenu: [
      {
        name: 'Terlaris',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/200/attachment/2019/2/22/18958454/18958454_cb795407-f757-43b5-9cae-20591da1029f.png'
      },
      {
        name: 'Spesial Discount',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/200/attachment/2019/5/9/47195626/47195626_556b8820-65be-4aca-9b69-eb0905a0f489.png'
      },      
      {
        name: 'Di bawah 99k',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/200/attachment/2019/3/14/47195626/47195626_b0b19e7a-c58a-4781-8715-10cf4ab6df66.png'
      },
            {
        name: 'Gratis Ongkir',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/200/attachment/2019/2/22/40768394/40768394_a429924d-b93a-4fb6-b2ca-09171392b41b.png'
      },
      {
        name: 'Cashback',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/200/attachment/2019/2/22/40768394/40768394_f3312af5-59fd-4142-acca-d8dc5463d66b.png'
      },      
      {
        name: 'Peralatan Masak',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/200/attachment/2019/2/22/40768394/40768394_29284b9e-d48e-414f-91c9-b3569bcfc5ea.png'
      },
    ]
  }

  render() {
    return(
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.featuredWrappper}>
          {this.state.featuredMenu.map((menu, i)=> (
          <Button
            key={i}
            transparent
            style={styles.featuredMenu}
          >
            <Image
              source={{uri: menu.imageIcon}}
              style={styles.menuIcon}
            />
            <Text numberOfLines={2} style={styles.menuText}>
              {menu.name}
            </Text>
          </Button>
          ))}
        </View>
      </ScrollView>
    )
  }

}