/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Workspace } from '../workspace.js';
/**
 * Abstract class for an event.
 *
 * @alias Blockly.Events.Abstract
 */
export declare abstract class Abstract {
    /**
     * Whether or not the event was constructed without necessary parameters
     * (to be populated by fromJson).
     */
    abstract isBlank: boolean;
    /** The workspace identifier for this event. */
    workspaceId?: string;
    group: string;
    recordUndo: boolean;
    /** Whether or not the event is a UI event. */
    isUiEvent: boolean;
    /** Type of this event. */
    type: string;
    /** @alias Blockly.Events.Abstract */
    constructor();
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): AbstractEventJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: AbstractEventJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of Abstract (like all events), but we can't specify that due to the
     *     fact that parameters to static methods in subclasses must be
     *     supertypes of parameters to static methods in superclasses.
     * @internal
     */
    static fromJson(json: AbstractEventJson, workspace: Workspace, event: any): Abstract;
    /**
     * Does this event record any change of state?
     *
     * @returns True if null, false if something changed.
     */
    isNull(): boolean;
    /**
     * Run an event.
     *
     * @param _forward True if run forward, false if run backward (undo).
     */
    run(_forward: boolean): void;
    /**
     * Get workspace the event belongs to.
     *
     * @returns The workspace the event belongs to.
     * @throws {Error} if workspace is null.
     * @internal
     */
    getEventWorkspace_(): Workspace;
}
export interface AbstractEventJson {
    type: string;
    group: string;
}
//# sourceMappingURL=events_abstract.d.ts.map