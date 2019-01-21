import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { url, headers } from '../../config';
import { connect } from 'react-redux';

class Question extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.item.name,
      headerStyle: {
        backgroundColor: '#74b9ff',
      },
      headerTintColor: '#fff',
    }
  }

  state = {
    questions: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null
  }

  componentDidMount() {
    this.fethQuestions()
  }

  fethQuestions = () => {
    const categoryId = this.props.navigation.state.params.item._id
    axios.get(url + "/api/quiz/category/" + categoryId)
      .then(res => {
        this.setState({ questions: res.data, loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  chooseAnswer(answer) {
    this.setState({ selected: answer })
  }

  checkAnswer = (answer) => {
    if (this.state.selected) {
      if (answer === this.state.selected) {
        const { data, login, token } = this.props.user
        if(login) {
          axios.get(url + "/api/user/answer/true", headers(token) )
        }

        this.setState({
          check: true,
          answer: true
        })
      } else {
        const { data, login, token } = this.props.user
        if(login) {
          axios.get(url + "/api/user/answer/false", headers(token) )
        }

        this.setState({
          check: true,
          answer: false
        })
      }
    }
  }

  nextQuestion = () => {
    const { questions, index } = this.state

    if (questions.length === index + 1) {
      console.log("soal habis");
    } else {
      this.setState({
        index: index + 1,
        check: false,
        answer: null,
        selected: ''
      })
    }
  }


  render() {
    const { questions, loading, index, answer, check, selected } = this.state
    return (
      <View style={styles.container}>
        {
          loading ?
            <View>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View style={styles.wrapper}>
              <View>
                {
                  questions.length === 0 ? <Text style={styles.welcome}>Kosong</Text> :
                    <View>

                      <View>
                        <Text style={styles.title}>Pertanyaan</Text>
                        <Text style={styles.question}>{questions[index].question}</Text>
                      </View>

                      <View>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].a)}>
                          <Text style={selected === questions[index].a ? styles.select : styles.selection}> A. {questions[index].a} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].b)}>
                          <Text style={selected === questions[index].b ? styles.select : styles.selection}> B. {questions[index].b} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].c)}>
                          <Text style={selected === questions[index].c ? styles.select : styles.selection}> C. {questions[index].c} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].d)}>
                          <Text style={selected === questions[index].d ? styles.select : styles.selection}> D. {questions[index].d} </Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                }
              </View>
              {
                check ?
                  <View>
                    {
                      answer ?
                        <View style={styles.bottom}>
                          <TouchableOpacity onPress={() => this.checkAnswer(questions[index].answer)}>
                            <Text style={styles.true}>Kamu benar</Text>
                            <Text style={styles.true}>+10 poin</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.nextQuestion}>
                            <Text style={styles.check}>Lanjut</Text>
                          </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.bottom}>
                          <TouchableOpacity>
                            <Text style={styles.false}>Kamu salah</Text>
                            <Text style={styles.false}>-10 poin</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.nextQuestion}>
                            <Text style={styles.nextFalse}>Lanjut</Text>
                          </TouchableOpacity>
                        </View>
                    }
                  </View>
                  :
                  <View style={styles.bottom}>
                    {
                      selected ?
                        <TouchableOpacity onPress={() => this.checkAnswer(questions[index].answer)}>
                          <Text style={styles.check}>Periksa</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={styles.selected}>Periksa</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={this.nextQuestion}>
                      <Text style={styles.next}>Lewati</Text>
                    </TouchableOpacity>
                  </View>
              }
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: '#3E3E3E',
    padding: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3498db'
  },
  question: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: '400',
    color: '#3E3E3E'
  },
  selection: {
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '400',
    color: '#3E3E3E'
  },
  select: {
    color: '#3498db',
    borderColor: '#3498db',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500',
  },
  check: {
    color: 'white',
    backgroundColor: '#3498db',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  next: {
    color: 'white',
    backgroundColor: '#67ac00',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  nextFalse: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  selected: {
    color: 'white',
    backgroundColor: 'lightgray',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  true : {
    fontSize: 18,
    fontWeight: '500',
    color: '#3498db',
  },
  false : {
    fontSize: 18,
    fontWeight: '500',
    color: 'red',
  }
});

const mapStateToProps = (state) => {
  return({
      user: state.userReducer
  })
}

export default connect(mapStateToProps)(Question);