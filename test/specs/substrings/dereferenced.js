"use strict";

module.exports =
{
  title: "Person",
  definitions: {
    "name-with-min-length": {
      "min-length": 1,
      type: "string",
      "x-original-ref": [
        "#/definitions/name-with-min-length",
        "../definitions/strings.yaml#/definitions/string-with-min-length"
      ]
    },
    "name-with-min-length-max-length": {
      "min-length": 1,
      "max-length": 20,
      type: "string",
      "x-original-ref": [
        "#/definitions/name-with-min-length-max-length",
        "./strings.yaml#/definitions/string-with-min-length-max-length"
      ]
    },
    name: {
      type: "string",
      "x-original-ref": ["#/definitions/name", "strings.yaml#/definitions/string"],
    },
    "x-original-ref": ["definitions/definitions.json"],
  },
  required: [
    "name"
  ],
  type: "object",
  properties: {
    middleName: {
      "min-length": 1,
      type: "string",
      "x-original-ref": [
        "#/definitions/name-with-min-length",
        "../definitions/strings.yaml#/definitions/string-with-min-length"
      ]
    },
    lastName: {
      "min-length": 1,
      "max-length": 20,
      type: "string",
      "x-original-ref": [
        "#/definitions/name-with-min-length-max-length",
        "./strings.yaml#/definitions/string-with-min-length-max-length"
      ]
    },
    firstName: {
      type: "string",
      "x-original-ref": ["#/definitions/name", "strings.yaml#/definitions/string"],
    }
  },
};
