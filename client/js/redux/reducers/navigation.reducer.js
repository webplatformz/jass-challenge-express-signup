import { ENTERED_SECTION, LEFT_SECTION } from '../actions/index';

const initialState = {
    activeNavItemHref: undefined,
};

let activeSections = [];

const getLastActiveSectionAsHref = () => `/#${activeSections[activeSections.length - 1]}`;

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTERED_SECTION:
            activeSections.push(action.sectionName);
            return Object.assign({}, state, {
                activeNavItemHref: getLastActiveSectionAsHref()
            });
        case LEFT_SECTION:
            activeSections = activeSections.filter(section => section !== action.sectionName);
            return Object.assign({}, state, {
                activeNavItemHref: getLastActiveSectionAsHref()
            });
        default:
            return state;
    }
}