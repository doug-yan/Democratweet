class SlackEventController {

  constructor({send}) {
    this.send = send
  }

  process_event(event) {
    var slack_quote;
    if (event.reaction === "tweetthis" && event.item.type === "message") {
      slack_quote = {
        "channel": event.item.channel,
        "ts": event.item.ts
      };
      switch (event.type) {
      case "reaction_added":
        this.send('ping', {slack_quote}, function(res){
          return console.log("This is the channel: "+res.slack_quote.channel);
        });
        break;
      case "reaction_removed":
        console.log(event);
      }
    }
  }

  index(req, res) {
    if (req.body.type !== void 8) {
      switch (req.body.type) {
      case "url_verification":
        res.send(req.body.challenge);
        break;
      case "event_callback":
        this.process_event(req.body.event);
        res.statusCode = 200;
        res.send("OK");
      }
    } else {
      res.send("bad event");
    }
  };
}


module.exports = SlackEventController
