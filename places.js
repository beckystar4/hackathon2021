import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

export function Halls(props){
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'East', value: 'E'},
        {label: 'Walz', value: 'W'},
        {label: 'Brown', value: 'B'},
        {label: 'Martin Luther', value: 'ML'},
        {label: 'Prosser', value: 'P'},
        {label: 'Robertson', value: 'R'},
        {label: 'Taylor', value: 'T'},
        {label: 'South', value: 'S'},
        

      ]);
      return(
        <SafeAreaView style = {styles.loginContainer}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={false}
                onChangeValue={(val)=>{
                  props.setFieldValue(props.name, val);
                }}
            />
        
        </SafeAreaView>
        
      );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: 270,
    width: '55%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    //backgroundColor: '#9BD1D1',
  },
  text:{
    fontSize: 20,
  }
})

export default Halls;