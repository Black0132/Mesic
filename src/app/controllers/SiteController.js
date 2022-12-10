const Song = require('../models/Song')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
  // [GET] /
  index(req, res, next) {
    Song.find({})
      .then(songs => {
        res.render('home', {
          songs: multipleMongooseToObject(songs)
        })
      })
      .catch(next)
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
