Blockly.Blocks['onclick'] = {
  init: function() {
    this.appendValueInput("blockClicked")
        .setCheck("Block")
        .appendField("On Player Click Event");
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("On Click");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['onsneakrelease'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Player Sneak Release Event");
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("When a player releases sneaks, run the code bellow");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_sneaking'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player Sneaking");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the player currently sneaking?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ability_selected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ability Selected");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the ability currently selected?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ability_usable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ability Usable")
        .appendField(new Blockly.FieldDropdown([["(Standard)","none"], ["Excluding Ability Selected","binds"], ["Excluding Cooldowns","cooldowns"], ["Excluding Ability Selected & Cooldowns","all"]]), "Ability Usable");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Can the player currently use this ability? Including binds, cooldowns and region protection?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_water'] = {
  init: function() {
    this.appendValueInput("pos")
        .setCheck("Block")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Is Water");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the block water?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_solid'] = {
  init: function() {
    this.appendValueInput("pos")
        .setCheck("Block")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Is Solid");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the block solid?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_air'] = {
  init: function() {
    this.appendValueInput("pos")
        .setCheck("Block")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Is Air");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the block air?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_feet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player Feet Position");
    this.setOutput(true, "Location");
    this.setColour(240);
 this.setTooltip("The position of the players feet");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_eyes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player Eye Position");
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("The position of the players eyes");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['position_relative'] = {
  init: function() {
    this.appendValueInput("position")
        .setCheck("Location")
        .appendField("Relative Position")
        .appendField(new Blockly.FieldNumber(0, -100, 100, 1), "X")
        .appendField(new Blockly.FieldNumber(0, -256, 256, 1), "Y")
        .appendField(new Blockly.FieldNumber(0, -100, 100, 1), "Z")
        .appendField("of");
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("Adjust the location relatively");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_looking_at'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player's Targeted Block. Max");
    this.appendDummyInput()
        .appendField("distance of")
        .appendField(new Blockly.FieldNumber(10, -100, 50, 1), "length")
        .appendField("blocks");
    this.setOutput(true, "Block");
    this.setColour(240);
 this.setTooltip("What block the player is looking at. Cannot be further away than the amount specified");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_earth'] = {
  init: function() {
    this.appendValueInput("pos")
        .setCheck("Block")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Is Earth");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the block air?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_bendable'] = {
  init: function() {
    this.appendValueInput("pos")
        .setCheck("Block")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Is")
        .appendField(new Blockly.FieldDropdown([["water","water"], ["plant","plant"], ["ice","ice"], ["earth","earth"], ["lava","lava"], ["metal","metal"], ["sand","sand"]]), "type")
        .appendField("bendable");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Is the block bendable by x benders?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['onsneak'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Player Sneak Event");
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("When a player sneaks, run the code bellow");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Block")
        .appendField("Set block to")
        .appendField(new Blockly.FieldTextInput("FIRE"), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Set a block to the specified type");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance between")
        .appendField(new Blockly.FieldVariable("block1"), "pos1")
        .appendField("&")
        .appendField(new Blockly.FieldVariable("block2"), "pos2");
    this.setOutput(true, "Number");
    this.setColour(240);
 this.setTooltip("Calculate the distance between the two positions");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['break_block'] = {
  init: function() {
    this.appendValueInput("pos")
        .setCheck("Block")
        .appendField("Break Block");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Is the player currently sneaking?");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Block")
        .appendField("Block matches")
        .appendField(new Blockly.FieldTextInput("FIRE"), "block");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("Check if the block provided matches fire");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_cooldown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Apply cooldown")
        .appendField(new Blockly.FieldNumber(5000, 0, 31536000000, 50), "cooldown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Apply a cooldown (in milliseconds)");
 this.setHelpUrl("");
  }
};