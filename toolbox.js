const toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Logic",
      "categorystyle": "logic_category",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if",
          "name": "If"
        },
        {
          "kind": "block",
          "type": "controls_if",
          "name": "If else",
          "extraState": {
            "hasElse": "true"
          }
        },
        {
          "kind": "block",
          "type": "logic_compare",
          "name": "Compare"
        },
        {
          "kind": "block",
          "type": "logic_operation",
          "name": "Operation"
        },
        {
          "kind": "block",
          "type": "logic_negate",
          "name": "Not"
        },
        {
          "kind": "block",
          "type": "logic_boolean",
          "name": "Boolean"
        },
        {
          "kind": "block",
          "type": "logic_null",
          "name": "Null"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Loops",
      "categorystyle": "loop_category",
      "contents": [
        {
          "kind": "block",
          "type": "controls_repeat_ext",
          "inputs": {
            "TIMES": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 10
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
        {
          "kind": "block",
          "type": "controls_for",
          "fields": {
            "VAR": "i"
          },
          "inputs": {
            "FROM": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 1
                }
              }
            },
            "TO": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 10
                }
              }
            },
            "BY": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 1
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "controls_forEach"
        },
        {
          "kind": "block",
          "type": "controls_flow_statements"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Math",
      "categorystyle": "math_category",
      "contents": [
        {
          "kind": "block",
          "type": "math_number",
          "fields": {
            "NUM": 123
          }
        },
        {
          "kind": "block",
          "type": "math_arithmetic",
          "fields": {
            "OP": "ADD"
          }
        },
        {
          "kind": "block",
          "type": "math_single",
          "fields": {
            "OP": "ROOT"
          }
        },
        {
          "kind": "block",
          "type": "math_trig",
          "fields": {
            "OP": "SIN"
          }
        },
        {
          "kind": "block",
          "type": "math_constant",
          "fields": {
            "CONSTANT": "PI"
          }
        },
        {
          "kind": "block",
          "type": "math_number_property",
          "extraState": "<mutation divisor_input=\"false\"></mutation>",
          "fields": {
            "PROPERTY": "EVEN"
          }
        },
        {
          "kind": "block",
          "type": "math_round",
          "fields": {
            "OP": "ROUND"
          }
        },
        {
          "kind": "block",
          "type": "math_on_list",
          "extraState": "<mutation op=\"SUM\"></mutation>",
          "fields": {
            "OP": "SUM"
          }
        },
        {
          "kind": "block",
          "type": "math_modulo"
        },
        {
          "kind": "block",
          "type": "math_constrain",
          "inputs": {
            "LOW": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 1
                }
              }
            },
            "HIGH": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 100
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_random_int",
          "inputs": {
            "FROM": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 1
                }
              }
            },
            "TO": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 100
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_random_float"
        },
        {
          "kind": "block",
          "type": "math_atan2"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Lists",
      "categorystyle": "list_category",
      "contents": [
        {
          "kind": "block",
          "type": "lists_create_empty"
        },
        {
          "kind": "block",
          "type": "lists_create_with",
          "extraState": {
            "itemCount": 3
          }
        },
        {
          "kind": "block",
          "type": "lists_repeat",
          "inputs": {
            "NUM": {
              "block": {
                "type": "math_number",
                "fields": {
                  "NUM": 5
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_length"
        },
        {
          "kind": "block",
          "type": "lists_isEmpty"
        },
        {
          "kind": "block",
          "type": "lists_indexOf",
          "fields": {
            "END": "FIRST"
          }
        },
        {
          "kind": "block",
          "type": "lists_getIndex",
          "fields": {
            "MODE": "GET",
            "WHERE": "FROM_START"
          }
        },
        {
          "kind": "block",
          "type": "lists_setIndex",
          "fields": {
            "MODE": "SET",
            "WHERE": "FROM_START"
          }
        }
      ]
    },
    {
      "kind": "sep"
    },
    {
      "kind": "category",
      "name": "Variables",
      "categorystyle": "variable_category",
      "custom": "VARIABLE"
    },
    {
      "kind": "category",
      "name": "Functions",
      "categorystyle": "procedure_category",
      "custom": "PROCEDURE"
    },
    {
      "kind": "sep"
    },
    {
      "kind": "category",
      "name": "Events",
      "expanded": "true",
      "contents": [
        {
          "kind": "block",
          "type": "onclick",
          "name": "On Click",
        },
        {
          "kind": "block",
          "type": "onsneak",
          "name": "On Sneak",
        },
        {
          "kind": "block",
          "type": "onsneakrelease",
          "name": "On Sneak Release",
        }
      ]
    },
    {
      "kind": "category",
      "name": "Player",
      "expanded": "true",
      "contents": [
        {
          "kind": "block",
          "type": "player_sneaking",
          "name": "Player Sneaking",
        },
        {
          "kind": "block",
          "type": "player_feet",
          "name": "On Sneak",
        },
        {
          "kind": "block",
          "type": "player_eyes",
          "name": "On Sneak Release",
        },
        {
          "kind": "block",
          "type": "player_looking_at",
          "name": "Player Looking At"
        },
        {
          "kind": "block",
          "type": "ability_usable",
          "name": "Ability Usable",
        },
        {
          "kind": "block",
          "type": "ability_selected",
          "name": "Ability Selected",
        },
        {
          "kind": "block",
          "type": "set_cooldown",
          "name": "Apply Cooldown",
        }
      ]
    },
    {
      "kind": "category",
      "name": "Blocks",
      "expanded": "true",
      "contents": [
        {
          "kind": "block",
          "type": "is_water",
          "name": "Is Water",
        },
        {
          "kind": "block",
          "type": "is_solid",
          "name": "Is Solid",
        },
        {
          "kind": "block",
          "type": "is_air",
          "name": "Is Air",
        },
        {
          "kind": "block",
          "type": "is_earth",
          "name": "Is Earth",
        },
        {
          "kind": "block",
          "type": "is_bendable",
          "name": "Is Bendable"
        },
        {
          "kind": "block",
          "type": "position_relative",
          "name": "Position Relative"
        },
        {
          "kind": "block",
          "type": "block_distance",
          "name": "Block Distance"
        },
        {
          "kind": "block",
          "type": "set_block",
          "name": "Set Block"
        },
        {
          "kind": "block",
          "type": "break_block",
          "name": "Break Block"
        }
      ]
    },
    {
      "kind": "sep",
    },
    {
      "kind": "category",
      "name": "Library",
      "expanded": "false",
      "contents": [
        {
          "kind": "category",
          "name": "Dig Ability",
          "contents": [
            {
              "kind": "block",
              "type": "onsneak",
              "next": {
                "block": {
                  "type": "variables_set",
                  "fields": {
                    "VAR": {
                      "name": "below"
                    }
                  },
                  "inputs": {
                    "VALUE": {
                      "block": {
                        "type": "position_relative",
                        "fields": {
                          "X": 0,
                          "Y": -1,
                          "Z": 0
                        },
                        "inputs": {
                          "position": {
                            "block": {
                              "type": "player_feet",
                            }
                          }
                        }
                      }
                    }
                  },
                  "next": {
                    "block": {
                      "type": "controls_if",
                      "inputs": {
                        "IF0": {
                          "block": {
                            "type": "logic_operation",
                            "fields": {
                              "OP": "AND"
                            },
                            "inputs": {
                              "A": {
                                "block": {
                                  "type": "ability_selected",
                                }
                              },
                              "B": {
                                "block": {
                                  "type": "ability_usable",
                                  "fields": {
                                    "Ability Usable": "none"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "DO0": {
                          "block": {
                            "type": "controls_if",
                            "inputs": {
                              "IF0": {
                                "block": {
                                  "type": "logic_operation",
                                  "fields": {
                                    "OP": "AND"
                                  },
                                  "inputs": {
                                    "A": {
                                      "block": {
                                        "type": "is_bendable",
                                        "fields": {
                                          "type": "earth"
                                        },
                                        "inputs": {
                                          "pos": {
                                            "block": {
                                              "type": "variables_get",
                                              "fields": {
                                                "VAR": {
                                                  "name": "below"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "B": {
                                      "block": {
                                        "type": "is_solid",
                                        "inputs": {
                                          "pos": {
                                            "block": {
                                              "type": "variables_get",
                                              "fields": {
                                                "VAR": {
                                                  "name": "below"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "DO0": {
                                "block": {
                                  "type": "break_block",
                                  "inputs": {
                                    "pos": {
                                      "block": {
                                        "type": "variables_get",
                                        "fields": {
                                          "VAR": {
                                            "name": "below"
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "next": {
                                    "block": {
                                      "type": "set_cooldown",
                                      "fields": {
                                        "cooldown": 1000
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ]
};