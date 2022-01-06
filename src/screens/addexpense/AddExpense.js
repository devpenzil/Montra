import React from 'react';
import {View} from 'react-native';
import TopStatus from '../../components/TopStatus';
import BackBar from '../../components/BackBar';
import tailwind from 'tailwind-rn';
import ExpenseInput from '../../components/ExpenseInput';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
const AddExpense = () => {
  const navigation = useNavigation();
  const Newreference = database()
    .ref(`/users/${auth().currentUser.uid}/expenses`)
    .push();
  const SecondReference = database()
    .ref(`/users/${auth().currentUser.uid}/alltransactions`)
    .push();
  console.log(Newreference.key);
  const addata = e => {
    console.log(e.amount, e.heading, e.desc);
    Newreference.set({
      amount: e.amount,
      heading: e.heading,
      desc: e.desc,
    }).then(() => {
      SecondReference.set({
        amount: e.amount,
        heading: e.heading,
        desc: e.desc,
        type: 'expense',
      }).then(() => {
        navigation.navigate('home');
      });
    });
  };
  return (
    <>
      <TopStatus fullscreen={false} />
      <View style={tailwind('w-full h-full bg-white')}>
        <BackBar label={'Add Expense'} />
        <ExpenseInput
          finaldata={e => addata(e)}
          label={'Add Expense'}
          color={'bg-red-500'}
        />
      </View>
    </>
  );
};

export default AddExpense;
