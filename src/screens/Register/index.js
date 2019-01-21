import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, AsyncStorage, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { url } from '../../config';

export default class Register extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Buat akun',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#7EB633',
        }
    }

    state = {
        email: '',
        password: '',
        name: '',
        loading: false,
        message: ''
    }

    register = () => {
        const { email, password, name } = this.state

        if (email && password && name) {
            this.setState({
                loading: true
            })

            axios.post(url + "/api/user/register", { name, email, password })
                .then(res => {
                    this.props.navigation.navigate('Login')
                })
                .catch(err => {
                    this.setState({
                        loading: false,
                        message: 'Email sudah terdaftar'
                    })
                })
        }
    }

    render() {
        const { loading, message } = this.state
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Selamat bergabung!</Text>
                    <Text style={{color: 'red'}}>{message}</Text>
                    <TextInput
                        style={styles.name}
                        placeholder="nama"
                        keyboardType="default"
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                    <TextInput
                        style={styles.email}
                        placeholder="email"
                        keyboardType="email-address"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        style={styles.password}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    {
                        loading ? <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                            :
                            <TouchableOpacity onPress={this.register}>
                                <Text style={styles.register}>DAFTAR</Text>
                            </TouchableOpacity>
                    }

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
    wrapper: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 20,
        marginTop: 20,
    },
    title: {
        flex: 1,
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '500',
        color: '#7EB633'
    },
    register: {
        marginTop: 20,
        backgroundColor: '#7EB633',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        borderRadius: 30,
        elevation: 5,
    },
    name: {
        marginTop: 5,
        backgroundColor: '#EEEEEE',
        color: '#3E3E3E',
        padding: 10,
        fontSize: 17,
        borderColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        elevation: 3,

    },
    email: {
        backgroundColor: '#EEEEEE',
        color: '#3E3E3E',
        padding: 10,
        fontSize: 17,
        borderColor: 'white',
        borderBottomWidth: 1,
        elevation: 3,
    },
    password: {
        backgroundColor: '#EEEEEE',
        color: '#3E3E3E',
        padding: 10,
        fontSize: 17,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 3,

    }
});
