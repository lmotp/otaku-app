import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Pressable, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstPage from '@/components/SignUp/FirstPage';
import SecondPage from '@/components/SignUp/SecondPage';

export type SignUpParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
};

type SignUpScreenProps = MaterialTopTabBarProps;

function SignUp({navigation}: SignUpScreenProps) {
  const Tabs = createMaterialTopTabNavigator();

  const onPressToSurvey = () => {
    navigation.navigate('FirstPage');
  };

  return (
    <View>
      <Text>SignUp</Text>
      <Pressable onPress={onPressToSurvey}>
        <Text>1번 페이지로 이동</Text>
      </Pressable>

      <Tabs.Navigator>
        <Tabs.Screen name="FirstPage" component={FirstPage} />
        <Tabs.Screen name="SecondPage" component={SecondPage} />
      </Tabs.Navigator>
    </View>
  );
}

export default SignUp;
