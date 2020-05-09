"use strict";

const dereferencedSchema = module.exports =
{
  self: {
    definitions: {
      thing: {
        title: "thing",
        $ref: "#/definitions/thing",
        description: "This JSON Reference has additional properties (other than $ref). Normally, this creates a new type that extends the referenced type, but since this reference points to ITSELF, it doesn't do that.\n",
        "x-original-ref": ["definitions/thing.yaml"],
      }
    }
  },

  pet: {
    title: "pet",
    type: "object",
    properties: {
      age: {
        type: "number",
        "x-original-ref": ["animals.yaml#/definitions/bird/properties/age"],
      },
      name: {
        type: "string",
        "x-original-ref": ["animals.yaml#/definitions/dog/properties/name"],
      },
      species: {
        type: "string",
        enum: [
          "cat",
          "dog",
          "bird",
          "fish"
        ],
      },
    },
    "x-original-ref": ["definitions/pet.yaml"],
  },

  ancestor: {
    fullyDereferenced: {
      definitions: {
        person: {
          title: "person",
          properties: {
            spouse: {
              title: "person",
              description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "person".\n',
              properties: null,
              "x-original-ref": ["definitions/person-with-spouse.yaml", "person-with-spouse.yaml"],
            },
            pet: {
              description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "pet".\n',
              title: "pet",
              type: "object",
              properties: null,
              "x-original-ref": ["pet.yaml"],
            },
            name: {
              type: "string",
            }
          },
          "x-original-ref": ["definitions/person-with-spouse.yaml", "person-with-spouse.yaml"],
        },
        pet: null
      }
    },

    ignoreCircular$Refs: {
      definitions: {
        person: {
          $ref: "definitions/person-with-spouse.yaml",
        },
        pet: null
      }
    }
  },

  indirect: {
    fullyDereferenced: {
      definitions: {
        parent: {
          title: "parent",
          properties: {
            name: {
              type: "string"
            },
            children: {
              items: {
                title: "child",
                description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "child".\n',
                properties: null,
                "x-original-ref": ["child-with-parents.yaml"]
              },
              type: "array"
            }
          },
          "x-original-ref": ["definitions/parent-with-children.yaml", "parent-with-children.yaml"],
        },
        child: {
          title: "child",
          properties: {
            parents: {
              items: {
                title: "parent",
                description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "parent".\n',
                properties: null,
                "x-original-ref": ["definitions/parent-with-children.yaml", "parent-with-children.yaml"]
              },
              type: "array"
            },
            pet: {
              description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "pet".\n',
              title: "pet",
              type: "object",
              properties: null,
              "x-original-ref": ["pet.yaml"],
            },
            name: {
              type: "string"
            }
          },
          "x-original-ref": ["definitions/child-with-parents.yaml"],
        },
        pet: null
      }
    },

    ignoreCircular$Refs: {
      definitions: {
        parent: {
          $ref: "definitions/parent-with-children.yaml"
        },
        child: {
          $ref: "definitions/child-with-parents.yaml"
        },
        pet: null
      }
    }
  },

  indirectAncestor: {
    fullyDereferenced: {
      definitions: {
        pet: null,
        parent: {
          title: "parent",
          properties: {
            name: {
              type: "string"
            },
            child: {
              description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "child".\n',
              title: "child",
              properties: null,
              "x-original-ref": ["child-with-children.yaml"],
            }
          },
          "x-original-ref": [
            "definitions/parent-with-child.yaml"
          ],
        },
        child: {
          title: "child",
          properties: {
            pet: {
              description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "pet".\n',
              title: "pet",
              type: "object",
              properties: null,
              "x-original-ref": ["pet.yaml"],
            },
            name: {
              type: "string"
            },
            children: {
              items: {
                description: 'This JSON Reference has additional properties (other than $ref). This creates a new type that extends "child".\n',
                title: "child",
                properties: null,
                "x-original-ref": ["child-with-children.yaml"],
              },
              type: "array",
              description: "children"
            },
          },
          "x-original-ref": ["definitions/child-with-children.yaml"],
        }
      }
    },

    ignoreCircular$Refs: {
      definitions: {
        pet: null,
        parent: {
          $ref: "definitions/parent-with-child.yaml"
        },
        child: {
          $ref: "definitions/child-with-children.yaml"
        }
      }
    }
  }
};
dereferencedSchema.ancestor.fullyDereferenced.definitions.pet =
  dereferencedSchema.ancestor.ignoreCircular$Refs.definitions.pet =
  dereferencedSchema.indirect.fullyDereferenced.definitions.pet =
  dereferencedSchema.indirect.ignoreCircular$Refs.definitions.pet =
  dereferencedSchema.indirectAncestor.fullyDereferenced.definitions.pet =
  dereferencedSchema.indirectAncestor.ignoreCircular$Refs.definitions.pet =
  dereferencedSchema.pet;

dereferencedSchema.ancestor.fullyDereferenced.definitions.person.properties.pet.properties =
  dereferencedSchema.indirect.fullyDereferenced.definitions.child.properties.pet.properties =
  dereferencedSchema.indirectAncestor.fullyDereferenced.definitions.child.properties.pet.properties =
  dereferencedSchema.ancestor.fullyDereferenced.definitions.pet.properties;

dereferencedSchema.ancestor.fullyDereferenced.definitions.person.properties.spouse.properties =
  dereferencedSchema.ancestor.fullyDereferenced.definitions.person.properties;

dereferencedSchema.indirect.fullyDereferenced.definitions.parent.properties.children.items.properties =
  dereferencedSchema.indirect.fullyDereferenced.definitions.child.properties;

dereferencedSchema.indirect.fullyDereferenced.definitions.child.properties.parents.items.properties =
  dereferencedSchema.indirect.fullyDereferenced.definitions.parent.properties;

dereferencedSchema.indirectAncestor.fullyDereferenced.definitions.parent.properties.child.properties =
  dereferencedSchema.indirectAncestor.fullyDereferenced.definitions.child.properties;

dereferencedSchema.indirectAncestor.fullyDereferenced.definitions.child.properties.children.items.properties =
  dereferencedSchema.indirectAncestor.fullyDereferenced.definitions.child.properties;
