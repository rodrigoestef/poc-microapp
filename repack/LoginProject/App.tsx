/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Text,
} from 'react-native';


import { Federated } from '@callstack/repack/client';
import { LoginHook } from './src/hooks/LoginHook';
import { LoginViewModel } from './src/ViewModel/LoginViewModel';
const Application = React.lazy(() => Federated.importModule('run', './App'));

const App = () => {

  const { logged } = LoginHook()


  return (
    <>
      {logged ? (

        <React.Suspense fallback={<Text>Loading app...</Text>}>
          <Application />
        </React.Suspense>
      ) : (
        <>
          <Text>Login page</Text>
          <Button title='login' onPress={() => {
            LoginViewModel.getInstance().setLogged(true)
          }} />
        </>
      )
      }
    </ >
  );
};


export default App;
