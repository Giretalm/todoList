import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 },
});

export default function App() {
  let data = [
   { 
      key: "1", 
      title: "Title1"
   },
    { key: "2", 
      title: "Title2"
   },
  ];

  let renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
 );
}