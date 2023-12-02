import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import heartImage from '../assets/images/heart.png';
import heartBaseImage from '../assets/images/eddii_ninja_main_menu_base_left_side.svg';
import xImage from '../assets/images/eddii_ninja_main_menu_x.svg';
import redXImage from '../assets/images/eddii_ninja_main_menu_x_red.svg';
import pauseImage from '../assets/images/eddii_ninja_main_menu_base_right_side.svg';
import topBaseImage from '../assets/images/eddii_ninja_main_menu_base_reference.png';

const UIComponents = ({ score, hearts, missedItems, onPause, onBack, highScore }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={heartBaseImage} style={styles.heartContainer}>
                <Image source={heartImage} style={styles.heartImage} />
                <Text style={styles.heartText}>{hearts}</Text>
            </ImageBackground>
            <ImageBackground source={topBaseImage} style={styles.scoreContainer}>
                <Text style={styles.scoreText}>{`High Score: ${highScore}`}</Text>
                <Text style={styles.scoreText}>{`Score: ${score}`}</Text>
                <View style={styles.missedItemsContainer}>
                    {[...Array(missedItems)].map((_, i) => (
                        <Image key={i} source={xImage} style={styles.xImage} />
                    ))}
                </View>
            </ImageBackground>
            <TouchableOpacity onPress={onPause} style={styles.pauseButton}>
                <Image source={pauseImage} style={styles.pauseImage} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'transparent',
         top: 0,
        width: '100%',
    },
    heartContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    heartText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    missedItemsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    xImage: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
    },
    pauseButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pauseImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

});


export default UIComponents;
