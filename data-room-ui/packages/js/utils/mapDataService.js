/*!
 * 地图数据管理
 */
import Vue from 'vue'

/**
 * 获取地图列表
 * @param params
 * @param flag
 * @returns {*}
 */
const mapList = (params = {}, flag = false) => Vue.prototype.$dataRoomAxios.get('/bigScreen/map/list', params, flag)

/**
 * 新增地图
 * @param params
 * @param flag
 * @returns {*}
 */
const mapAdd = (params = {}, flag = false) => Vue.prototype.$dataRoomAxios.post('/bigScreen/map/add', params, flag)

/**
 * 更新地图
 * @param params
 * @param flag
 * @returns {*}
 */
const mapUpdate = (params = {}, flag = false) => Vue.prototype.$dataRoomAxios.post('/bigScreen/map/update', params, flag)

/**
 * 删除地图
 * @param id
 */
const mapDelete = (id = '-1') => Vue.prototype.$dataRoomAxios.post(`/bigScreen/map/delete/${id}`)

/**
 * 级联删除地图
 * @param id
 */
const mapCascadeDelete = (id = '-1') => Vue.prototype.$dataRoomAxios.post(`/bigScreen/map/cascadeDelete/${id}`)

/**
 * 根据父编码解析父级json中的子级
 * @param code
 */
const getMapChildFromGeoJson = (code = '-1') => Vue.prototype.$dataRoomAxios.get(`/bigScreen/map/getMapChildFromGeoJson/${code}`)

/**
 * 上传地图json
 * @param params
 * @param flag
 */
const uploadGeoJson = (params = {}, flag = false) => Vue.prototype.$dataRoomAxios.post('/bigScreen/map/upload', params, flag)

/**
 * 编码重复校验
 * @param params
 * @param flag
 */
const repeatCheck = (params = {}, flag = false) => Vue.prototype.$dataRoomAxios.post('/bigScreen/map/repeat', params, flag)

export {
  mapList,
  mapAdd,
  mapUpdate,
  mapDelete,
  mapCascadeDelete,
  getMapChildFromGeoJson,
  uploadGeoJson,
  repeatCheck
}