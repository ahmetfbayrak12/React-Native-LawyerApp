import { 
    JOB_UPDATE, 
    JOB_DELETE_SUCCESS, 
    JOB_CREATE, 
    JOB_SAVE_SUCCESS 
} from '../Actions/Types';

const INITIAL_STATE = {
    il:'', 
    ilce:'', 
    tarih:'', 
    saat:'', 
    ucret: '', 
    detay:'', 
    adliye:'', 
    merci: '', 
    dosyaNo: '', 
    karsiTarafAdi: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JOB_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value}; 
        case JOB_CREATE:
            return INITIAL_STATE;     
        case JOB_DELETE_SUCCESS:
            return INITIAL_STATE; 
        case JOB_SAVE_SUCCESS:
            return INITIAL_STATE;                       
        default:
            return state;
    }
}