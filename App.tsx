import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppInner from './AppInner';
import InitialScreen from './src/screen/InitialScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="AppInner"
                component={AppInner}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="InitialScreen"
                component={InitialScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
