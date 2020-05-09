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
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last"
          ],
        },
        last: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last"
          ]
        },
        middle: {
          type: "string",
          minLength: 1
        },
        prefix: {
          title: "requiredString",
          type: "string",
          minLength: 3,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        },
        suffix: {
          title: "requiredString",
          type: "string",
          minLength: 3,
          maxLength: 3,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        }
      },
      "x-original-ref": ["../definitions/name.yaml", "#/definitions/name"]
    },
    age: {
      type: "integer",
      minimum: 0,
    },
    gender: {
      type: "string",
      enum: [
        "male",
        "female"
      ],
    }
  },
  definitions: {
    requiredString: {
      title: "requiredString",
      type: "string",
      minLength: 1,
      "x-original-ref": [
        "required-string.yaml",
        "../definitions/definitions.json#/requiredString",
        "./required-string.yaml",
        "#/properties/last"
      ]
    },
    string: "string",
    name: {
      title: "name",
      type: "object",
      required: [
        "first",
        "last"
      ],
      properties: {
        first: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last"
          ]
        },
        last: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last"
          ]
        },
        middle: {
          type: "string",
          minLength: 1
        },
        prefix: {
          title: "requiredString",
          type: "string",
          minLength: 3,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        },
        suffix: {
          title: "requiredString",
          type: "string",
          minLength: 3,
          maxLength: 3,
          "x-original-ref": [
            "required-string.yaml",
            "../definitions/definitions.json#/requiredString",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        }
      },
      "x-original-ref": ["../definitions/name.yaml", "#/definitions/name"],
    },
    "x-original-ref": ["definitions/definitions.json"],
  }
};
