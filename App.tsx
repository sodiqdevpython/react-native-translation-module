import { View, Text, Button, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './i18n'
import i18next from 'i18next';


export default function App() {

  const { t } = useTranslation()

  function changeLangEn() {
    i18next.changeLanguage('en')
    AsyncStorage.setItem('language', 'en')
  }

  function changeLangRu() {
    i18next.changeLanguage('ru')
    AsyncStorage.setItem('language', 'ru')
  }

  function changeLangUz() {
    i18next.changeLanguage('uz')
    AsyncStorage.setItem('language', 'uz')
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={{ fontSize: 20 }}>{t('welcome')}</Text>
      <Button title='English' onPress={changeLangEn} />
      <Button title='Русский' onPress={changeLangRu} />
      <Button title="O'zbek tili" onPress={changeLangUz} />
    </View>
  )
}