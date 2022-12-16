import {SignUpParamList} from '@/views/SignUp';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback, useRef, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import common from './common/style';

function FirstPage() {
  const navigation = useNavigation<NavigationProp<SignUpParamList>>();
  const [email, setEmail] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onPressNextStep = () => navigation.navigate('SecondPage');

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);

  return (
    <View style={common.container}>
      <View>
        <Text style={common.title}>로그인에 사용할</Text>
        <Text style={common.title}>이메일을 입력해주세요.</Text>

        <View>
          <TextInput
            style={common.input}
            onChangeText={onChangeEmail}
            placeholder="이메일을 입력해주세요"
            placeholderTextColor="#666"
            importantForAutofill="yes"
            autoComplete="email"
            textContentType="emailAddress"
            value={email}
            returnKeyType="next"
            clearButtonMode="while-editing"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>
      </View>

      <Pressable style={common.nextStepButton}>
        <Text style={common.nextStepButtonText} onPress={onPressNextStep}>
          다음 스텝으로
        </Text>
      </Pressable>
    </View>
  );
}

export default FirstPage;
