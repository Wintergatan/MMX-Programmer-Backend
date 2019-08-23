import cors from 'cors';
import express from 'express';
import Busboy from 'busboy';
import parseMidi from './parseMidi';

const upload = express();
upload.use(
  cors({
    origin: true
  })
);

upload.use((request, response, next) => {
  const busboy = new Busboy({ headers: request.headers });
  const fields = [];
  busboy.on('field', (field, val) => {
    console.log(`Processed field ${field}: ${val}.`);
    fields[field] = val;
  });

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    console.log(
      `File [${fieldname}]: filename: ${filename}, encoding: ${encoding}, mimetype: ${mimetype}`
    );
    file.on('data', data => {
      console.log(`File [${fieldname}] got ${data.length} bytes`);
      request.file = data;
    });
    file.on('end', () => {
      console.log(`File [${fieldname}] Finished`);
    });
  });
  busboy.on('finish', () => {
    next();
  });
  busboy.end(request.rawBody);
});

upload.post('*', (request, response) => {
  const midi = parseMidi(request.file);
  response.json(midi);
});

module.exports = {
  upload
};
