// import React, {useState} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';

// const data = [
//   {label: 'Restaurante', value: 'restaurante'},
//   {label: 'Cine', value: 'cine'},
//   {label: 'Concierto', value: 'concierto'},
//   {label: 'Fiesta', value: 'fiesta'},
//   {label: 'Item 5', value: '5'},
//   {label: 'Item 6', value: '6'},
//   {label: 'Item 7', value: '7'},
//   {label: 'Item 8', value: '8'},
// ];

// const DropdownComponent = () => {
//   const [value, setValue] = useState(null);

//   const renderItem = item => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textItem}>{item.label}</Text>
//         {/* {item.value === value && (
//           <AntDesign
//             style={styles.icon}
//             color="black"
//             name="Safety"
//             size={20}
//           />
//         )} */}
//       </View>
//     );
//   };

//   return (
//     <Dropdown
//       style={styles.dropdown}
//       placeholderStyle={styles.placeholderStyle}
//       selectedTextStyle={styles.selectedTextStyle}
//       iconStyle={styles.iconStyle}
//       data={data}
//       maxHeight={300}
//       labelField="label"
//       valueField="value"
//       placeholder="Categorias"
//       value={value}
//       onChange={item => {
//         setValue(item.value);
//       }}
//       // renderLeftIcon={() => (
//       //   <AntDesign style={styles.icon} color="black" name="happy" size={20} />
//       // )}
//       renderItem={renderItem}
//     />
//   );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//   dropdown: {
//     margin: 16,
//     height: 50,
//     width: 200,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',

//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,

//     elevation: 2,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   item: {
//     padding: 17,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   textItem: {
//     flex: 1,
//     fontSize: 16,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });
