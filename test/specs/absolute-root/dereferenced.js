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
            "#/properties/last",
            "required-string.yaml"
          ]
        },
        last: {
          title: "required string",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "required-string.yaml"
          ]
        },
        middle: {
          type: "string",
          minLength: 1
        },
        prefix: {
          minLength: 3,
          title: "required string",
          type: "string",
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        },
        suffix: {
          type: "string",
          maxLength: 3,
          minLength: 3,
          title: "required string",
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        }
      },
      "x-original-ref": [
        "#/definitions/name",
        "../definitions/name.yaml"
      ]
    },
    age: {
      type: "integer",
      minimum: 0
    },
    gender: {
      type: "string",
      enum: [
        "male",
        "female"
      ]
    }
  },
  definitions: {
    "required string": {
      title: "required string",
      type: "string",
      minLength: 1,
      "x-original-ref": [
        "../definitions/definitions.json#/required string",
        "./required-string.yaml",
        "#/properties/last",
        "required-string.yaml"
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
          title: "required string",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "required-string.yaml"
          ]
        },
        last: {
          title: "required string",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "required-string.yaml"
          ]
        },
        middle: {
          type: "string",
          minLength: 1
        },
        prefix: {
          minLength: 3,
          title: "required string",
          type: "string",
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        },
        suffix: {
          type: "string",
          maxLength: 3,
          minLength: 3,
          title: "required string",
          "x-original-ref": [
            "../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        }
      },
      "x-original-ref": [
        "#/definitions/name",
        "../definitions/name.yaml"
      ]
    },
    "x-original-ref": [
      "definitions/definitions.json"
    ]
  }
};
