"use strict";

module.exports =
{
  definitions: {
    foo: {
      bar: {
        baz: "hello world"
      },
      $originalRef: ["foo://bar.baz"],
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
          $originalRef: ["#/definitions/name/properties/first"],
        }
      },
      $originalRef: ["#/definitions/name"],
    },
    pet: {
      type: "object",
      properties: {
        age: {
          type: "number"
        },
        name: {
          type: "string"
        },
        species: {
          enum: [
            "cat",
            "dog",
            "bird",
            "fish"
          ],
          type: "string"
        }
      },
      title: "pet",
      $originalRef: ["definitions/pet.yaml"],
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
  title: "Person"
};
