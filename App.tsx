import Home from '@/app/screens/home/index';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}
