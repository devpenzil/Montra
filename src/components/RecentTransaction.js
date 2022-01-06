import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import tailwind from 'tailwind-rn';

const RecentTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    database()
      .ref(`/users/${auth().currentUser.uid}/alltransactions`)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        const some = Object.values(snapshot.val());
        setTransactions(some);
        console.log(some);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  return (
    <View style={tailwind('p-2')}>
      <Text style={tailwind('text-2xl font-semibold text-black my-2')}>
        Recent Transactions
      </Text>
      {transactions.length !== 0 ? (
        transactions.reverse().map((obj, i) => {
          return (
            <View key={i}>
              <View
                style={tailwind(
                  'flex flex-row justify-between items-center mb-2 p-2 rounded-lg bg-gray-50',
                )}>
                <View>
                  <Text style={tailwind('text-lg text-black')}>
                    {obj.heading}
                  </Text>
                  <Text style={tailwind('text-sm font-semibold text-black')}>
                    {obj.desc}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      obj.type === 'income'
                        ? tailwind('text-green-500')
                        : tailwind('text-red-500'),
                      tailwind('text-xl font-bold'),
                    ]}>
                    Rs.{obj.amount}
                  </Text>
                </View>
              </View>
            </View>
          );
        })
      ) : (
        <Text>No Transactions</Text>
      )}
    </View>
  );
};

export default RecentTransaction;
