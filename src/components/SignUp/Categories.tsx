import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

function Categories({item}: any) {
  const {category, img, example, color} = item;
  return (
    <Pressable style={styles.categoryWrap}>
      <Text style={{color: color}}>{category}</Text>
      <Image source={img} />
      <View style={styles.exampleWrap}>
        {example.map((list: string, index: number) => {
          return (
            <Text style={styles.example} key={index}>
              {list}
            </Text>
          );
        })}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  categoryWrap: {
    width: '50%',
  },
  exampleWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default Categories;
