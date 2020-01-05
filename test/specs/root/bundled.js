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
      $originalRef: ["./name.yaml#/properties/first"],
    },
    first: {
      type: "string",
      $originalRef: ["./name.yaml#/properties/first"],
    }
  },
  $originalRef: ["name.yaml", "definitions/root.json"],
};
