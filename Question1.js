import React from 'react';
import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements';

import { Checkbox } from './checkbox2';

const fs = require('expo-file-system');

export const Q1 = (props) => {
  return (
    <SafeAreaView>
      <Text style = {styles.title_text}> Washer 1</Text>
        <Formik
          initialValues={{
              broken: false,
              open: true,
              busy: false, 
          }}
          onSubmit={(values, { resetForm }) => {
              console.log(values);
            
          }}
      >
          {({
              handleSubmit,
              values,
              setFieldValue
          }) => (
              <View >
                  <Checkbox 
                      name={"broken"}
                      isChecked={values?.broken}
                      setFieldValue={setFieldValue}
                  >
                      <Text  style = {styles.text}>Broken</Text>
                  </Checkbox>
                  
                  <Checkbox 
                      name={"open"}
                      isChecked={values?.open}
                      setFieldValue={setFieldValue}
                  >
                      <Text  style = {styles.text}>Open</Text>
                  </Checkbox>

                  <Checkbox 
                      name={"busy"}
                      isChecked={values?.busy}
                      setFieldValue={setFieldValue}
                  >
                      <Text  style = {styles.text}>Busy</Text>
                  </Checkbox>
                  
                  <Button 
                  buttonStyle={styles.button}
                  onPress={handleSubmit} 
                  title="Submit"></Button> 
                  
              </View>
          )}

      </Formik>
    </SafeAreaView>
    
      
  )
}

//if open==false, then it is broken or busy 
const styles = StyleSheet.create({
  title_text:{
    fontSize: 30,
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
  text:{
    fontSize: 20,
    alignItems: 'center',
  }
})
export default Q1;