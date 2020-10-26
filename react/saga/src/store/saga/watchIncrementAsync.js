
import * as types from '../action-types'
import {put,takeEvery,call} from 'redux-saga/effects'
import {delay} from '../utils'
console.log(delay)
function* incrementAsync(){
  // yield delay(1000)
  let obj = {name:'sign'}
  let msg = yield call([obj,delay],1000)//函数里的this默认为Null如果想要改变this指向的话可以用 yield call([obj,delay],1000)或者yield apply(obj,delay,[1000])
  console.log(msg,'msg');
  yield put({type:types.INCREMENT})
}

export default function* watchIncrementAsync(){
  // 监听每一次的ASYNC_INCREMENT的派发，并执行incrementAsync
  yield takeEvery(types.ASYNC_INCREMENT,incrementAsync)
}