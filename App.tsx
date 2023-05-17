/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Platform } from 'react-native';
import WebView from 'react-native-webview';




function App(): JSX.Element {

  return (
<WebView
        source={{ uri: 'https://www.iliad.it/account/' }}
        style={{ flex: 1, marginTop: Platform.OS === 'android' ? 0 : 35}}
      />
  );
}


export default App;
