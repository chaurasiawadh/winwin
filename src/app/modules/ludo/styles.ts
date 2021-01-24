import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    justifyContent: 'space-between',
  },
  nameBox: {
    backgroundColor: '#3CFFCD',
    padding: 6,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4,
    elevation: 1,
    flex: 1,
    marginRight: 8,
  },
  holdBox: {
    backgroundColor: 'seagreen',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  holdTxt: {color: '#fff', fontWeight: 'bold'},
  nameTxt: {fontWeight: 'bold', fontSize: 24, color: '#125B00'},
  playerScore: {fontSize: 40, fontWeight: 'bold', textAlign: 'center'},
  diceImg: {width: 100, height: 100, alignSelf: 'center'},
  finalScrore: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 16,
  },
});
