import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {categories2} from '../constant';
const Choose = () => {
  return (
    <>
      <View style={{backgroundColor: '#e0ffff'}}>
        <View
          style={{
            height: 200,
            width: 360,
          }}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>COFFEE</Text>
          <Image
            style={{
              height: 150,
              width: 150,
              alignSelf: 'center',
            }}
            source={require('../assets/t-removebg-preview.png')}
          />
        </View>
        <View style={{marginLeft: 10, marginTop: 10, margin: 20}}>
          <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            data={categories2}
            renderItem={({item}) => (
              <>
                <View
                  style={{
                    backgroundColor: 'lightskyblue',
                    marginTop: 10,
                    width: 150,
                    height: 150,
                    marginLeft: 10,
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: 'lightskyblue',
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: 100,
                      marginLeft: 1,
                    }}>
                    <Text>{item.title}</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={{marginTop: -100}}>
                      <Image
                        style={{height: 80, width: 80, alignSelf: 'center'}}
                        source={item.image}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          />
        </View>
      </View>
    </>
  );
};
export default Choose;