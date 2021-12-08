export const helloRoute = {
  path: '/hello',
  method: 'get',
  handler: (req, res)  => {
    res.status(200).json({ message: 'Hello and Welcome from Express!'});
  }
}