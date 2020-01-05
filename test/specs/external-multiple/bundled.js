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
        name: "Homer"
      },
      $originalRef: ["definitions.yaml#/User"],
    }
  },
  example: {
    token: "11111111",
    user: {
      $ref: "#/properties/user/example"
    }
  }
};
