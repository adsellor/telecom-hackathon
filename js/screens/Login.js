import React, { Component, PropTypes } from 'react';
import { View } from  'react-native';
import Form from '../components/form';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {
	render() {
		return (
			<View>
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</View>
		);
	}
}