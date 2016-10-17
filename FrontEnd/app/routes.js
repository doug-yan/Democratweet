module.exports = ({GET, POST, resources}) => {

  GET('/', { to: 'index#index' })

  GET('/oauth_redirect', { to: 'oauth#index' })

  POST('/event', { to: 'slackEvent#index' })

  // resources('users', { only: ['create', 'destroy'] })

}
