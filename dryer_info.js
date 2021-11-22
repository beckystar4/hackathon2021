//going to get how many washers from database+infomation

import React, {useState}  from 'react';
import {Button, View, StyleSheet,Dimensions, Text, Image, ScrollView} from 'react-native';

export const Dryer = (props) => {
    const [state, setState] = useState('Open')
    
    
    return (
      <View>
          <Text style = {styles.title_text}> {state}</Text>
            
            <Button
                title="open"
                color="black"
                onPress={()=>
                    setState('Open')
                    }
            >
                
            </Button>

            <Button
                title="broken"
                color="black"
                onPress={()=>
                    setState('Broken')
                    }
            >
                
            </Button>

            <Button
                title="used"
                color="black"
                onPress={()=>
                    setState('Used')
                    }
            >
            
            </Button>

        
      </View>
      
        
    )
  }
  
  //if open==false, then it is broken or busy 
  const styles = StyleSheet.create({
    title_text:{
      fontSize: 20,
      height: 50,
      alignItems: 'center',
    },
    button:{
      backgroundColor: '#ff9f7f',
      margin: 20,
      padding: 10,
      alignItems: 'center',
      flexDirection: "row",
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 350,
    },
    
  })
  export default Dryer;