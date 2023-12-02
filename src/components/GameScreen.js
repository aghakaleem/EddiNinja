import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Animated, Easing, ImageBackground} from 'react-native';

 //Import other necessary components, functions, and data
 import Item from './Item';

 import UIComponents from './UIComponents';
 import Scoring from './Scoring';
 import GameOver from './GameOver';
 import foodItems from './foodItems';
 import gameProgression from "./gameProgression";
 import gameStyles from './gameStyles';
 import backgroundImage from '../assets/images/eddii_ninja_background.png';

const GameScreen = () => {
    // State and variables
    const [score, setScore] = useState(0);
    const [missedItems, setMissedItems] = useState(0);
    // Other state variables for game elements, timers, etc.
    const [itemsOnScreen, setItemsOnScreen] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentInterval, setCurrentInterval] = useState(0);

    // useEffect to handle game logic
    useEffect(() => {
        let interval;
        let currentInterval = 0;
        let currentIndex = 0;

        const startFallingItems = () => {
            interval = setInterval(() => {
                if (currentIndex < gameProgression.length && !gameOver) {
                    const currentProgression = gameProgression[currentIndex];
                    if (
                        currentTime >= currentProgression.timeInterval &&
                        (currentIndex + 1 >= gameProgression.length || currentTime < gameProgression[currentIndex + 1].timeInterval)
                    ) {
                        const items = [];
                        for (let i = 0; i < currentProgression.numberOfItems; i++) {
                            // Replace 'itemData.item1' with the specific item data you want to render
                            items.push(

                                     //render random item from foodItems and append id and position to it
                                {
                                    ...foodItems[Math.floor(Math.random() * foodItems.length)],
                                        id: `${currentTime}_${i}`,
                                        position: new Animated.Value(-100),
                                }


                            );
                        }
                        setItemsOnScreen(items);
                        animateItems(items, handleMiss);
                    } else {
                        currentIndex++;
                    }
                    setCurrentInterval(currentInterval);
                } else {
                    clearInterval(interval);
                    // Game over logic or max speed reached
                    setGameOver(true);
                }
                setCurrentTime(currentTime + 1);
            }, 1000); // Adjust interval timing
        };


        startFallingItems();


        return () => {
            clearInterval(interval);
        }
    }, [gameOver]);

    // Functions to handle game actions (slicing, pause, etc.)
    const handleSlice = (item) => {
            // Logic to handle slicing an item
            // Update score and remove the sliced item from the screen
            const itemIndex = itemsOnScreen.findIndex((i) => i === item);
            if (itemIndex !== -1) {
                const updatedItems = [...itemsOnScreen];
                updatedItems.splice(itemIndex, 1);
                setItemsOnScreen(updatedItems);
                setScore(score + Scoring.calculateScore(item));
            }
    };

    const handleMiss = (item) => {
        // Logic to handle a missed item (falling off the screen)
        // Update missed items count and possibly deduct points
        setMissedItems(prevMissedItems => prevMissedItems + 1);
        if(Scoring.isGameOver(score, missedItems)){
            setGameOver(true);
        }
        removeItem(item);
    };

    const removeItem = (item) => {
        setItemsOnScreen(prevItems => prevItems.filter(prevItem => prevItem.id !== item.id));
    };


    const animateItems = (items, handleMiss) => {
        items.forEach(item => {
            const position = new Animated.Value(0); // Initial position at the bottom

            // Define the duration for the upward and downward movements
            const upDuration = 1000;
            const downDuration = 3000;

            Animated.sequence([
                Animated.timing(position, {
                    toValue: 1, // Move to the top
                    duration: upDuration,
                    easing: Easing.out(Easing.cubic), // Easing out to simulate slowing down
                    useNativeDriver: true,
                }),
                Animated.timing(position, {
                    toValue: 2, // Move back to the bottom
                    duration: downDuration,
                    easing: Easing.in(Easing.cubic), // Easing in to simulate speeding up
                    useNativeDriver: true,
                }),
            ]).start(() => handleMiss(item));

            const translateY = position.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [500, 0, 500], // Assuming the screen height is 500
            });

            item.position = translateY;
        });
    };


    // Render function for the GameScreen
    return (
        <ImageBackground source={backgroundImage} style={gameStyles.container}>

            {itemsOnScreen.map(item => (
                <Animated.View
                    key={item.id}
                    style={[styles.fallingItem, { transform: [{translateY: item.position }]} ]}>
                    <Item item={item} onSlice={() => handleSlice(item)} />
                </Animated.View>
            ))}
            {/* Render game elements/components */}
            {/* Example: <Item /> components for food items */}
            {/* Example: <UIComponents /> for hearts counter, score display, etc. */}
            {gameOver ? (
                <GameOver score={score} />
            ) : (
                <UIComponents score={score} missedItems={missedItems} />
            )}
        </ImageBackground>
    );
};


// Styles for the GameScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fallingItem: {
            position: 'absolute',
        },
        width: '100%',
        //add background image





        // Add your game screen styles here
        //add background image



        // You can use styles from gameStyles or customize as needed
    },
    // Other styles for game elements
});

export default GameScreen;
