"use strict";

module.exports =
{
  title: "Person",
  definitions: {
    "name-with-min-length": {
      "min-length": 1,
      type: "string",
      $originalRef: ["../definitions/strings.yaml#/definitions/string-with-min-length"],
    },
    "name-with-min-length-max-length": {
      "min-length": 1,
      "max-length": 20,
      type: "string",
      $originalRef: ["./strings.yaml#/definitions/string-with-min-length-max-length"],
    },
    name: {
      type: "string",
      $originalRef: ["strings.yaml#/definitions/string"],
    },
    $originalRef: ["definitions/definitions.json"],
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
