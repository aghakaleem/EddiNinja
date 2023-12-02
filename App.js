import React from 'react';
import { View, Text } from 'react-native';
import GameScreen from "./src/components/GameScreen";

// Import necessary components or screens
// For example:
// import GameScreen from './GameScreen';

const App = () => {
    // You can define navigation or main structure here
    return (
        <View>
            {/* You can render your main screen/component here */}
            { <GameScreen /> }
        </View>
    );
};

export default App;
