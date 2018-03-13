module.exports = function (){

  return {
    get: function (req, res) {

    	return res.json({url: process.env.NOW_URL});

    }
  }
}