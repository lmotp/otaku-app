import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  innerContainer: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
  },
  iconWrap: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  progressBarBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18,
  },
  progressBar: {
    display: 'flex',
    flex: 1,
    height: 3,
    backgroundColor: '#ddd',
  },
  activeProgressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100,
    height: 3,
    backgroundColor: 'red',
  },

  titleWrap: {
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },

  nextStepButton: {
    width: Dimensions.get('window').width - 40,
    paddingVertical: 12,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  nextStepActiveButton: {
    backgroundColor: 'green',
  },
  nextStepButtonText: {
    textAlign: 'center',
    color: 'white',
  },

  inputWrapper: {
    marginBottom: 14,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    paddingLeft: 12,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    fontSize: 14,
  },
});
