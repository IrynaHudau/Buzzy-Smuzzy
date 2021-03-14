import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga ,authUserSaga, authCheckStateSaga} from '../sagas/auth';
import { initIngredientsSaga } from './smoothieBuilder';
import { purchaseSmoothieSaga, fetchOrdersSaga } from './order';

export function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga)
    ]);
}

export function* watchSmoothieBuilder(){
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder(){
    //execute lates with takeLatest
    yield takeLatest(actionTypes.PURCHASE_SMOOTHIE,purchaseSmoothieSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS,fetchOrdersSaga);
}