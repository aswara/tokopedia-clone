import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { Container, Header, Button, Text, Icon, Left, Right, Input, Item } from 'native-base'

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  button: {
    marginLeft: 10,
    marginRight: 7,
    fontSize: 25
  }
})

const HeaderComponent = (props) => {

    const { 
      navigation,
      backgroundColor,
      color,
      onScroll,
      searchColor
     } = props

    return(
        <Header
          androidStatusBarColor={onScroll ? 'lightgray' : '#2aaa4d' }
          style={{
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <Animated.View
              style={{
                paddingLeft: 17,
                paddingRight: 17,
                backgroundColor,
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
            <Animated.View style={{
              backgroundColor: searchColor,
              borderRadius: 8,
              flexDirection: 'row',
              width: 220,
              alignItems: 'center',
              height: 40,
              paddingLeft: 10
            }}>
              <Icon style={{ color: '#B3BAC3', fontSize: 18 }} name="ios-search" />
              <Input placeholderTextColor='#B3BAC3' style={{ fontSize: 16 }} placeholder="Cari di Tokopedia" />
            </Animated.View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
                <Icon style={[styles.button, { color }]} name='heart' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
                <Icon style={[styles.button, { color }]} name='mail' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Icon style={[styles.button, { color }]} name='notifications' />
            </TouchableOpacity>
          </View>
          </Animated.View>
        </Header>
    )
  
}


export default HeaderComponent;