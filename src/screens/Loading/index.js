import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import { url, headers } from '../../config';
import { connect } from 'react-redux';
import { userAction } from '../../actions'

class Profile extends Component {
    state = {
        login: false,
        name: '',
        email: '',
        photo: ''
    }

    componentDidMount() {
        this.fetchProfile()
    }

    fetchProfile = async () => {
        try {
            const token = await  AsyncStorage.getItem('token');
            if(token !== null) {
                axios.get(url + "/api/user/", headers(token))
                    .then(res => {
                        console.log(res);
                        this.props.userAction(token, res.data, true);
                        this.props.navigation.navigate('Category')
                    })
                    .catch(err => {
                        console.log(err);
                        this.props.navigation.navigate('Category')                        
                    })
            } else {
                this.props.navigation.navigate('Category')                        
            }
        } catch {
            this.props.navigation.navigate('Category')                        
        }
    }



    render() {

        return (
            <View style={styles.container}>
                <View style={styles.categories}>
                    <Text style={styles.title}>Buat profil untuk mengumpulkan poin</Text>
                    <Text style={styles.login}>Loading....</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        color: '#3E3E3E',
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    categories: {
        height: 230,
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 20,
    },
    title: {
        flex: 1,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: '400',
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
    }
});

const mapStateToProps = (state) => {
    return ({
        user: state.userReducer
    })
}

export default connect(mapStateToProps, {userAction})(Profile);