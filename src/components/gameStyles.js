import { StyleSheet } from 'react-native';

const gameStyles = StyleSheet.create({
    // Styles for the GameScreen
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Adjust background color
    },
    // Styles for UIComponents
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#3498db', // Adjust button background color
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff', // Adjust button text color
        fontWeight: 'bold',
    },
    // Styles for Item component
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    itemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    carbCount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
    },
    // Add more styles as needed for different components
});

export default gameStyles;
