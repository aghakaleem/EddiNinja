import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const GameOver = ({ score, onRestart }) => {
    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                // This function is required on Android
                // You can leave it empty or add some logic here
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Game Over!</Text>
                    <Text style={styles.modalText}>Final Score: {score}</Text>
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={onRestart}
                            // Add logic to restart the game
                    >
                        <Text style={styles.textStyle}>Restart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );


    //     <View style={styles.container}>
    //         <Text style={styles.gameOverText}>Game Over!</Text>
    //         <Text style={styles.finalScoreText}>{`Final Score: ${score}`}</Text>
    //         <TouchableOpacity onPress={onRestart} style={styles.button}>
    //             <Text style={styles.buttonText}>Restart</Text>
    //         </TouchableOpacity>
    //     </View>
    // );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Adjust background color
        // Additional styling for the game-over container
    },
    gameOverText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        // Style for game-over text
    },
    finalScoreText: {
        fontSize: 18,
        marginBottom: 30,
        // Style for final score text
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#3498db', // Adjust button background color
        borderRadius: 5,
        // Style for button
    },
    buttonText: {
        color: '#fff', // Adjust button text color
        fontWeight: 'bold',
        // Style for button text
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default GameOver;
