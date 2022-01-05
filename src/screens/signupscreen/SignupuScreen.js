import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import tailwind from 'tailwind-rn';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BackBar from '../../components/BackBar';
import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput';
import TopStatus from '../../components/TopStatus';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
const SignupuScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uname, setUname] = useState('');
  const [loading, setLoading] = useState(false);
  const signup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(Response => {
        console.log(Response);
        auth().currentUser.updateProfile({
          displayName: uname,
        });
        ToastAndroid.show('User Created', ToastAndroid.SHORT);
        setLoading(false);
      })
      .catch(Error => {
        ToastAndroid.show(Error.message, ToastAndroid.SHORT);
        setLoading(false);
      });
  };
  const checking = () => {
    if (email === '' || password === '' || uname === '') {
      ToastAndroid.show('All fields are mandatory', ToastAndroid.SHORT);
      setLoading(false);
    } else {
      setLoading(true);
      signup();
    }
  };
  return (
    <>
      <TopStatus />
      <View style={tailwind('w-full h-full bg-white')}>
        <BackBar label={'Signup'} />
        <View style={tailwind('p-2 mt-8')}>
          <CommonInput placeholder={'Name'} triggerchange={e => setUname(e)} />
          <CommonInput placeholder={'Email'} triggerchange={e => setEmail(e)} />
          <CommonInput
            placeholder={'Password'}
            password={true}
            triggerchange={e => setPassword(e)}
          />
          <View style={tailwind('mx-2 my-2 flex flex-row')}>
            <BouncyCheckbox fillColor="#5e35b1" />
            <Text style={tailwind('text-xs w-3/4 text-black ')}>
              By signing up, you agree to the Terms of Service and Privacy
              Policy
            </Text>
          </View>
          <CommonButton
            label={'Sign up'}
            style={'bg-purple-600'}
            textcolor={'text-white'}
            trigger={checking}
            loading={loading}
          />
        </View>
        <Text style={tailwind('text-center mt-4 text-black')}>
          Already have an account yet?{' '}
          <Text
            style={tailwind(
              'text-center mt-2 text-black underline text-purple-600 font-bold',
            )}>
            Sign In
          </Text>
        </Text>
      </View>
    </>
  );
};

export default SignupuScreen;
