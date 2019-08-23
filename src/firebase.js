const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Express Servers
const { upload: uploadServer } = require('./upload');

// HTTP Cloud Functions
const upload = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}`; // Prepend '/' to keep query params if any
  }

  return uploadServer(request, response);
});

module.exports = {
  upload
};
