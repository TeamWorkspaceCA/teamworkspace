export default function GetDeviceSize (window: Window): deviceSize {
    let result: deviceSize = 'pc';

    if(window.innerWidth <= 490) {
        result = 'mobile';
    }

    return result;
}

export type deviceSize = 'mobile' | 'pc'