import FirstPage from '@/components/SignUp/FirstPage';
import SecondPage from '@/components/SignUp/SecondPage';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

export type SignUpParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
};

const Stack = createStackNavigator<SignUpParamList>();

function SignUp() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}>
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
}

export default SignUp;
