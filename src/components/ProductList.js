import React, { Component } from 'react'
import { 
  View, 
  Image, 
  Text, 
  Dimensions, 
  StyleSheet, 
  ScrollView,
  FlatList
} from 'react-native'
import { Button } from 'native-base'

const styles = StyleSheet.create({
  listWrapper: {
    padding: 10
  },
  listMenu: {
    height: 225,
    flexDirection: 'column',
    margin: 5,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(229, 231, 233)',
    backgroundColor: 'white'
  },
  menuIcon: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
  },
  menuText: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    top: 145,
    width: '100%',
    padding: 7,
    
  },
  name: {
    fontSize: 14
  },
  price: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgb(250, 89, 29)'
  }
})



export default class ProductList extends Component {


  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
      <Button
        transparent
        style={styles.listMenu}
        onPress={()=> { this.props.navigation.navigate('Product', { item } ); }}
      >
        <Image
          source={{uri: item.image}}
          style={styles.menuIcon}
        />
        <View style={styles.menuText}>
          <Text numberOfLines={2} style={styles.name}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.price}>
            {item.price}
          </Text>
        </View>
      </Button>
  );

  render() {
    const listMenu = [];

    for (let i = 1; i <= 10; i++) {
      listMenu.push(
      {
        name: "Kurta Zipper Linen/ Baju Koko Pria/ Kemeja Muslim/ Baju Muslim Pria",
        image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/4/20/7749740/7749740_b1c479d3-e1b4-48f4-9cf9-bbffbcd15d3d_700_700.jpg",
        price: "Rp 185.000",
        star: 4,
        description: "Bahan : Linen↵↵Size Chart ( lebar dada x panjang)↵Ready↵S : 50 x 85cm (navy, black, maroon)↵M : 52 x 87cm (navy, blqck, maroon↵L : 55 x 90cm (black, maroon, Putih) (navy kosong)↵XL : 60 x 92cm (navy, black, maroon, Putih)↵↵Warna READY :↵- Hitam (S,M.L,XL)↵- Navy (XL)↵- Maroon (XL)↵",
        info: [
          { label: 'Berat', value: '300 gram' },
          { label: 'Kondisi', value: 'New' },
          { label: 'Asuransi', value: 'Opsional' },
          { label: 'Pemesanan Min', value: '1 Buah' },
          { label: 'Kategori', value: 'Busana Pria' },

        ]
      });
    }

    return(
      <View style={styles.listWrapper}>
        <FlatList
          data={listMenu}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>
    )
  }

}