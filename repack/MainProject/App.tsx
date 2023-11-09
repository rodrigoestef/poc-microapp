/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Text,
} from 'react-native';
import logout from 'login/logout'


const App = () => {


  return (
    <>
      <Text>App page</Text>
      <Button title='logout' onPress={() => {
        logout()
      }} />
    </>
  );
};


export default App;
