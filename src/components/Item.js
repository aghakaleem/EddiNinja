import React, {useRef, useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, PanResponder } from 'react-native';
import slash from '../assets/images/eddii_ninja_slash.png'


const Item = ({ item, onSlice }) => {


    const [isSliced, setIsSliced] = useState(false);
    // Animation state
    const sliceAnimation = new Animated.Value(0);


    // const panResponder = useRef(
    //     PanResponder.create({
    //         onStartShouldSetPanResponder: () => true,
    //         onPanResponderGrant: () => {
    //             setIsSliced(true);
    //             onSlice(item);
    //             // logic for slicing action
    //
    //
    //         },
    //         onPanResponderRelease: () => {
    //             setIsSliced(false);
    //             // Additional logic for touch release
    //         },
    //         onPanResponderTerminate: () => {
    //             setIsSliced(false);
    //             // Additional logic on termination
    //         },
    //     })
    // ).current;





    // Function to handle slicing an item
    const handleSlice = () => {
        // Logic for slicing the item
        // Notify GameScreen about the sliced item
        onSlice(item);
        setIsSliced(true);

        // Reset slice animation after a certain time (optional)
        setTimeout(() => {
            setIsSliced(false);
        }, 1000); // Adjust timing as needed

        // Trigger slice animation
        Animated.timing(sliceAnimation, {
            toValue: 1,
            duration: 300, // Adjust duration as needed
            useNativeDriver: true,
        }).start(() => {
            // Reset animation after completion
            sliceAnimation.setValue(0);
        });
    };

    // Interpolate animation values for scaling effect
    const sliceScale = sliceAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.2], // Scale factor when sliced
    });

    return (
        <TouchableOpacity onPress={handleSlice} style={styles.itemContainer} >
            {!isSliced && <Image source={item.image} style={styles.itemImage} />}
            {isSliced && (
                <>
                    <Image source={slash}  />
                    <Image source={item.cutImage} style={styles.itemImage} />
                    <Text style={styles.carbCount}>{`${item.carbCount}g`}</Text>
                </>
            )}

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        // Style for item container (optional)
        // Adjust touchable area, padding, etc.
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // Style for the food item container
        // Adjust dimensions, borders, etc.
    },
    itemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        // Style for the food item image
        // Adjust dimensions, aspect ratio, etc.
    },
    carbCount: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        // Style for the carb count text
        // Adjust font size, color, etc.
    },
});

export default Item;
