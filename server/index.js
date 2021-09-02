
const path = require('path');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const authRoutes = require('./routes/auth.js');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_AUTH_TOKEN;
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// const twilioClient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
//might need to remove true
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);


app.post('/', (req, res) => {
  const { message, user: sender, type, members } = req.body;

  if (type === 'message.new') {
    members
      .filter((member) => member.user_id !== sender.id)
      .forEach(({ user }) => {
        if (!user.online) {
          twilioClient.messages.create({
            body: `You have a new message from ${message.user.fullName} - ${message.text}`,
            messagingServiceSid: messagingServiceSid,
            to: user.phoneNumber
          })
            .then(() => console.log('Message sent!'))
            .catch((err) => console.log(err));
        }
      })

    return res.status(200).send('Message sent!');
  }

  return res.status(200).send('Not a new message request');
});


app.use('/', express.static('./client/dist'));

// app.get('/', (req, res) => {
//   res.status(200).send();
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


app.listen(port, () => {
  console.log(`App listening at post: ${port}`);
});

