import {StyleSheet} from 'react-native';
import {colors} from '../../shared/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    justifyContent: 'space-between',
  },
  nameBox: {
    backgroundColor: colors.primary_dark,
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4,
    elevation: 1,
  },
  holdBox: {
    backgroundColor: 'seagreen',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 4,
    width: '48%',
  },
  holdTxt: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nameTxt: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  playerScore: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  diceImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  finalScrore: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 16,
  },
  rollViewBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rollBox: {
    backgroundColor: '#00E6C7',
    width: '48%',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 1,
  },
  rollTxt: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rotate: {
    transform: [{rotate: '180deg'}],
  },
});
