module.exports = function (io){

  return {
    post: function (req, res) {

    	io.emit('lightsOnOff', {success: true});

    	return res.json({success: true});

    }
  }
}