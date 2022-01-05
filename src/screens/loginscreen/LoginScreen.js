import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import tailwind from 'tailwind-rn';
import BackBar from '../../components/BackBar';
import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput';
import TopStatus from '../../components/TopStatus';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(Response => {
        navigation.navigate('home');
        setLoading(false);
      })
      .catch(Error => {
        ToastAndroid.show(Error.message, ToastAndroid.SHORT);
        setLoading(false);
      });
  };
  const checking = () => {
    if (email === '' || password === '') {
      ToastAndroid.show('All fields are mandatory', ToastAndroid.SHORT);
    } else {
      setLoading(true);
      login();
    }
  };
  useEffect(() => {
    auth().currentUser !== null && navigation.navigate('home');
    console.log(auth().currentUser);
  });
  return (
    <>
      <TopStatus fullscreen={false} />
      <View style={tailwind('w-full h-full bg-white')}>
        <BackBar label={'Login'} />
        <View style={tailwind('p-2 mt-8')}>
          <CommonInput placeholder={'Email'} triggerchange={e => setEmail(e)} />
          <CommonInput
            placeholder={'Password'}
            password={true}
            triggerchange={e => setPassword(e)}
          />
          <CommonButton
            label={'login'}
            style={'bg-purple-600'}
            textcolor={'text-white'}
            trigger={checking}
            loading={loading}
          />
        </View>
        <TouchableOpacity>
          <Text
            style={tailwind(
              'text-center text-xl font-bold text-base text-purple-600 mt-3 ',
            )}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <Text style={tailwind('text-center mt-4 text-black')}>
          Don’t have an account yet?{' '}
          <Text
            style={tailwind(
              'text-center mt-2 text-black underline text-purple-600 font-bold',
            )}>
            Sign Up
          </Text>
        </Text>
      </View>
    </>
  );
};

export default LoginScreen;
