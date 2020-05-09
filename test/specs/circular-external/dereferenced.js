"use strict";

const dereferencedSchema = module.exports =
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
      "x-original-ref": ["definitions/pet.yaml"],
    },
    thing: {
      $ref: "#/definitions/thing",
      "x-original-ref": ["circular-external.yaml#/definitions/thing"],
    },
    person: {
      title: "person",
      type: "object",
      properties: {
        spouse: null,
        name: {
          type: "string"
        }
      },
      "x-original-ref": ["definitions/person.yaml", "person.yaml"],
    },
    parent: {
      title: "parent",
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        children: {
          items: null,
          type: "array"
        }
      },
      "x-original-ref": ["definitions/parent.yaml", "parent.yaml"],
    },
    child: {
      title: "child",
      type: "object",
      properties: {
        parents: {
          items: null,
          type: "array"
        },
        name: {
          type: "string"
        }
      },
      "x-original-ref": ["child.yaml", "definitions/child.yaml"],
    }
  }
};

dereferencedSchema.definitions.person.properties.spouse = dereferencedSchema.definitions.person;
dereferencedSchema.definitions.parent.properties.children.items = dereferencedSchema.definitions.child;
dereferencedSchema.definitions.child.properties.parents.items = dereferencedSchema.definitions.parent;
