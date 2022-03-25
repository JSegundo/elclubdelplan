import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import eventos from '../utils/fakeData';

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

const HomeScreen = () => {
  const renderItem = item => {
    const {nombre, Categoría, image, Ubicación, destacado} = item;

    if (destacado === true) {
      return (
        <View style={styles.itemWrapper}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <Text style={styles.nombreEvento}>{nombre}</Text>
          <Text style={styles.text}>{Categoría}</Text>
          <Text style={styles.text}>{Ubicación}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.pageWrapper}>
      <ScrollView>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>El Club del Plan</Text>

          <Text style={styles.subtitle}>Eventos destacados</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventos}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>Música</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventos}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>Cine</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventos}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>Bares</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventos}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    marginBottom: 60,
  },
  itemWrapper: {
    width: 203,
    height: 320,
    marginHorizontal: 15,
    // padding: 2,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    margin: 10,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 18,
    fontSize: 30,
    padding: 1,
  },
  subtitle: {
    color: '#000000',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 18,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    margin: 1,
    marginLeft: 5,
  },
  nombreEvento: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 5,
    marginLeft: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
});

export default HomeScreen;
