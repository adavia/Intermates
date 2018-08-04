const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('topicIndex', '/topics', 'index')
.add('topicNew', '/topics/new', 'topics/new')
.add('topicEdit', '/topics/:id/edit', 'topics/edit')
.add('RoomShow', '/rooms/:id', 'rooms/show')