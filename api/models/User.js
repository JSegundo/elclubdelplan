const { Schema, model } = require("mongoose");
const { genHash } = require("../config/passwordHash");

const UserSchema = new Schema({
  name: String,
  email: {type: String, lowercase: true},
  city: { type: String, required: true },
  password: String,
  salt: String,
  ownPlans: [{ type: Schema.ObjectId, ref: "Event" }],
  userWillAttend: [{ type: Schema.ObjectId, ref: "Event" }],
});

UserSchema.pre("save", async function () {
  const saltHash = await genHash(this.password);
  const { salt, hash } = saltHash;

  this.password = hash;
  this.salt = salt;
});

const UserModel = model("User", UserSchema);

const newUser = () => {
  const prueba = new UserModel({name: "prueba", password: "hola123", email: "DELFI@GMAIL.COM", city: "Buenos Aires"});
  prueba.save(() => console.log(prueba));
}
newUser();

module.exports = UserModel;
