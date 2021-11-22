
import React from 'react';
import {Button, View, StyleSheet,Dimensions, Text, Image, ScrollView, TouchableHighlight} from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Washer from './info';
import Dryer from './dryer_info';


const QuestionStack = createNativeStackNavigator();
<QuestionStack.Navigator screenOptions={{headerShown: false}}></QuestionStack.Navigator>




const Welcomescreen = ({ navigation }) => {
  return(
    <View style = {styles.container}>
        <Button
        title="Brown"
        color="black"
        onPress={() => navigation.navigate('Brown')}  
      />
      <Button 
        title="East"
        color="black"
        onPress={() => navigation.navigate('East')}  
      />
      
      <Button
        title="Martin Luther"
        color="black"
        onPress={() => navigation.navigate('ML')}  
      />
      <Button
        title="Prosser"
        color="black"
        onPress={() => navigation.navigate('Prosser')}  
      />
      <Button
        title="Robertson"
        color="black"
        onPress={() => navigation.navigate('Robertson')}  
      />
      
      <Button
        title="South"
        color="black"
        onPress={() => navigation.navigate('South')}  
      />
      <Button
        title="Taylor"
        color="black"
        onPress={() => navigation.navigate('Taylor')}  
      />
      <Button 
        title="Walz"
        color="black"
        onPress={() => navigation.navigate('Walz')}  
      />
      <Button 
        title="I don't need this app"
        color="black"
        onPress={() => navigation.navigate('Boo')}  
      />
      
    </View>
  )
}

const Boo = ({ navigation, props }) => {
    return(
     <View style={styles.container}>
         <TouchableHighlight onPress={() => alert('The washers will never give you up')}>
            <Image source={{ 
            width: 200,
            height: 300,
            uri: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1613,w_2400,x_0,y_116/v1628703164/shape/mentalfloss/649273-youtube-rick_astley.jpg?itok=QClct2O0" }}/>
      </TouchableHighlight >
    
    
    </View>
    )
    
};


const East = ({ navigation, props }) => {
    return(
        <View style = {styles.container}>
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



const Walz = ({ navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};


const Brown = ({ navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};


const ML = ({navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Prosser = ({navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Robertson = ({navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Taylor = ({navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const South = ({navigation}) => {
    return(
        <View style = {styles.container}>
        <Button
        title="Washer"
        color="black"
        onPress={() => navigation.navigate('Washer2')}  
        ></Button>

        <Button
        title="Dryer"
        color="black"
        onPress={() => navigation.navigate('Dryer2')}  
        ></Button>
      
    </View>
    )
};

const Washer2=() =>{
    var washer = [];



    for (let i = 1; i < 5; i++) {
    washer.push(
        <View style={styles.container} key={i}>
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
        <View style={styles.container} key={i}>
        <Text style={styles.text}> Dryer {i} : </Text>
        <Dryer/>
        </View>
    );
    }
    return(
        <View  >
            <ScrollView >
                {dryer}
            </ScrollView>
        </View>
        
    )
}



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
        <QuestionStack.Screen name="Boo" component={Boo} />
       
        

      
      </QuestionStack.Navigator>
    </NavigationContainer>
  );
}
export default Washer_Nav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1EA1A1',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },

  button: {
    padding: 10,

  },

  text: {
      fontSize: 30,
      
  }


  
});

