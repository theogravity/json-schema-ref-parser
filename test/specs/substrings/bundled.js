"use strict";

module.exports =
{
  title: "Person",
  definitions: {
    "name-with-min-length": {
      "min-length": 1,
      type: "string",
      "x-original-ref": ["../definitions/strings.yaml#/definitions/string-with-min-length"],
    },
    "name-with-min-length-max-length": {
      "min-length": 1,
      "max-length": 20,
      type: "string",
      "x-original-ref": ["./strings.yaml#/definitions/string-with-min-length-max-length"],
    },
    name: {
      type: "string",
      "x-original-ref": ["strings.yaml#/definitions/string"],
    },
    "x-original-ref": ["definitions/definitions.json"],
  },
  required: [
    "name"
  ],
  type: "object",
  properties: {
    middleName: {
      $ref: "#/definitions/name-with-min-length"
    },
    lastName: {
      $ref: "#/definitions/name-with-min-length-max-length"
    },
    firstName: {
      $ref: "#/definitions/name"
    }
  },
};
