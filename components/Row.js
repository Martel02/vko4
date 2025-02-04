import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Row({item, selectedId, select, data, setData, toggleCompleted}) {
  const backgroundColor = item.id === selectedId ? "#f0f0f0" : "#fff";

  const remove = () => {
    const arrayWithoutRemoved = data.filter((item) => item.id !== selectedId);
    setData(arrayWithoutRemoved);
    select(null);
  }

  return (
    <Pressable style={[styles.row, {backgroundColor}]} onPress={() => toggleCompleted(item.id)}>
      <Text style={[styles.row, {textDecorationLine: item.completed ? 'line-through' : 'none'}]}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    fontSize: 16,
    padding: 4,
    margin: 4,
  },
  rowText: {
    fontSize: 16,
    padding: 4,
    margin: 4,
  },
});