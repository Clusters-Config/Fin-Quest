  import mongoose from "mongoose";
  import { Schema } from "mongoose";

  const accountingSchema = new Schema({
    mod1: {
      path1: {
        type: Number,
        default: 0,
      },
      path2: {
        type: Number,
        default: 0,
      },
    },
    mod2: {
      path1: {
        type: Number,
        default: 0,
      },
      path2: {
        type: Number,
        default: 0,
      },
    },
  });

  const financeSchema = new Schema({
    mod1: {
      path1: {
        type: Number,
        default: 0,
      },
      path2: {
        type: Number,
        default: 0,
      },
    },
    mod2: {
      path1: {
        type: Number,
        default: 0,
      },
      path2: {
        type: Number,
        default: 0,
      },
    },
    mod3: {
      path1: {
        type: Number,
        default: 0,
      },
      path2: {
        type: Number,
        default: 0,
      },
    },
    mod4: {
      path1: {
        type: Number,
        default: 0,
      },
      path2: {
        type: Number,
        default: 0,
      },
      path3: {
        type: Number,
        default: 0,
      },
    },
  });

  const resultSchema = new Schema(
    {
      email: {
        type: String,
        lowercase: true,
      },
      accouting: {
        type: [accountingSchema],
        default: [],
      },
      finance: {
        type: [financeSchema],
        default: [],
      },
    },
    {
      timestamps: true,
    },
  );

  const ResultSchema = mongoose.model("Result", resultSchema);
  export { ResultSchema };
