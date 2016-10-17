class OauthController {

  constructor({send}) {
    this.send = send
  }

  index(req, res) {
    var request = require('request');

    var client_id = process.env.SLACK_CLIENT_ID
    var client_secret = process.env.SLACK_CLIENT_SECRET

    var request_http = 'https://slack.com/api/oauth.access?client_id='+client_id+'&client_secret='+client_secret+'&code='+req.query.code

    request(request_http, function(error, response, body){
      if (!error && response.statusCode === 200) {
        return res.send(body);
      }
    });
  };
}



module.exports = OauthController
