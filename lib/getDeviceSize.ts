export default function GetDeviceSize (window: Window): deviceSize {
    let result: deviceSize = 'pc';

    if(window.innerHeight > window.innerWidth) {
        result = 'mobile';
    }

    return result;
}

export type deviceSize = 'mobile' | 'pc'