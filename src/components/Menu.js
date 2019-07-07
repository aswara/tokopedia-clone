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
    paddingLeft: 10,
    paddingRight: 10
  },
  featuredMenu: {
    margin: 5,
    width: 54,
    height: 90,
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 10
  },
  menuIcon: {
    width: 45,
    height: 45,
    marginBottom: 10
  },
  menuText: {
    fontSize: 11,
    textAlign: 'center'
  },
})



export default class Menu extends Component {

  state = {
    featuredMenu: [
      {
        name: 'Semua Kategori',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/1/3127195/3127195_c6ea0950-24f1-4a11-9900-c96fc166cc63.png'
      },
      {
        name: 'Belanja',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/1/3127195/3127195_2622f550-203a-4fba-95ba-7f94078dbe57.png'
      },      
      {
        name: 'Top-Up & Tagihan',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/3/28/3127195/3127195_a1453389-4f6e-4c13-b266-e1ab85b28fef.png'
      },
      {
        name: 'Travel & Entertainment',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/3/28/3127195/3127195_22e45d0b-71d1-498b-b188-5b222840b2d9.png'
      },
      {
        name: 'Keuangan',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/3/28/3127195/3127195_061c17ea-bcd3-4f28-abaf-25aaf99477d9.png'
      },      
      {
        name: 'Pulsa',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/5/17/47197032/47197032_b4121422-9a95-4291-af19-e0536730369d.png'
      },
      {
        name: 'Tiket Kereta Api',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/30/3127195/3127195_1b0a84ad-f77a-487d-9a78-f37244f56ff0.png'
      },      
      {
        name: 'Flight',
        imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/1/3127195/3127195_2258af2c-550d-4b7f-a8d4-f62178070ed8.png'
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