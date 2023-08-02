import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {categories} from '../constant';
const Touch = () => {
  return (
    <>
      <View>
        <Text style={{alignSelf: 'center'}}>FAST FOOD</Text>
      </View>
      <View style={{marginLeft: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {categories.map(item => (
            <View
              style={{
                backgroundColor: '#ffe4b5',
                height: 350,
                width: 320,
                margin: 10,
                marginTop: 10,
                borderRadius: 10,
              }}
              key={item.key}>
              <TouchableOpacity>
                <Text style={{alignSelf: 'center'}}>{item.title}</Text>
                <Image
                  style={{height: 300, width: 300, alignSelf: 'center'}}
                  source={item.image}
                />
                <Image
                  style={{height: 20, width: 20, marginLeft: 20, marginTop: 10}}
                  source={require('../assets/star.png')}
                />
                <Text style={{marginLeft: 50, marginTop: -15}}> 4.5s</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Touch;
