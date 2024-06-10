import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "email already exists"],
      required: [true, "email is required"],
    },
    username: {
      type: String,
      required: [true, "username is required"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true },
);

const User = models.user || model("User", UserSchema);

export default User;
