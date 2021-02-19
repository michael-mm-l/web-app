import {atom} from 'recoil'

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const timeState = atom({
    key: 'timeState',
    default:{
        hours: [0, 0],
        minutes: [0, 0],
        seconds: [0, 0]
    }
})
