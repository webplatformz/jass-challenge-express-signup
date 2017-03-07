import { ENTERED_SECTION, LEFT_SECTION } from '../actions/index';

const initialState = {
    activeNavItemHref: '/',
};

let activeSections = [];

const getFirstActiveSectionAsHref = () => `/#${activeSections[0]}`;

export default (state = initialState, action) => {
    switch (action.type) {
        case ENTERED_SECTION:
            activeSections.push(action.sectionName);
            return Object.assign({}, state, {
                activeNavItemHref: getFirstActiveSectionAsHref()
            });
        case LEFT_SECTION:
            activeSections = activeSections.filter(section => section !== action.sectionName);
            return Object.assign({}, state, {
                activeNavItemHref: getFirstActiveSectionAsHref()
            });
        default:
            return state;
    }
}