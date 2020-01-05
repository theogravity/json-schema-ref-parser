"use strict";

module.exports =
{
  definitions: {
    pet: {
      title: "pet",
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
      $originalRef: ["definitions/pet.yaml"],
    },
    thing: {
      $ref: "#/definitions/thing"
    },
    person: {
      title: "person",
      type: "object",
      properties: {
        spouse: {
          $ref: "#/definitions/person"
        },
        name: {
          type: "string"
        }
      },
      $originalRef: ["definitions/person.yaml"],
    },
    parent: {
      title: "parent",
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        children: {
          items: {
            $ref: "#/definitions/child"
          },
          type: "array"
        }
      },
      $originalRef: ["definitions/parent.yaml"]
    },
    child: {
      title: "child",
      type: "object",
      properties: {
        parents: {
          items: {
            $ref: "#/definitions/parent"
          },
          type: "array"
        },
        name: {
          type: "string"
        }
      },
      $originalRef: ["definitions/child.yaml"],
    }
  }
};
