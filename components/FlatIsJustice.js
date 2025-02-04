import React, { use, useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Row from './Row';
import Add from './Add';

const STORAGE_KEY = '@items-key'

export default function ViewScrolling() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    //AsyncStorage.clear();
    getData();
  }, []);

  useEffect(() => {
    storeData(data);
  }, [data]);

  const add = useCallback((name) => {
    const newItem = { 
      id: uuid.v4(),
      name: name,
      completed: false
    }
    const tempData = [...data, newItem];
    setData(tempData);
  }, [data]);

  const toggleCompleted = useCallback((itemId) => {
    setData(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  }, [data]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      const json = JSON.parse(value);
      if (json === null) {
        json = [];
      }
      setData(json)
    } catch (ex) {
      console.log(ex);
    }
  }

  const storeData = async (value) => {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, json);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Flat is Justice</Text>
      <Add add={add} />
      <FlatList
        data = {data}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem = {({ item }) => (
          <Row item={item} 
            selectedId={selectedId}
            select={setSelectedId}
            data={data}
            setData={setData}
            toggleCompleted={toggleCompleted}
          />
        )}
      />
    </SafeAreaView>
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
