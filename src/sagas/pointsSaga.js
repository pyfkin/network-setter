import {call, put, takeLatest, all} from 'redux-saga/effects';
import pointsListServices from '../services/pointsListServices';



function* fetchList()
{
    const pointsList = yield call(pointsListServices.getValue);
    yield put({type: 'FETCH_COMPLETED', payload: pointsList});
}



function* fetchListSaga()
{
    yield takeLatest('FETCH_PLAYER_LIST', fetchList)
}
export default function* rootSaga()
{
    yield all([
        fetchListSaga(),
    ])
}