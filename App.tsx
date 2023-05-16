/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import WebView from 'react-native-webview';




function App(): JSX.Element {

  return (
<WebView
        source={{ uri: 'https://www.iliad.it/account/' }}
        style={{ flex: 1, marginTop:35}}
      />
  );
}


export default App;
