import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

export const DropdownCategories = props => {
  const renderItemCategory = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View>
      <Dropdown
        {...props}
        style={styles.dropdown}
        labelField="label"
        valueField="value"
        renderItem={renderItemCategory}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    marginVertical: 10,
    marginHorizontal: 8,
    height: 30,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    // flex: 1,
    fontSize: 16,
  },
});
