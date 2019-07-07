// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form, Label } from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "./Login";
import { connect } from 'react-redux';

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;



class LoginForm extends React.Component{


  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item
        style={{
            borderColor: '#2aaa4d',
            borderBottomWidth: 2,
            width: '90%'
          }} 
        error={error && touched}
        floatingLabel
        >
        <Label style={{ fontSize: 13, color: 'gray' }} >{label}</Label>
        <Input
          autoFocus
          ref={c => (this.textInput = c)}
          {...input}
        />
      </Item>
    );
  }

  login() {
    if (this.props.valid) {
      this.props.navigation.navigate("Home");
    } else {
      Toast.show({
        text: "Enter Valid Username & password!",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const { lang } = this.props

    const form = (
      <Form>
        <Field
          name="phone"
          label={lang.phone_or_email}
          component={this.renderInput}
          validate={[minLength8, required]}
        />
      </Form>
    );
    return (
      <Login
        {...this.props}
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}
const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);

const mapStateToProps = state => ({
  lang: state.lang
})

export default connect(mapStateToProps)(LoginContainer);
