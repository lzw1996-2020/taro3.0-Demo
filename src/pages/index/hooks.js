/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-10 13:14:53
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-10 13:30:52
 */
import { Button, View, Text } from '@tarojs/components'
import React, { useState,useEffect } from 'react'
export default function Counter({ initialCount=0 }) {
  const [count, setCount] = useState(initialCount)
  useEffect(() => {
    console.log(count)
  })
  return (
    <View>
      <Text>count:{count}</Text>
      <Button onClick={() => setCount(initialCount)}>Reset</Button>
      <Button onClick={() => setCount(old => old + 1)}>+</Button>
      <Button onClick={() => setCount(old => old - 1)}>-</Button>
    </View>
  )
}