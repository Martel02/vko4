import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

export default function ViewScrolling() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const testArray = Array();
    for (let i = 0; i <= 30; i++) {
      testArray.push({ id: i, name: 'Test ' + i, image: 'https://cdn.discordapp.com/attachments/785418203756757002/1333438393417334804/IMG_20250127_135806.jpg?ex=679c3087&is=679adf07&hm=f8ac335922fa2e0401dc2b445c4b0293293cfc38336b4b0f1df3cf55a6132acb&' });
    }
    setPersons(testArray);
  }, []);

  return (
    <View>
      <ScrollView>
      {
        persons.map((item) => (
          <View style={styles.rowContainer} key={item.id}>
            <Image 
              source={{ 
              uri: item.image,
              width: 32,
              height: 32, 
              }} 
            />
            <Text style={styles.rowText}>{item.name}</Text>
          </View>
        ))
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  image: {
    marginRight: 16
  },
  rowText: {
    fontSize: 16,
    marginLeft: 5,
    padding: 1
  }
});


