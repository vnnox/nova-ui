const cheerio = require('cheerio')

exports.strip = function (str, tags) {
  let $ = cheerio.load(str, { decodeEntities: false })
  if (!tags || tags.length === 0) {
    return str
  }
  tags = !Array.isArray(tags) ? [tags] : tags
  let len = tags.length
  while (len--) {
    $(tags[len]).remove()
  }
  return $.html()
}

exports.fetch = function (str, tag) {
  let $ = cheerio.load(str, { decodeEntities: false })
  if (!tag) return str
  return $(tag).html()
}