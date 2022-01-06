import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CommonButton from './CommonButton';
import CommonInput from './CommonInput';
import tailwind from 'tailwind-rn';

const ExpenseInput = ({finaldata, label, color}) => {
  const [amount, setAmount] = useState();
  const [heading, setHeading] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <>
      <View style={tailwind(' mx-2 mt-8 rounded-md h-full ')}>
        <CommonInput
          placeholder={'amount'}
          triggerchange={e => setAmount(e)}
          numberinput={true}
        />
        <CommonInput
          placeholder={'Heading'}
          triggerchange={e => setHeading(e)}
        />
        <CommonInput
          placeholder={'Description'}
          triggerchange={e => setDesc(e)}
        />
        <CommonButton
          label={label}
          textcolor={'text-white'}
          style={color}
          trigger={() => {
            setLoading(true);
            finaldata({
              amount,
              heading,
              desc,
            });
          }}
          loading={loading}
        />
      </View>
    </>
  );
};

export default ExpenseInput;
