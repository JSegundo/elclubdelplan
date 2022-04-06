import React, { useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { createComent } from "../store/coment";
import { getEvent } from "../store/singleEvent";

const token_storage = '@Token';
const user_storage = '@userData';

const Coment = () => {
    const [coment, onChangeText] = React.useState(null);
    const [vote, onChangeNumber] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const route = useRoute();
    let dispatch = useDispatch();

    const { id } = route.params;
    console.log("ID->", id);
    useEffect(() => {
        dispatch(getEvent(id))
        async function getTokenAndUser() {
            try {
                let responseToken = await AsyncStorage.getItem(token_storage);
                let responseUser = await AsyncStorage.getItem(user_storage);
                setToken(JSON.parse(responseToken));
                setUser(JSON.parse(responseUser));
            } catch ({ err }) {
                console.error({ err });
            }
        }
        getTokenAndUser();
    }, []);

    const onSubmit = () => {
        try {
            dispatch(createComent({
                userName: user.name,
                coment,
                vote
            }));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.view}>
                <Text style={styles.comentTitle}>Comentario</Text>
                <TextInput
                    style={styles.comentInput}
                    onChangeText={onChangeText}
                    placeholder="coment"
                    placeholderTextColor="#808080"
                    value={coment}
                />
                <TextInput
                    style={styles.comentInputVote}
                    onChangeText={onChangeNumber}
                    value={vote}
                    placeholder="vote"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.buttonComent} onPress={onSubmit}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                        Comentar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    comentTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#208383',
        marginTop: 10,
        marginBottom: 0,
        // marginLeft: 18,
        fontSize: 20,
        padding: 1,
    },
    tittlePrincipal: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#111',
        marginTop: 10,
        marginBottom: 0,
        width: 300,
        fontSize: 24,
        padding: 10,
    },
    comentInput: {
        width: 300,
        height: 150,
        margin: 10,
        borderWidth: 4,
        padding: 10,
        borderRadius: 10,
        borderColor: '#208383',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 26,
    },
    comentInputVote: {
        textAlign: 'center',
        width: 100,
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
    buttonComent: {
        width: 300,
        backgroundColor: '#208383',
        marginVertical: 10,
        paddingVertical: 10,
        // paddingHorizontal: 20,
        borderRadius: 6,
    },
};
export default Coment;
