import {Dimensions, Pressable} from 'react-native';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SignIn() {
  return (
    <View style={styles.wrap}>
      <Image
        style={styles.backgroundImg}
        source={require('@/assets/main_img.jpeg')}
      />
      <View style={styles.overlay} />

      <Pressable style={styles.kakaoButtonStyle}>
        <Icon name="chat" size={18} color={'#000000'} />
        <Text style={styles.kakaoButtonText}>카카오톡으로 로그인하기</Text>
      </Pressable>

      <View style={styles.loginWrap}>
        <Text style={styles.loginText}>계정이 없으신가요?</Text>
        <Pressable>
          <Text style={styles.loginTextBold}>가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  backgroundImg: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  kakaoButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fae100',
  },
  kakaoButtonText: {
    marginLeft: 6,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
  },

  loginWrap: {
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
