const { Schema, model } = require("mongoose");
const { genHash } = require("../config/passwordHash");

const UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  city: { type: String, required: true },
  password: String,
  salt: String,
  ownPlans: [{ type: Schema.ObjectId, ref: "Event" }], //--> puede ser para los que quiere administrar pero no los ownea
  userWillAttend: [{ type: Schema.ObjectId, ref: "Event" }], // ok
  preferences: []
});

UserSchema.pre("save", async function () {
  const saltHash = await genHash(this.password);
  const { salt, hash } = saltHash;

  this.password = hash;
  this.salt = salt;
});

const UserModel = model("User", UserSchema);



module.exports = UserModel;
