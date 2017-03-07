import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user.reducer';
import navigationReducer from './navigation.reducer';

export default combineReducers({
    form: formReducer,
    user: userReducer,
    navigation: navigationReducer,
});
