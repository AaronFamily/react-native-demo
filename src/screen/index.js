module.exports = {
  get Guide () { return require('./Guide/index.js').default },
  get Login () { return require('./Login/index.js').default },
  get Invitation () { return require('./Invitation/index.js').default },
  get Home () { return require('./Home/index.js').default },
  get Mine () { return require('./Mine/index.js').default },
  get Detail () { return require('./Detail/index.js').default },
  get Integral () { return require('./Integral/index.js').default },
  get Settings () { return require('./Settings/index.js').default },
}