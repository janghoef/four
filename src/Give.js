import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {categories2} from '../constant';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Give = () => {
  return (
    <>
      <View>
        <Text style={{alignSelf: 'center', fontSize: 25}}>COFFEES</Text>
      </View>
      <ScrollView>
        {categories2.map(item => (
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#cd853f',
              height: 200,
              width: 300,
              margin: 5,
              marginBottom: 5,
              borderRadius: 35,
            }}
            key={item.key}>
            <TouchableOpacity>
              <Text style={{alignSelf: 'center', fontSize: 20}}>
                {item.title}
              </Text>
              <Image
                style={{height: 120, width: 120, alignSelf: 'center'}}
                source={item.image}
              />
            </TouchableOpacity>
            <Image
              style={{height: 20, width: 20, marginLeft: 20, marginTop: 10}}
              source={require('../assets/star.png')}
            />
            <Text style={{marginLeft: 50, marginTop: -15}}> 4.2</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Give;
