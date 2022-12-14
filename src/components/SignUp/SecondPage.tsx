import {SignUpParamList} from '@/views/SignUp';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

function SecondPage() {
  const navigation = useNavigation<NavigationProp<SignUpParamList>>();
  const onPressBackStep = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>SecondPage</Text>
      <Pressable onPress={onPressBackStep}>
        <Text>뒤로가기</Text>
      </Pressable>
    </View>
  );
}

export default SecondPage;
