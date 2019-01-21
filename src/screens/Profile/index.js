import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { url, headers } from '../../config';
import { connect } from 'react-redux';
import { logoutAction } from '../../actions'
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class Profile extends Component {

    state = {
        login: false,
        name: '',
        email: '',
        photo: '',
        loading: true
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            // The screen is focused
            // Call any action
            this.fetchProfile()
        });
    }

    componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
    }


    fetchProfile = () => {
        const { data, login, token } = this.props.user
        if (login) {
            axios.get(url + "/api/user/level", headers(token))
                .then(res => {
                    const { level, newPoint, treshold } = res.data
                    this.setState({
                        level, newPoint, treshold, loading: false
                    })
                })

            this.setState({
                login: true,
                name: data.name,
                email: data.email,
                photo: data.photo,
            })
        }
    }

    logout = () => {
        this.props.logoutAction();
        AsyncStorage.removeItem('token');
        this.setState({
            login: false
        });
    }


    render() {
        const { login, email, name, photo, loading, level, newPoint, treshold } = this.state

        if (login) {
            if (loading) {
                return (
                    <View style={styles.container}>
                        <ActivityIndicator style={{ marginTop: 20 }} size={40} color="white" />
                    </View>
                )
            } else {
                return (
                    <ScrollView style={styles.containerProfile} >
                        <View style={styles.profile}>
                            <Image
                                style={{
                                    backgroundColor: "lightgray",
                                    height: 150,
                                    width: 150,
                                    borderRadius: 75,
                                    alignSelf: "center",
                                    marginBottom: 10,
                                }}
                                source={{ uri: photo }}
                            />
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.email}>{email}</Text>
                            <Text style={styles.name}>level {level}</Text>
                            <Text style={styles.email}>point {newPoint} / {treshold}</Text>
                            <TouchableOpacity onPress={this.logout}>
                                <Text style={styles.logout}>KELUAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>)
            }
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Buat profil untuk mengumpulkan poin</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.register}>Buat akun</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.login}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                </View>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03A9F4',
        color: '#3E3E3E',
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    wrapper: {
        elevation: 4,
        height: 230,
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 30,
    },
    title: {
        flex: 1,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: '400',
    },
    register: {
        backgroundColor: '#7EB633',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 18,
        borderRadius: 30,
        elevation: 5,

    },
    login: {
        backgroundColor: '#74b9ff',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 18,
        borderRadius: 30,
        elevation: 5,

    },
    logout: {
        backgroundColor: '#F44336',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        marginTop: 20,
        fontWeight: '500',
        fontSize: 16,
        borderRadius: 30,
        elevation: 5
    },
    containerProfile: {
        flex: 1,
        backgroundColor: '#03A9F4',
        color: '#3E3E3E',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    profile: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 40,
    },
    name: {
        marginTop: 10,
        backgroundColor: '#EEEEEE',
        color: '#03A9F4',
        padding: 10,
        fontSize: 17,
        fontWeight: '600',
        borderColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        elevation: 3,
    },
    email: {
        backgroundColor: '#EEEEEE',
        color: '#03A9F4',
        padding: 10,
        fontSize: 17,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 3,
    }
});

const mapStateToProps = (state) => {
    return ({
        user: state.userReducer
    })
}

export default withNavigation(connect(mapStateToProps, { logoutAction })(Profile));
