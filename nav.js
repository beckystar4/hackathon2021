
import React from 'react';
import {Button, View, StyleSheet,Dimensions, Text, Image, ScrollView} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Washer from './info';
import Dryer from './dryer_info';


const QuestionStack = createNativeStackNavigator();
<QuestionStack.Navigator screenOptions={{headerShown: false}}></QuestionStack.Navigator>




const Welcomescreen = ({ navigation }) => {
  return(
    <View style = {styles.container}>
      <Button style = {styles.button}
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
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
    
};

const Washer2=() =>{
    var washer = [];



    for (let i = 1; i < 5; i++) {
    washer.push(
        <View key={i}>
        <Text style={styles.text}> Washer {i} : </Text>
        <Washer/>
        </View>
    );
    }
    return(
        <View>
            <ScrollView>
                {washer}
            </ScrollView>
        </View>
        
    )
}

const Dryer2=() =>{
    var dryer = [];

    for (let i = 5; i < 9; i++) {
    dryer.push(
        <View key={i}>
        <Text style={styles.text}> Dryer {i} : </Text>
        <Dryer/>
        </View>
    );
    }
    return(
        <View>
            <ScrollView>
                {dryer}
            </ScrollView>
        </View>
        
    )
}




const Walz = ({ navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};


const Brown = ({ navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};


const ML = ({navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Prosser = ({navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Robertson = ({navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Taylor = ({navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const South = ({navigation}) => {
    return(
        <View >
        <Button
        title="Washer"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
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
        <QuestionStack.Screen name="Washer2" component={Washer2} />
        <QuestionStack.Screen name="Dryer2" component={Dryer2} />
        

      
      </QuestionStack.Navigator>
    </NavigationContainer>
  );
}
export default Washer_Nav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },

  button: {
    marginBottom: 20,

  },

  text: {
      fontSize: 30,
      
  }


  
});

