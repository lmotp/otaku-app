import FirstPage from '@/components/SignUp/FirstPage';
import SecondPage from '@/components/SignUp/SecondPage';
import {useCallback, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import common from '../components/SignUp/common/style';
import Icon from 'react-native-vector-icons/AntDesign';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/../App';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function SignUp({navigation}: SignInScreenProps) {
  const [count, setCount] = useState(0);

  const onPressNextStep = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const onPressBackStep = useCallback(() => {
    if (count === 0) {
      return navigation.goBack();
    }

    setCount(prev => prev - 1);
  }, [count, navigation]);

  return (
    <>
      <View style={common.container}>
        <View style={common.innerContainer}>
          <Pressable style={common.iconWrap} onPress={onPressBackStep}>
            <Icon name="arrowleft" size={24} color={'#000000'} />
          </Pressable>
          <View style={common.progressBarBox}>
            <View style={common.progressBar} />
            <View style={common.activeProgressBar} />
          </View>
          {count === 0 ? <FirstPage /> : <SecondPage />}
        </View>

        <Pressable style={common.nextStepButton} onPress={onPressNextStep}>
          <Text style={common.nextStepButtonText}>다음</Text>
        </Pressable>
      </View>
    </>
  );
}

export default SignUp;
