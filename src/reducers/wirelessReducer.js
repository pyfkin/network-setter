import update from 'immutability-helper';


const initialState = {
    wirelessIp: '',
    wirelessIpRequired: false,
    wirelessMask: '',
    wirelessMaskRequired: false,
    wirelessGateway: '',
    wirelessPreferredDns: '',
    wirelessPreferredDnsRequired: false,
    wirelessAlternativeDns: '',

    wirelessIpAuto: 0,
    wirelessDnsAuto: 0,

    securityKey: '',
    securityKeyRequired: false,

    enabledWifi: false,
    enabledSecurityKey: false,

    displayMenu: false,
    btnText: 'Please select',
    wifiNameRequired: false,
    selectedItem: {},
    qwe: ['qwe',  'gda'],
};

function wirelessReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'ON_INPUT_WIRELESS_CHANGED':
            return update(state, {
                $merge: {
                    [`${action.payload.inputName}`]: action.payload.inputValue,
                }
            });
        case 'WIRELESS_IP_RADIO_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    wirelessIpAuto: action.payload,
                }
            });
        case 'WIRELESS_DNS_RADIO_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    wirelessDnsAuto: action.payload,
                }
            });
        case 'ON_SECURITY_KEY_CHANGED':
            return update(state, {
                $merge: {
                    securityKey: action.payload,
                }
            });
        case 'ON_ENABLED_WIFI_CHANGED':
            return update(state, {
                $merge: {
                    enabledWifi: !state.enabledWifi,
                    btnText: state.enabledWifi ? 'Please select' : state.btnText,
                    displayMenu: state.displayMenu ? !state.displayMenu : false,
                    selectedItem: state.enabledWifi ? {} : state.selectedItem,
                    wifiNameRequired: state.wifiNameRequired ? !state.wifiNameRequired : false,
                    wirelessIpAuto: 0,
                    wirelessDnsAuto: 0,
                }
            });
        case 'ON_ENABLED_SECURITY_KEY_CHANGED':
            return update(state, {
                $merge: {
                    enabledSecurityKey: !state.enabledSecurityKey,
                    securityKeyRequired: !state.securityKeyRequired,
                }
            });
        case 'ON_SELECT_ITEM':
            return update(state, {
                $merge: {
                    selectedItem: action.payload.item,
                    btnText: action.payload.btnNewText,
                    wifiNameRequired: false,
                }
            });
        case 'ON_SHOW_HIDE_MENU':
            return update(state, {
                $merge: {
                    displayMenu: !state.displayMenu,
                }
            });
        case 'REQUIRED_WIRELESS_CHANGED':
            if (action.payload.key === 'Ip') {
                return update(state, {
                    $merge: {
                        wirelessIpRequired: !state.wirelessIpRequired,
                        wirelessMaskRequired: !state.wirelessMaskRequired,
                    }
                })
            } else {
                return update(state, {
                    $merge: {
                        wirelessPreferredDnsRequired: !state.wirelessPreferredDnsRequired,
                    }
                })
            }
        case 'ON_UPDATE_WIRELESS_FROM_LOCAL_STORAGE':
            const userSelectedItem = Object.assign({}, action.payload.selectedItem);
            const newItems = action.payload.selectedItem.security.map(i => i);
            console.log('arr', newItems);
            const q = state.qwe.map(i => i);
            // delete action.payload.selectedItem;
            console.log(userSelectedItem);
            return update(state, {
                qwe: {
                    // security: {
                        $unset: [0],
                    // },
            }


                }

                //     selectedItem: {
                //         favorite: {
                //             $set: userSelectedItem.favorite
                //         },
                //         name: {
                //             $set: userSelectedItem.name
                //         },
                //         security: {
                //             $splice: [[newItems, 1]],
                //         },
                //         // security: {
                //         //     $push: userSelectedItem.security
                //         // },
                //         strength: {
                //             $set: userSelectedItem.strength
                //         },
                //     }
                // }
            );

        // });
        default:
            return state;
    }
}

export default wirelessReducer;