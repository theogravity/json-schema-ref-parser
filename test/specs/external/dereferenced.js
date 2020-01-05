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
          $originalRef: ["../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "required-string.yaml"
          ]
        },
        last: {
          title: "required string",
          type: "string",
          minLength: 1,
          $originalRef: ["../definitions/definitions.json#/required string",
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
          title: "required string",
          type: "string",
          minLength: 3,
          $originalRef: ["../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        },
        suffix: {
          title: "required string",
          type: "string",
          minLength: 3,
          maxLength: 3,
          $originalRef: ["../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        }
      },
      $originalRef: ["#/definitions/name", "../definitions/name.yaml"]
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
    "required string": {
      title: "required string",
      type: "string",
      minLength: 1,
      $originalRef: [
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
          $originalRef: ["../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "required-string.yaml"
          ]
        },
        last: {
          title: "required string",
          type: "string",
          minLength: 1,
          $originalRef: ["../definitions/definitions.json#/required string",
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
          title: "required string",
          type: "string",
          minLength: 3,
          $originalRef: ["../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        },
        suffix: {
          title: "required string",
          type: "string",
          minLength: 3,
          maxLength: 3,
          $originalRef: ["../definitions/definitions.json#/required string",
            "./required-string.yaml",
            "#/properties/last",
            "#/properties/prefix"
          ]
        }
      },
      $originalRef: ["#/definitions/name", "../definitions/name.yaml"],
    },
    $originalRef: ["definitions/definitions.json"],
  }
};
