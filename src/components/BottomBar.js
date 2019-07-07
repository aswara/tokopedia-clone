import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Icon } from 'native-base'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    color: 'gray'
  },
  menuIcon: {
    height: 27,
    width: 27
  },
  button: {
    width: 70,
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default class BottomBar extends Component {

  render() {
    const { navigation } = this.props

    const navs = [
      {
        icon: "apps",
        text: 'Home',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/11/20723472/20723472_8e83f5b5-b78a-477f-a28f-c416e5249cd0.png.webp'
      }, {
        icon: "heart",
        text: 'Feed',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_7b72c368-d93e-41e1-8889-ef695ac5dc97.png.webp'
      }, {
        icon: "cart",
        text: 'Official Store',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/4/20723472/20723472_1e37237f-b884-4791-9083-a0af29e92a08.png.webp'

      }, {
        icon: "card",
        text: 'Keranjang',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/14/20723472/20723472_42491eb8-4d07-44f0-9a79-03ea94fdfd27.png.webp'

      }, {
        icon: "md-person",
        text: 'Akun',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_a42a010b-bd35-4279-8bea-84e7bb1bcfc0.png.webp'


      }
    ]

    return(
        <Footer>
          <View style={styles.wrapper} >
          {
            navs.map(item =>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
            <View
              style={styles.button}
              >
              <Image
                source={{uri: item.image}}
                style={styles.menuIcon}
              />
                <Text numberOfLines={1} style={styles.text}>{item.text}</Text>
            </View>
            </TouchableOpacity>
            )
          }
          </View>
        </Footer>
    )
  }
}


