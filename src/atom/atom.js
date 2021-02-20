import {atom} from 'recoil'

export const textState = atom({
    key: 'textState',
    default: ''
});

export const timeState = atom({
    key: 'timeState',
    default:{
        hours: [0, 0],
        minutes: [0, 0],
        seconds: [0, 0]
    }
})
