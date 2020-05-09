"use strict";

module.exports = {
  type: "object",
  required: ["user", "token"],
  properties: {
    token: {
      type: "string"
    },
    user: {
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string"
        }
      },
      example: {
        name: "Homer",
        "x-original-ref": ["definitions.yaml#/User/example"],
      },
      "x-original-ref": ["definitions.yaml#/User"],
    }
  },
  example: {
    token: "11111111",
    user: {
      name: "Homer",
      "x-original-ref": ["definitions.yaml#/User/example"],
    }
  }
};
