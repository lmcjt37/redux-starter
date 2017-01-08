// "state = null" is set to avoid any errors on boot
export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
