"use strict";

module.exports =
{
  definitions: {
    foo: {
      $ref: "foo://bar.baz"
    },
    pet: {
      $ref: "definitions/pet.yaml"
    },
    name: {
      required: [
        "first",
        "last"
      ],
      type: "object",
      properties: {
        last: {
          minLength: 1,
          type: "string",
          $originalRef: ["#/definitions/name/properties/first"],
        },
        first: {
          minLength: 1,
          type: "string",
          $originalRef: ["#/definitions/name/properties/first"],
        }
      },
      $originalRef: ["#/definitions/name"],
    }
  },
  required: [
    "name"
  ],
  type: "object",
  properties: {
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
        last: {
          minLength: 1,
          type: "string",
          $originalRef: ["#/definitions/name/properties/first"]
        },
        first: {
          minLength: 1,
          type: "string",
          $originalRef: ["#/definitions/name/properties/first"]
        }
      },
      $originalRef: ["#/definitions/name"],
    }
  },
  title: "Person"
};
