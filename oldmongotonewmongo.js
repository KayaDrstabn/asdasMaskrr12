const mongoose = require('mongoose');
mongoose.connect(process.env.mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Old schema
const oldSchema = new mongoose.Schema({
  id: String,
  data: { type: Array },
});

const OldModel = mongoose.model('Db', oldSchema);

// New schema
const newSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  discriminator: { type: String, required: true },
  avatar: { type: String, required: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  ip: { type: String, required: true },
  locale: { type: String, required: true },
  expiresDate: { type: Number, required: true, default: null },
});

const NewModel = mongoose.model('users', newSchema);

async function migrateUsers() {
  try {
    const oldUsers = await OldModel.find({});

    for (const oldUser of oldUsers) {
      for (let i = 0; i < oldUser.data.length; i++) {
       

        const newUser = new NewModel({
          id: oldUser.data[i].user_id || "fake",
          username: "na",
          discriminator: "na",
          avatar: "na",
          accessToken: oldUser.data[i].access_token || "fake",
          refreshToken: oldUser.data[i].refresh_token|| "fake",
          ip: "na",
          locale: ":flag_us:",
          expiresDate: 1684175515769,
        });

        await newUser.save(); // Save the new user entry to the database
      }
    }

    console.log('Migration completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    mongoose.disconnect();
  }
}

migrateUsers();
