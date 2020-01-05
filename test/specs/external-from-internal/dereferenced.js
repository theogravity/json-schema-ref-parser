"use strict";

module.exports =
{
  internal1: {
    test: {
      type: "string",
      $originalRef: ["definitions.yaml#/thing"],
    },
    $originalRef: ["#/internal2", "#/external1"],
  },
  internal2: {
    test: {
      type: "string",
      $originalRef: ["definitions.yaml#/thing"],
    },
    $originalRef: ["#/internal2", "#/external1"],
  },
  internal3: {
    test: {
      type: "string",
      $originalRef: ["definitions.yaml#/thing"],
    },
    $originalRef: ["#/internal4", "#/external2"],
  },
  internal4: {
    test: {
      type: "string",
      $originalRef: ["definitions.yaml#/thing"],
    },
    $originalRef: ["#/internal4", "#/external2"],
  },
  external1: {
    test: {
      type: "string",
      $originalRef: ["definitions.yaml#/thing"],
    },
    $originalRef: ["#/internal2", "#/external1"],
  },
  external2: {
    test: {
      type: "string",
      $originalRef: ["definitions.yaml#/thing"],
    },
    $originalRef: ["#/internal4", "#/external2"],
  }
};
