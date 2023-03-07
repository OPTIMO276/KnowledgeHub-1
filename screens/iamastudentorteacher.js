import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuestionExample = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>I am a student</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress ={() => navigation.navigate("register")}>I am a teacher</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        margin: 10,
        borderWidth: 6,
        borderColor: 'black'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },
};

export default QuestionExample;
