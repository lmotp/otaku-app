import {RootStackParamList} from '@/../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions, Pressable} from 'react-native';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInScreenProps) {
  const onPressToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.wrap}>
      <Image
        style={styles.backgroundImg}
        source={require('@/assets/main_img.jpeg')}
      />
      <View style={styles.overlay} />

      <Image style={styles.logo} source={require('@assets/logo.png')} />

      <View>
        <View style={styles.snsButtonWrap}>
          <Pressable
            style={StyleSheet.compose(styles.snsButtonStyle, styles.kakao)}>
            <Icon name="chat" size={18} color={'#000000'} />
            <Text
              style={StyleSheet.compose(
                styles.snsButtonText,
                styles.kakaoText,
              )}>
              카카오톡으로 로그인하기
            </Text>
          </Pressable>
          <Pressable
            style={StyleSheet.compose(styles.snsButtonStyle, styles.twitter)}>
            <Icon name="twitter" size={18} color={'#ffffff'} />
            <Text style={styles.snsButtonText}>트위터로 로그인하기</Text>
          </Pressable>
        </View>

        <View style={styles.loginWrap}>
          <Text style={styles.loginText}>계정이 없으신가요?</Text>
          <Pressable onPress={onPressToSignUp}>
            <Text style={styles.loginTextBold}>가입하기</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 80,
    paddingTop: 160,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  backgroundImg: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },

  snsButtonWrap: {
    marginBottom: 10,
  },
  snsButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'tranparent',
  },
  kakao: {backgroundColor: '#fae100'},
  twitter: {backgroundColor: '#1da1fe'},
  snsButtonText: {
    marginLeft: 6,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  kakaoText: {color: '#000000'},

  loginWrap: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 3,
  },
  loginText: {
    fontSize: 11,
    color: '#ffffff',
    marginRight: 6,
  },
  loginTextBold: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default SignIn;
