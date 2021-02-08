import React, { useRef, useState } from 'react'
import { StyleSheet, View, Alert, Modal, TextInput, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { colors } from '../theme/colors';

interface IProps {
  onModalValidFormData: Function;
}

const GetPlayerModal = (props: IProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({} as any);

  const updateDormData = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const scrollRef = useRef() as any;
  const onPressTouch = () => {
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
  }

  // console.warn('formData.maxCount', formData.maxCount);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef} >
          <Image style={{ width: 200, height: 200, marginBottom: 20, alignSelf: 'center' }} source={require('../../../assets/logo.png')} />
          <TextInput
            style={styles.textField}
            autoCompleteType="off"
            placeholder="First player name"
            autoCapitalize="words"
            onChangeText={e => updateDormData('firstPlayerName', e)}
          />

          <TextInput
            style={styles.textField}
            autoCompleteType="off"
            autoCapitalize="words"
            placeholder="Second player name"
            onChangeText={e => updateDormData('secondPlayerName', e)}
          />

          <TextInput
            style={styles.textField}
            autoCompleteType="off"
            placeholder="Max count (min:30 - max:999)"
            keyboardType="numeric"
            maxLength={3}
            onFocus={onPressTouch}
            // onChangeText={e => updateDormData('maxCount', e)}
            onChangeText={(e: any) => {
              const checkValidNo = /^[0-9\b]+$/;
              if (e) {
                updateDormData('maxCount', checkValidNo.test(e) ? e : '');
              } else {
                updateDormData('maxCount', '');
              }
            }}
            value={formData.maxCount}
          />

          <TouchableOpacity style={[styles.playBtn]}
            onPress={() => {
              setIsVisible(false);
              props.onModalValidFormData(formData)
            }}
            disabled={formData && Object.keys(formData).length === 3
              // &&
              // formData.firstPlayerName.length > 0 &&
              // formData.secondPlayerName.length > 0 &&
              // formData.maxCount > 0
              ? false : true}
            activeOpacity={0.6}
          >
            <Text style={styles.playTxt}>Play With Friend</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  )
}
export default GetPlayerModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFFCFB', display: 'flex', flex: 1,
    margin: 20, borderRadius: 10,
    padding: 16,
    justifyContent: 'center'
  },
  textField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 16,
    paddingLeft: 8
  },
  playBtn: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 4,
    marginTop: 16,
    borderWidth: 2,
    borderColor: colors.primary_dark
  },
  playTxt: {
    color: 'green', fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
})
