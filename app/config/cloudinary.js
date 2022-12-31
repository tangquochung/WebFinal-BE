const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'drdzsbmgu',
  api_key:'332522522424933',
  api_secret: 'W1OC47zJR_rrRfdw7WHXUcp7HIY',
});

module.exports = cloudinary;