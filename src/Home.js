import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import React from 'react';
import {categories, categories2} from '../constant/index';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  const order = () => {
    navigation.navigate('Order');
  };
  const touch = () => {
    navigation.navigate('touch');
  };
  const give = () => {
    navigation.navigate('give');
  };
  const Pizza = () => {
    navigation.navigate('choose');
  };

  return (
    <>
      <ScrollView>
        <Image
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            alignSelf: 'center',
          }}
          source={require('../assets/back.png')}
        />
        <Text
          style={{
            marginTop: -200,
            color: 'brown',
            fontSize: 40,
            fontWeight: '800',
            alignSelf: 'center',
            marginBottom: 20,
            textShadowColor: 'black',
            textShadowRadius: 10,
          }}>
          SHANGRILLA FOOD
        </Text>
        <TextInput
          style={{
            width: 300,
            borderRadius: 20,
            backgroundColor: '#deb887',
            alignSelf: 'center',
            textAlign: 'center',
          }}
          placeholder="Search Your FAVOURITE Food"
        />
        <Image
          style={{
            width: 20,
            height: 20,
            marginTop: -32,
            marginLeft: 270,
            alignContent: 'center',
          }}
          source={require('../assets/glass.png')}
        />
        <View
          style={{
            backgroundColor: '#fafad2',
            height: 550,
            width: 360,
            marginTop: 100,
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: -550,
          }}>
          Choose Your Favourite FOOD{' '}
        </Text>
        <View
          style={{
            width: 340,
            height: 1,
            backgroundColor: 'black',
            marginLeft: 10,
          }}></View>
        <Text style={{alignSelf: 'center'}}>FAST FOOD</Text>

        <View style={{width: 340, marginLeft: 10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map(item => (
              <View
                style={{
                  backgroundColor: '#ffe4b5',
                  height: 120,
                  width: 140,
                  margin: 10,
                  marginTop: 10,
                  borderRadius: 10,
                }}
                key={item.key}>
                <TouchableOpacity onPress={touch}>
                  <Text style={{alignSelf: 'center'}}>{item.title}</Text>
                  <Image
                    style={{height: 100, width: 100, alignSelf: 'center'}}
                    source={item.image}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={{alignSelf: 'center'}}>COFFEE</Text>
        <View
          style={{
            width: 340,
            height: 1,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>

        <View style={{flexDirection: 'row', marginLeft: 10, width: 340}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories2.map(item => (
              <View
                style={{
                  backgroundColor: '#cd853f',
                  height: 100,
                  width: 100,
                  margin: 5,
                  marginBottom: 5,
                  borderRadius: 35,
                }}
                key={item.key}>
                <TouchableOpacity onPress={give}>
                  <Text style={{alignSelf: 'center'}}> {item.id} </Text>
                  <Text style={{alignSelf: 'center'}}>{item.title}</Text>
                  <Image
                    style={{height: 50, width: 50, alignSelf: 'center'}}
                    source={item.image}
                  />
                </TouchableOpacity>
                <Text>{item.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            width: 340,
            height: 1,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>

        <View style={{marginLeft: 10, marginTop: 10, margin: 20}}>
          <FlatList
            numColumns={3}
            keyExtractor={item => item.id}
            data={categories2}
            renderItem={({item}) => (
              <>
                <TouchableOpacity onPress={Pizza}>
                  <View
                    style={{
                      backgroundColor: '#cd853f',
                      marginTop: 10,
                      width: 100,
                      height: 100,
                      marginLeft: 10,
                      borderWidth: 2,
                      borderRadius: 7,
                      borderColor: 'lightskyblue',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'red',
                        marginTop: 80,
                        marginLeft: 40,
                      }}>
                      <Text>{item.title}</Text>
                    </View>
                    <View style={{marginTop: -90}}>
                      <Image
                        style={{height: 80, width: 80}}
                        source={item.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
        <View style={{width: 300, alignSelf: 'center'}}>
          <Button title="Order" onPress={order} />
        </View>
      </ScrollView>
    </>
  );
};
export default Home;
