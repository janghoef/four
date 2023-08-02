import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {Categories3} from '../constant';
import {categories4} from '../constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  const pizza = () => {
    navigation.navigate('pizza');
  };
  const zinger = () => {
    navigation.navigate('zinger');
  };
  const deal = () => {
    navigation.navigate('deal');
  };
  const deal2 = () => {
    navigation.navigate('deal2');
  };

  return (
    <>
      <Text style={{alignSelf: 'center', fontSize: 20}}>PICK</Text>
      <ScrollView horizontal={true}>
        {Categories3.map(item => (
          <View
            key={item.key}
            style={{
              marginTop: 20,
              borderRadius: 30,
              height: 150,
              width: 210,
              backgroundColor: '#deb887',
              marginLeft: 10,
              alignSelf: 'center',
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 100, width: 100, alignSelf: 'center'}}
                source={item.image}
              />
              <Text style={{marginLeft: 10}}>{item.title}</Text>
              <Image
                style={{height: 20, width: 20, marginLeft: 10}}
                source={require('../assets/star.png')}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ScrollView style={{marginTop: 10}}>
        <TouchableOpacity onPress={pizza}>
          <Image
            style={{
              height: 300,
              width: 350,
              alignSelf: 'center',
              borderRadius: 20,
            }}
            source={require('../assets/2item.jpg')}
          />
          <Image
            style={{height: 20, width: 20, marginLeft: 10, marginTop: 10}}
            source={require('../assets/star.png')}
          />
          <Text style={{marginLeft: 32, marginTop: -17}}>
            4.2 $$ PIZZA with WINGS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={zinger}>
          <Image source={require('../assets/burger-removebg-preview.png')} />
          <Image
            style={{height: 20, width: 20, marginLeft: 10, marginTop: 10}}
            source={require('../assets/star.png')}
          />
          <Text style={{marginLeft: 32, marginTop: -17}}>
            4.6 $$$ One CHIKEN Burger and One BEEF Burger
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deal}>
          <Image source={require('../assets/deal-removebg-preview.png')} />
          <Image
            style={{height: 20, width: 20, marginLeft: 10, marginTop: 10}}
            source={require('../assets/star.png')}
          />
          <Text style={{marginLeft: 32, marginTop: -17}}>
            4.7 $$$ ONE ZINGER Medium FRIES and 1.5 Litre COCAOLA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={deal2}>
          <Image source={require('../assets/deal1-removebg-preview.png')} />
          <Image
            style={{height: 20, width: 20, marginLeft: 10, marginTop: 10}}
            source={require('../assets/star.png')}
          />
          <Text style={{marginLeft: 32, marginTop: -17}}>
            4.7 $$$$ FOUR ZINGER 1.5 Litre
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Order;
