import {SignUpParamList} from '@/views/SignUp';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

function FirstPage() {
  const navigation = useNavigation<NavigationProp<SignUpParamList>>();
  const onPressNextStep = () => navigation.navigate('SecondPage');

  return (
    <View>
      <Text>첫번째 Dpdld? d?d? 페이지</Text>
      <Pressable>
        <Text onPress={onPressNextStep}>다음 스텝으로</Text>
      </Pressable>
    </View>
  );
}

export default FirstPage;
