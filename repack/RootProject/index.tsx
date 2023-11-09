import { AppRegistry, Platform } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScriptManager, Script, Federated } from '@callstack/repack/client';
import { name as appName } from './app.json';
import App from './App';

const LOCALHOST = Platform.select({ default: 'localhost', android: '10.0.2.2' })

const resolveURL = Federated.createURLResolver({
  containers: {
    login: `http://${LOCALHOST}:8082/[name][ext]`,
    run: `http://${LOCALHOST}:9090/[name][ext]`,
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    console.log(caller)
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }
  console.log('caller')
  console.log(caller)
  console.log('url')
  console.log(url)

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
