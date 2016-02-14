var menuItems = require('../testResources/menuItems');

var _index = (request, reply) => {
    reply.redirect('/documentation');
}

var _getMenuItems = (request, reply) => {
  reply(menuItems);
}

var _postMenuItem = (request, reply) => {
  reply("Not Yet")
}

module.exports.index = _index;
module.exports.getMenuItems = _getMenuItems;
module.exports.postMenuItem = _postMenuItem;
