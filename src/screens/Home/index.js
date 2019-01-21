import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { url } from '../../config';

export default class Home extends Component {
  state = {
    categories: [],
    loading: true
  }

  componentDidMount() {
    this.fetchCategories()
  }

  fetchCategories = () => {
    axios.get(url + "/api/category")
      .then(res => {
        this.setState({ categories: res.data, loading: false })
      })
  }

  question(item) {
    this.props.navigation.navigate('Question', { item })
  }

  render() {
    const { categories, loading } = this.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.categories}>
          <Text style={styles.title}>Kategori Soal</Text>
          
          {
            loading && <ActivityIndicator style={{ marginTop: 10 }} size={40} color="#74b9ff" />
          }

          <FlatList
            data={categories}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.question(item)}
              >
                <Text style={styles.category}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7EB633',
    color: '#3E3E3E',
    padding: 20
  },
  categories: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 25,
    elevation: 3,
  },
  title: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
    color: '#7EB633'
  },
  category: {
    backgroundColor: '#74b9ff',
    textAlign: 'center',
    padding: 5,
    color: 'white',
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 18,
    borderRadius: 5,
    elevation: 3,
  }
});
