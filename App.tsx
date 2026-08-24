import {StatusBar} from 'react-native';

import PresentationDeck from './src/navigation/PresentationDeck';

function App() {
  return (
    <>
      <StatusBar hidden />
      <PresentationDeck />
    </>
  );
}

export default App;
