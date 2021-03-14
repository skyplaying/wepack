const Path = require('path')
const { promises } = require("fs")
const {options} = require('../bundle.js')


async function write(asset) {
  await promises.mkdir(Path.dirname(asset.outputPath), { recursive: true })
  await promises.writeFile(
    asset.outputPath.replace("wxss", "css").replace("wxml", "jsx"),
    asset.output
  )
}

async function swrite(asset){
  // await promises.mkdir(options.outputPath, { recursive: true })
  await promises.writeFile(
    asset.outputPath.replace("wxss", "css").replace("wxml", "jsx"),
    asset.output
  )
}

function toHump(name) {
  return name.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase())
}

const titleCase = (str) => str.slice(0, 1).toUpperCase() + toHump(str).slice(1)

const random = function randomString(len) {
  len = len || 6
  var $chars = "abcdefhijkmnprstwxyz"
  var letter = ""
  for (i = 0; i < len; i++) {
    letter += $chars.charAt(Math.floor(Math.random() * $chars.length))
  }
  return letter
}

module.exports = {
  write: write,
  titleCase: titleCase,
  random: random,
}
