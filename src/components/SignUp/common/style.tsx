import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 10,

    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  nextStepButton: {
    paddingVertical: 10,
    width: Dimensions.get('window').width - 20,
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

  input: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});
