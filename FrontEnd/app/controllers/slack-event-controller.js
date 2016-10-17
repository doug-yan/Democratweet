class SlackEventController {

  index(req, res) {
    if (req.body.type !== void 8) {
      switch (req.body.type) {
      case "url_verification":
        res.send(req.body.challenge);
        break;
      case "event_callback":
        //this.process_event(req.body.event);
        res.statusCode = 200;
        res.send("OK");
      }
    } else {
      res.send("bad event");
    }
  };
}


module.exports = SlackEventController
