/*
 * @Description: 测试试例
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-08 14:07:45
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-08 14:18:47
 */
import { ADD } from '../actions/actionTypes'

const defaultState = {
  number: 0,
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        number: state.number + action.value
      }
      break;
    default:
      return {
        ...state
      }
  }
}