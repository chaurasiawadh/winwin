import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, Vibration,} from 'react-native';
import { colors } from '../../shared/theme/colors';
import { styles } from './styles';
const dice_1 = require('../../../assets/dice_1.png');
const dice_2 = require('../../../assets/dice_2.png');
const dice_3 = require('../../../assets/dice_3.png');
const dice_4 = require('../../../assets/dice_4.png');
const dice_5 = require('../../../assets/dice_5.png');
const dice_6 = require('../../../assets/dice_6.png');
const dice_7 = require('../../../assets/gif/diceroll_4.gif');

const LudoMain = () => {
  const diceList = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6, dice_7];
  const [activePlayer, setActivePlayer] = useState('player1');
  const [randonDice, setRandonDice] = useState(0);
  const [playerFirstScore, setPlayerFirstScore] = useState(0);
  const [playerSecondScore, setPlayerSecondScore] = useState(0);

  const [playerFirstTotalScore, setPlayerFirstTotalScore] = useState(0);
  const [playerSecondTotalScore, setPlayerSecondTotalScore] = useState(0);

  const randamDiceHandler = (player: string) => {
    setRandonDice(6);
    setTimeout(() => {
      const randomNumber = Math.ceil(Math.random() * 6) - 1;
      !randomNumber && vibration();
      setRandonDice(randomNumber);

      switch (player) {
        case 'playerFirst':
          let previousScoreFirst = playerFirstScore;
          previousScoreFirst = previousScoreFirst + randomNumber;
          setActivePlayer(randomNumber ? 'player1' : 'player2');
          setPlayerFirstScore(randomNumber ? previousScoreFirst + 1 : 0);
          break;

        case 'playerSecond':
          let previousScoreSecond = playerSecondScore;
          previousScoreSecond = previousScoreSecond + randomNumber;
          setActivePlayer(randomNumber ? 'player2' : 'player1');
          setPlayerSecondScore(randomNumber ? previousScoreSecond + 1 : 0);
          break;

        default:
          alert('Oop! something wrong');
          break;
      }
    }, 500)
  };

  const holdPlayer = (player: string) => {
    vibration();
    setActivePlayer(player);
    switch (player) {
      case 'player2':
        let totalScore = playerFirstTotalScore;
        totalScore = totalScore + playerFirstScore;
        setPlayerFirstTotalScore(totalScore);
        setPlayerFirstScore(0);
        break;

      case 'player1':
        let totalScore2 = playerSecondTotalScore;
        totalScore2 = totalScore2 + playerSecondScore;
        setPlayerSecondTotalScore(totalScore2);
        setPlayerSecondScore(0);
        break;

      default:
        // alert('Oop! something wrong');
        break;
    }
  };

  const resetData = () => {
    setRandonDice(0);
    setPlayerFirstScore(0);
    setPlayerSecondScore(0);
    setPlayerFirstTotalScore(0);
    setPlayerSecondTotalScore(0);
  }

  useEffect(() => {
    if (playerFirstTotalScore >= 50) {
      alert('DC wins');
      resetData();
    };
    if (playerSecondTotalScore >= 50) {
      alert('Marvel wins');
      resetData();
    };
  }, [playerFirstTotalScore, playerSecondTotalScore]);

  const vibration = () => {
    Vibration.vibrate(50);
  }

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.primary_dark} barStyle="light-content" />
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={[styles.nameBox, styles.rotate, activePlayer === 'player2' && { backgroundColor: '#D0D0D0' },]}
            disabled={true}>
            <Text style={styles.nameTxt} numberOfLines={1}>DC</Text>
          </TouchableOpacity>

          <View style={styles.rollViewBox}>
            <TouchableOpacity
              style={[ styles.rollBox,, styles.rotate,
              activePlayer === 'player2' && { backgroundColor: '#D0D0D0' }]}
              disabled={activePlayer === 'player2'}
              onPress={() => randamDiceHandler('playerFirst')}>
              <Text style={styles.rollTxt}>Roll Dice</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.holdBox, styles.rotate,
              activePlayer === 'player2' && { backgroundColor: '#D0D0D0' }]}
              disabled={activePlayer === 'player2'}
              onPress={() => holdPlayer('player2')}>
              <Text style={styles.holdTxt}>Hold</Text>
            </TouchableOpacity>

          </View>
        </View>
        
        <View>
          <Text style={[styles.finalScrore,, styles.rotate]}>
            {playerFirstTotalScore}
          </Text>
          <Text style={[styles.playerScore, styles.rotate]}>
            {playerFirstScore}
          </Text>
        </View>

        <Image style={styles.diceImg} source={diceList[randonDice]} />


        <View>
          <Text style={styles.playerScore}>
            {playerSecondScore}
          </Text>
          <Text
            style={styles.finalScrore}>
            {playerSecondTotalScore}
          </Text>
        </View>

        <View>
        <View  style={[styles.rollViewBox,{marginBottom:8}]}>
            <TouchableOpacity
              style={[ styles.rollBox,
                activePlayer === 'player1' && { backgroundColor: '#D0D0D0' }]}
              disabled={activePlayer === 'player1'}
              onPress={() => randamDiceHandler('playerSecond')}>
              <Text style={styles.rollTxt}>Roll Dice</Text>
            </TouchableOpacity>

          <TouchableOpacity
            style={[styles.holdBox,
            activePlayer === 'player1' && { backgroundColor: '#D0D0D0' }]}
            disabled={activePlayer === 'player1'}
            onPress={() => holdPlayer('player1')}>
            <Text style={styles.holdTxt}>Hold</Text>
          </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            disabled={true}
            style={[styles.nameBox,activePlayer === 'player1' && { backgroundColor: '#D0D0D0' },]}>
            <Text style={styles.nameTxt} numberOfLines={1}>Marvel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={resetData}
        style={{
          alignSelf: 'flex-end', padding: 6,
        }}>
        <Text style={{ color: '#FF794E', fontWeight: 'bold' }}>Reset</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default LudoMain;
