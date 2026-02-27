import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

void SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    EuropaRegular: require('@/assets/fonts/EuropaRegular.ttf'),
    EuropaLight: require('@/assets/fonts/EuropaLight.ttf'),
    EuropaBold: require('@/assets/fonts/EuropaBold.ttf'),
    OrpheusProRegular: require('@/assets/fonts/OrpheusPro-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
