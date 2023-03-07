import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const QuestionExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>What is your school level?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Primary School 1-6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        
         <Text style={styles.buttonText}>Mid School 7-9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>High School 10-12</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    numColumns: 2,
  },
  questionText: {
    fontSize: 30,
    margin: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    margin: 10,
    borderWidth: 6,
    borderColor: "black",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  image :{
height : 100,
width : 100  


  }
};

export default QuestionExample;
