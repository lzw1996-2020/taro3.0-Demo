/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-08 14:05:47
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-08 14:17:52
 */
import { ADD } from './actionTypes'

export const add = (value) => {
  return {
    type: ADD,
    value
  }
}

export const testWay = () => {
  return (dispatch) => {
    dispatch(add(5))
  }
}