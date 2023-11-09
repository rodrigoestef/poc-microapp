// eslint-disable-next-line import/no-extraneous-dependencies
import { Federated } from '@callstack/repack/client';
import React from 'react';
import { Text } from 'react-native';

const Login = React.lazy(() => Federated.importModule('login', './App'));
// const Application = React.lazy(() => Federated.importModule('run', './App'));

export default function App() {
  return (
      <React.Suspense fallback={<Text>Loading login...</Text>}>
        <Login />
      </React.Suspense>
  );
}
