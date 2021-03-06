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
          title: "required string",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "../definitions/definitions.json#/name/properties/last"
          ]
        },
        last: {
          title: "required string",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "../definitions/definitions.json#/name/properties/last"
          ]
        },
        middle: {
          type: "string",
          minLength: 1
        },
        prefix: {
          title: "required string",
          type: "string",
          minLength: 3,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "../definitions/definitions.json#/name/properties/last",
            "definitions.json#/name/properties/prefix"
          ]
        },
        suffix: {
          title: "required string",
          type: "string",
          minLength: 3,
          maxLength: 3,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "../definitions/definitions.json#/name/properties/last",
            "definitions.json#/name/properties/prefix"
          ]
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
