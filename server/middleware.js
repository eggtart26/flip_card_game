
module.exports = {
    logIncomingRequests: (req, res, next) => {
      console.log(req)
      console.log(`Incoming ${req.method} request to ${req.url}`)
      console.log(req.body)
      next();
    },
  }