import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from './components/stacks/AppStack'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <AppStack/>
        </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
