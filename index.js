const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3099;

app.get('/', (req, res) => res.send('Hello there. You should try POSTing to me.'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (request, response) => {
  console.log(JSON.stringify(request.body, null, 2));
  response.json({ok: 'cool'});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
