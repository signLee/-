import {createStore} from "redux"
import reducers from "./reducers"
import logger1 from '../redux-logger1'
import logger2 from '../redux-logger2'
// let store = createStore(reducers)
import applyMiddleware from '../redux/applyMiddleware'

let store = applyMiddleware(logger1,logger2)(createStore)(reducers)
// 执行结果 老状态1 老状态2 新状态2 新状态1  执行顺序跟koa的洋葱模型类似
export default store