import firebase from 'firebase';
import React from 'react';
import { Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MERCIES_FETCH_SUCCESS, 
        IL_ILCELER_FETCH_SUCCESS,    
        JOB_UPDATE, 
        JOB_DELETE_SUCCESS,
        JOB_SAVE_SUCCESS, 
        JOB_CREATE
    } from './Types';

export const jobUpdate = ({ prop, value}) => {
    return {
        type: JOB_UPDATE,
        payload: {prop, value}
    };
}

export const jobCreate = ({ il, ilce, saat, tarih, ucret, detay, adliye, merci, dosyaNo, karsiTarafAdi }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/jobs`)
            .push({ il, ilce, saat, tarih, ucret, detay, adliye, merci, dosyaNo, karsiTarafAdi, isiVeren: currentUser.uid })
            .then(() => {
                
                Actions.menu({ type: 'reset'})                
                dispatch({ type: JOB_CREATE })
        });
    };
};


export const merciesFetch = () => {
    return (dispatch) => {
        firebase.database().ref(`/ilTablosu/0`)
            .on('value', snapshot => {
                const pickerItems = snapshot.val().map( (s, i) => {
                    return <Picker.Item key={i} value={s} label={s} />
                });
                dispatch({ type: MERCIES_FETCH_SUCCESS, payload: pickerItems });
            });
    };
};

export const il_ilcelerFetch = ({ value }) => {
    return (dispatch) => {
        firebase.database().ref(`/ilIlceTablosu/0/${value}/0`)
            .on('value', snapshot => {
                const pickerItems1 = snapshot.val().map( (s, i) => {
                    return <Picker.Item key={i} value={s} label={s} />
                });
                dispatch({ type: IL_ILCELER_FETCH_SUCCESS, payload: pickerItems1 });
            });
    };
};

export const jobDelete= ({ uid }) => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/jobs/${uid}`)
        .remove()
//        .then(() => Actions.Menu({ type: 'reset' }))
        .then(() => dispatch({ type: JOB_DELETE_SUCCESS }))
    };
};