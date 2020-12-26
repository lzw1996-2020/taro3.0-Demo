/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-11 10:37:02
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-11 11:30:13
 */
export const baseApiUrl = process.env.BASE_API_URL

// 省市区
export const chinaData = "/mthysd/api/v1/oss/china";
// 根据省市区code码查找药房(post)
export const pharmacyQuery = "/mthysd/api/v1/maindata/area/pharmacy/query";