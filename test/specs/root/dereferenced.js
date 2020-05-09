"use strict";

module.exports =
{
  title: "Extending a root $ref",
  required: [
    "first",
    "last"
  ],
  type: "object",
  properties: {
    last: {
      type: "string",
      "x-original-ref": ["./name.yaml#/properties/first"],
    },
    first: {
      type: "string",
      "x-original-ref": ["./name.yaml#/properties/first"],
    }
  },
  "x-original-ref": ["name.yaml", "definitions/root.json"],
};
