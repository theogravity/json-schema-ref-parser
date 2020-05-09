"use strict";

module.exports =
{
  title: "Person",
  type: "object",
  required: [
    "name"
  ],
  properties: {
    name: {
      title: "name",
      type: "object",
      required: [
        "first",
        "last"
      ],
      properties: {
        first: {
          $ref: "#/properties/name/properties/last"
        },
        last: {
          title: "required string",
          type: "string",
          minLength: 1,
          "x-original-ref": ["./required-string.yaml"],
        },
        middle: {
          type: {
            $ref: "#/properties/name/properties/last/type"
          },
          minLength: {
            $ref: "#/properties/name/properties/last/minLength"
          }
        },
        prefix: {
          $ref: "#/properties/name/properties/last",
          minLength: 3
        },
        suffix: {
          $ref: "#/properties/name/properties/prefix",
          type: "string",
          maxLength: 3
        }
      },
      "x-original-ref": ["definitions/definitions.json#/name"],
    },
    age: {
      type: "integer",
      minimum: 0,
      "x-original-ref": ["definitions/definitions.json#/age"],
    },
    gender: {
      type: "string",
      enum: [
        "male",
        "female"
      ],
      "x-original-ref": ["definitions/definitions.json#/gender"],
    }
  }
};
