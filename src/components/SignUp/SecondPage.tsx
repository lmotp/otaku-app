import {categories} from '@/data/category';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Categories from './Categories';

function SecondPage() {
  return (
    <View style={styles.categoryWrap}>
      <FlatList
        data={categories}
        keyExtractor={(item: any) => item.category}
        renderItem={Categories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default SecondPage;
