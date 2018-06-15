import { Platform } from 'react-native'

export default class platformDiff {
  constructor () {
    this.platform = Platform.OS
  }

  static isAndroid () {
    return this.platform === 'android'
  }

  static isIos () {
    return this.platform === 'ios'
  }
}