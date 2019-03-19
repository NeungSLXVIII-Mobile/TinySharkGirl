declare namespace entities.game.Bootstrap {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.EnemyDamageGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.EnemyGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.MainGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.OverGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.PlayerBulletGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.PlayerDamageGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.TitleGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class DAMAGE_TIME extends ut.Component {
  constructor(TIME?: number);
  TIME: number;
  static readonly TIME: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DAMAGE_TIME): DAMAGE_TIME;
  static _toPtr(p: number, v: DAMAGE_TIME): void;
  static _tempHeapPtr(v: DAMAGE_TIME): number;
  static _dtorFn(v: DAMAGE_TIME): void;
}

}
declare namespace game {

class ENEMY_TAG extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ENEMY_TAG): ENEMY_TAG;
  static _toPtr(p: number, v: ENEMY_TAG): void;
  static _tempHeapPtr(v: ENEMY_TAG): number;
  static _dtorFn(v: ENEMY_TAG): void;
}

}
declare namespace game {

class FIRE_RATE extends ut.Component {
  constructor(TIME?: number, DELAY_TIME?: number);
  TIME: number;
  DELAY_TIME: number;
  static readonly TIME: ComponentFieldDesc;
  static readonly DELAY_TIME: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: FIRE_RATE): FIRE_RATE;
  static _toPtr(p: number, v: FIRE_RATE): void;
  static _tempHeapPtr(v: FIRE_RATE): number;
  static _dtorFn(v: FIRE_RATE): void;
}

}
declare namespace game {

class MOVE_AREA extends ut.Component {
  constructor(MIN_X?: number, MAX_X?: number, MIN_Y?: number, MAX_Y?: number);
  MIN_X: number;
  MAX_X: number;
  MIN_Y: number;
  MAX_Y: number;
  static readonly MIN_X: ComponentFieldDesc;
  static readonly MAX_X: ComponentFieldDesc;
  static readonly MIN_Y: ComponentFieldDesc;
  static readonly MAX_Y: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MOVE_AREA): MOVE_AREA;
  static _toPtr(p: number, v: MOVE_AREA): void;
  static _tempHeapPtr(v: MOVE_AREA): number;
  static _dtorFn(v: MOVE_AREA): void;
}

}
declare namespace game {

class MOVE_INPUT extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MOVE_INPUT): MOVE_INPUT;
  static _toPtr(p: number, v: MOVE_INPUT): void;
  static _tempHeapPtr(v: MOVE_INPUT): number;
  static _dtorFn(v: MOVE_INPUT): void;
}

}
declare namespace game {

class MOVE_SPEED extends ut.Component {
  constructor(SPEED?: number);
  SPEED: number;
  static readonly SPEED: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MOVE_SPEED): MOVE_SPEED;
  static _toPtr(p: number, v: MOVE_SPEED): void;
  static _tempHeapPtr(v: MOVE_SPEED): number;
  static _dtorFn(v: MOVE_SPEED): void;
}

}
declare namespace game {

class PLAYER_BULLET_TAG extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PLAYER_BULLET_TAG): PLAYER_BULLET_TAG;
  static _toPtr(p: number, v: PLAYER_BULLET_TAG): void;
  static _tempHeapPtr(v: PLAYER_BULLET_TAG): number;
  static _dtorFn(v: PLAYER_BULLET_TAG): void;
}

}
declare namespace game {

class PLAYER_TAG extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PLAYER_TAG): PLAYER_TAG;
  static _toPtr(p: number, v: PLAYER_TAG): void;
  static _tempHeapPtr(v: PLAYER_TAG): number;
  static _dtorFn(v: PLAYER_TAG): void;
}

}
declare namespace game {

class SCROLLING_BG extends ut.Component {
  constructor(ORIGIN_X?: number, ORIGIN_Y?: number, TARGET_X?: number, TARGET_Y?: number, SPEED_X?: number, SPEED_Y?: number);
  ORIGIN_X: number;
  ORIGIN_Y: number;
  TARGET_X: number;
  TARGET_Y: number;
  SPEED_X: number;
  SPEED_Y: number;
  static readonly ORIGIN_X: ComponentFieldDesc;
  static readonly ORIGIN_Y: ComponentFieldDesc;
  static readonly TARGET_X: ComponentFieldDesc;
  static readonly TARGET_Y: ComponentFieldDesc;
  static readonly SPEED_X: ComponentFieldDesc;
  static readonly SPEED_Y: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SCROLLING_BG): SCROLLING_BG;
  static _toPtr(p: number, v: SCROLLING_BG): void;
  static _tempHeapPtr(v: SCROLLING_BG): number;
  static _dtorFn(v: SCROLLING_BG): void;
}

}
declare namespace game {

class SPAWN_ENEMY extends ut.Component {
  constructor(TIME?: number, DELAY_TIME?: number, IS_PAUSED?: boolean, SPAWN_GROUP?: string);
  TIME: number;
  DELAY_TIME: number;
  IS_PAUSED: boolean;
  SPAWN_GROUP: string;
  static readonly TIME: ComponentFieldDesc;
  static readonly DELAY_TIME: ComponentFieldDesc;
  static readonly IS_PAUSED: ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SPAWN_ENEMY): SPAWN_ENEMY;
  static _toPtr(p: number, v: SPAWN_ENEMY): void;
  static _tempHeapPtr(v: SPAWN_ENEMY): number;
  static _dtorFn(v: SPAWN_ENEMY): void;
}

}
declare namespace game {

class TITLE_TAG extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TITLE_TAG): TITLE_TAG;
  static _toPtr(p: number, v: TITLE_TAG): void;
  static _tempHeapPtr(v: TITLE_TAG): number;
  static _dtorFn(v: TITLE_TAG): void;
}

}
declare namespace game {

class GAME_DATA extends ut.Component {
  constructor(SCORE?: number, LEVEL?: number, STATE?: number);
  SCORE: number;
  LEVEL: number;
  STATE: number;
  static readonly SCORE: ComponentFieldDesc;
  static readonly LEVEL: ComponentFieldDesc;
  static readonly STATE: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GAME_DATA): GAME_DATA;
  static _toPtr(p: number, v: GAME_DATA): void;
  static _tempHeapPtr(v: GAME_DATA): number;
  static _dtorFn(v: GAME_DATA): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.Core2D.layers {

class PostProcessing extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PostProcessing): PostProcessing;
  static _toPtr(p: number, v: PostProcessing): void;
  static _tempHeapPtr(v: PostProcessing): number;
  static _dtorFn(v: PostProcessing): void;
}

}
declare namespace ut.Core2D.layers {

class Cutscene extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Cutscene): Cutscene;
  static _toPtr(p: number, v: Cutscene): void;
  static _tempHeapPtr(v: Cutscene): number;
  static _dtorFn(v: Cutscene): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {

class BGBehaviour_State extends ut.Component {
  constructor(initialized?: boolean, enabled?: boolean, onEnableCalled?: boolean, onDisableCalled?: boolean);
  initialized: boolean;
  enabled: boolean;
  onEnableCalled: boolean;
  onDisableCalled: boolean;
  static readonly initialized: ComponentFieldDesc;
  static readonly enabled: ComponentFieldDesc;
  static readonly onEnableCalled: ComponentFieldDesc;
  static readonly onDisableCalled: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: BGBehaviour_State): BGBehaviour_State;
  static _toPtr(p: number, v: BGBehaviour_State): void;
  static _tempHeapPtr(v: BGBehaviour_State): number;
  static _dtorFn(v: BGBehaviour_State): void;
}

}
declare namespace game {

class Enemy1Behaviour_State extends ut.Component {
  constructor(initialized?: boolean, enabled?: boolean, onEnableCalled?: boolean, onDisableCalled?: boolean);
  initialized: boolean;
  enabled: boolean;
  onEnableCalled: boolean;
  onDisableCalled: boolean;
  static readonly initialized: ComponentFieldDesc;
  static readonly enabled: ComponentFieldDesc;
  static readonly onEnableCalled: ComponentFieldDesc;
  static readonly onDisableCalled: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Enemy1Behaviour_State): Enemy1Behaviour_State;
  static _toPtr(p: number, v: Enemy1Behaviour_State): void;
  static _tempHeapPtr(v: Enemy1Behaviour_State): number;
  static _dtorFn(v: Enemy1Behaviour_State): void;
}

}
declare namespace game {

class PlayerBehaviour_State extends ut.Component {
  constructor(initialized?: boolean, enabled?: boolean, onEnableCalled?: boolean, onDisableCalled?: boolean);
  initialized: boolean;
  enabled: boolean;
  onEnableCalled: boolean;
  onDisableCalled: boolean;
  static readonly initialized: ComponentFieldDesc;
  static readonly enabled: ComponentFieldDesc;
  static readonly onEnableCalled: ComponentFieldDesc;
  static readonly onDisableCalled: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerBehaviour_State): PlayerBehaviour_State;
  static _toPtr(p: number, v: PlayerBehaviour_State): void;
  static _tempHeapPtr(v: PlayerBehaviour_State): number;
  static _dtorFn(v: PlayerBehaviour_State): void;
}

}
declare namespace game {

class PlayerBulletBehaviour_State extends ut.Component {
  constructor(initialized?: boolean, enabled?: boolean, onEnableCalled?: boolean, onDisableCalled?: boolean);
  initialized: boolean;
  enabled: boolean;
  onEnableCalled: boolean;
  onDisableCalled: boolean;
  static readonly initialized: ComponentFieldDesc;
  static readonly enabled: ComponentFieldDesc;
  static readonly onEnableCalled: ComponentFieldDesc;
  static readonly onDisableCalled: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerBulletBehaviour_State): PlayerBulletBehaviour_State;
  static _toPtr(p: number, v: PlayerBulletBehaviour_State): void;
  static _tempHeapPtr(v: PlayerBulletBehaviour_State): number;
  static _dtorFn(v: PlayerBulletBehaviour_State): void;
}

}
declare namespace game {
var CollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var DamageTimeSystemJS: ut.SystemJS;
}
declare namespace game {
var GameManagerSystemJS: ut.SystemJS;
}
declare namespace game {
var InputMovementSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnEnemySystemJS: ut.SystemJS;
}
declare namespace game {
var TimeJS: ut.SystemJS;
}
declare namespace game {
var BGBehaviour_OnEntityEnableJS: ut.SystemJS;
}
declare namespace game {
var BGBehaviour_OnEntityUpdateJS: ut.SystemJS;
}
declare namespace game {
var Enemy1Behaviour_OnEntityEnableJS: ut.SystemJS;
}
declare namespace game {
var Enemy1Behaviour_OnEntityUpdateJS: ut.SystemJS;
}
declare namespace game {
var PlayerBehaviour_OnEntityEnableJS: ut.SystemJS;
}
declare namespace game {
var PlayerBehaviour_OnEntityUpdateJS: ut.SystemJS;
}
declare namespace game {
var PlayerBulletBehaviour_OnEntityEnableJS: ut.SystemJS;
}
declare namespace game {
var PlayerBulletBehaviour_OnEntityUpdateJS: ut.SystemJS;
}


declare namespace Module {

}

