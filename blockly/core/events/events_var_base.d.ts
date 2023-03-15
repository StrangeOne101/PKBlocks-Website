/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { VariableModel } from '../variable_model.js';
import { Abstract as AbstractEvent, AbstractEventJson } from './events_abstract.js';
import type { Workspace } from '../workspace.js';
/**
 * Abstract class for a variable event.
 *
 * @alias Blockly.Events.VarBase
 */
export declare class VarBase extends AbstractEvent {
    isBlank: boolean;
    varId?: string;
    /**
     * @param opt_variable The variable this event corresponds to.  Undefined for
     *     a blank event.
     */
    constructor(opt_variable?: VariableModel);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): VarBaseJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: VarBaseJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of VarBase, but we can't specify that due to the fact that parameters
     *     to static methods in subclasses must be supertypes of parameters to
     *     static methods in superclasses.
     * @internal
     */
    static fromJson(json: VarBaseJson, workspace: Workspace, event?: any): VarBase;
}
export interface VarBaseJson extends AbstractEventJson {
    varId: string;
}
//# sourceMappingURL=events_var_base.d.ts.map