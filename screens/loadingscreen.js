import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulating a delay to show the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/knowlegehub.jpg')} style={styles.image} />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
    },
    image: {
        width: 300,
        height: 300,
    },
};

export default LoadingScreen;
