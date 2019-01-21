import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, AsyncStorage, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { url } from '../../config';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';

class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Masuk',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#03A9F4',
        }
    }

    state = {
        email: '',
        password: '',
        loading: false,
        message: ''
    }

    login = () => {
        const { email, password } = this.state

        if (email && password) {

            this.setState({
                loading: true
            })

            axios.post(url + "/api/user/login", { email, password })
                .then(res => {
                    const token = res.data.token
                    AsyncStorage.setItem('token', token)
                    this.props.loginAction(token, res.data.user)
                    this.props.navigation.push('Profile')
                    this.setState({
                        loading: false
                    })
                })
                .catch(err => {
                    this.setState({
                        loading: false,
                        message: 'Username atau password salah'
                    })
                })
        }
    }

    render() {
        const { loading, message } = this.state
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Semangat belajar!</Text>
                    <Text style={{color: 'red'}}>{message}</Text>
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
                            <TouchableOpacity onPress={this.login}>
                                <Text style={styles.login}>MASUK</Text>
                            </TouchableOpacity>
                    }

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#03A9F4',
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
        color: '#03A9F4'
    },
    login: {
        marginTop: 20,
        backgroundColor: '#03A9F4',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        borderRadius: 30,
        elevation: 5,

    },
    email: {
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


export default connect(null, {loginAction})(Login);