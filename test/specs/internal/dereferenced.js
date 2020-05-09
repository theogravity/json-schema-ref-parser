"use strict";

module.exports =
{
  definitions: {
    fragment: {
      $id: "#fragment"
    },
    requiredString: {
      title: "requiredString",
      minLength: 1,
      type: "string",
      "x-original-ref": [
        "#/definitions/requiredString",
        "#/definitions/name/properties/first",
        "#/definitions/name/properties/last"
      ]
    },
    name: {
      required: [
        "first",
        "last"
      ],
      type: "object",
      properties: {
        first: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last"
          ]
        },
        last: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last"
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
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last",
            "#/definitions/name/properties/prefix"
          ]
        },
        suffix: {
          title: "requiredString",
          type: "string",
          minLength: 3,
          maxLength: 3,
          "x-original-ref": [
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last",
            "#/definitions/name/properties/prefix"
          ]
        }
      },
      "x-original-ref": ["#/definitions/name"],
    }
  },
  required: [
    "name"
  ],
  type: "object",
  properties: {
    fragment: {
      $ref: "#fragment"
    },
    gender: {
      enum: [
        "male",
        "female"
      ],
      type: "string"
    },
    age: {
      minimum: 0,
      type: "integer"
    },
    name: {
      required: [
        "first",
        "last"
      ],
      type: "object",
      properties: {
        first: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last"
          ]
        },
        last: {
          title: "requiredString",
          type: "string",
          minLength: 1,
          "x-original-ref": [
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last"
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
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last",
            "#/definitions/name/properties/prefix"
          ]
        },
        suffix: {
          title: "requiredString",
          type: "string",
          minLength: 3,
          maxLength: 3,
          "x-original-ref": [
            "#/definitions/requiredString",
            "#/definitions/name/properties/first",
            "#/definitions/name/properties/last",
            "#/definitions/name/properties/prefix"
          ]
        }
      },
      "x-original-ref": ["#/definitions/name"],
    }
  },
  title: "Person"
};
