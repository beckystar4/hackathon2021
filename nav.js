
import React from 'react';
import {Button, View, StyleSheet,Dimensions, Text} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const QuestionStack = createNativeStackNavigator();
<QuestionStack.Navigator screenOptions={{headerShown: false}}></QuestionStack.Navigator>


const Welcomescreen = ({ navigation }) => {
  return(
    <View style = {new_styles.welcome}>
      <Text>Welcome</Text>
      <Button
        title="East"
        onPress={() => navigation.navigate('East')}  
      />
      <Button
        title="Walz"
        onPress={() => navigation.navigate('Walz')}  
      />
      <Button
        title="Brown"
        onPress={() => navigation.navigate('Brown')}  
      />
      <Button
        title="Martin Luther"
        onPress={() => navigation.navigate('ML')}  
      />
      <Button
        title="Prosser"
        onPress={() => navigation.navigate('Prosser')}  
      />
      <Button
        title="Robertson"
        onPress={() => navigation.navigate('Robertson')}  
      />
      <Button
        title="Taylor"
        onPress={() => navigation.navigate('Taylor')}  
      />
      <Button
        title="South"
        onPress={() => navigation.navigate('South')}  
      />
    </View>
  )
}


const East = ({ navigation, props }) => {
  return (
    <View style = {new_styles.stylize}>
      <Text>East</Text>
      
    </View>
    
  );
};


const Walz = ({ navigation}) => {
  return (
    <View style = {new_styles.stylize}>
      <Text>Walz</Text>
    </View>
    
  );
};

//<Q1 navigate={navigation.navigate}/>
const Brown = ({ navigation}) => {
  return (
    <View style = {new_styles.checkboxes}>
      <Text>brown</Text>
    </View>
    
  );
};


const ML = ({navigation}) => {
  return(
    <View style = {new_styles.checkboxes}>
      <Text>ML</Text>
    </View>

  );
};

const Prosser = ({navigation}) => {
  return(
    <View style = {new_styles.checkboxes}>
      <Text>Prosser</Text>
    </View>

  );
};

const Robertson = ({navigation}) => {
  return(
    <View style = {new_styles.drop_down}> 
      <Text>Robertson</Text>
    </View>

  );
};

const Taylor = ({navigation}) => {
  return(
    <View style = {new_styles.checkboxes}>
       <Text>Taylor</Text>
    </View>

  );
};

const South = ({navigation}) => {
  return(
    <View style = {new_styles.checkboxes}>
      <Text>South</Text>
    </View>

  );
};


export function Washer_Nav() {
  return (
    <NavigationContainer>
      <QuestionStack.Navigator>
        <QuestionStack.Screen name="Welcome" component={Welcomescreen} />
        <QuestionStack.Screen name="East" component={East} />
        <QuestionStack.Screen name="Walz" component={Walz} />
        <QuestionStack.Screen name="Brown" component={Brown} />
        <QuestionStack.Screen name="ML" component={ML} />
        <QuestionStack.Screen name="Prosser" component={Prosser} />
        <QuestionStack.Screen name="Robertson" component={Robertson} />
        <QuestionStack.Screen name="Taylor" component={Taylor} />
        <QuestionStack.Screen name="South" component={South} />

      
      </QuestionStack.Navigator>
    </NavigationContainer>
  );
}
export default Washer_Nav;

const new_styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
  
    
  },
  text:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    backgroundColor: '#ff9f7f',
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 350,
  },

  welcome: {
    flex: 1, //flexible
    backgroundColor: '#9BD1D1',
    //justifyContent: 'center',
    alignItems: 'center',
    
  },

  stylize: {
    flex: 1, //flexible
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxes: {
    flex: 1, //flexible
    fontSize: 30,
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  drop_down: {
    flex: 1, //flexible
    //fontSize: 30,
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navbar: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.1,
    backgroundColor: "#b1b1b1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    top: Dimensions.get("screen").height*0.84,
    zIndex: 10,
    position:"absolute",
  },

  other_navbar: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.1,
    backgroundColor: "#b1b1b1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    top: Dimensions.get("screen").height*0.78,
    zIndex: 10,
    position:"absolute",
  },

  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },


  
});

