import React, { useEffect } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, FlatList, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categories from '../../utils/categories'

const user_storage = '@userData';
const editPref = () => {
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        async function getUserPref() {
            let responseUser = await AsyncStorage.getItem(user_storage);
            let tokenParsed = JSON.parse(responseUser)
            setUser(tokenParsed);
        }
        getUserPref()
    }, [])

    const handlePress = () => {

    }

    return( 
        <View>
            <FlatList
                scrollEnabled={true}
                contentContainerStyle={styles.flatListAlign}
                numColumns={2}
                data={categories}
                renderItem={({ item }) => (
                    <Pressable
                        style={
                            styles.pressable
                        }
                        onPress={() => handlePress(item)}>
                        <Text >{item.categoryName}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
    }
    


const styles = {
    tittle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
        marginTop: 10,
        fontWeight: 'bold',
    },
    view: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '90%',
    },
    input: {
        width: 300,
        height: 50,
        margin: 10,
        borderWidth: 4,
        padding: 10,
        borderRadius: 10,
        borderColor: '#208383',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 26,
    },
    buttonRegister: {
        width: 300,
        backgroundColor: '#208383',
        marginVertical: 10,
        paddingVertical: 10,
        // paddingHorizontal: 20,
        marginTop: 30,
        borderRadius: 6,
    },
    flatListAlign: {

        alignItems: 'center',

    },
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#208383',
        margin: 8,
        elevation: 5,
        width: 90,
        height: 40,
    }
}

export default editPref