var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var BGBehaviourFilter = /** @class */ (function (_super) {
        __extends(BGBehaviourFilter, _super);
        function BGBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BGBehaviourFilter;
    }(ut.EntityFilter));
    game.BGBehaviourFilter = BGBehaviourFilter;
    var BGBehaviour = /** @class */ (function (_super) {
        __extends(BGBehaviour, _super);
        function BGBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BGBehaviour.prototype.OnEntityEnable = function () {
            this.data._position.position = new Vector3(this.data._SCROLLING_BG.ORIGIN_X, this.data._SCROLLING_BG.ORIGIN_Y, 0);
        };
        BGBehaviour.prototype.OnEntityUpdate = function () {
            var vec3Position = this.data._position.position;
            var floatSpeedX = this.data._SCROLLING_BG.SPEED_X;
            var floatSpeedY = this.data._SCROLLING_BG.SPEED_Y;
            if (floatSpeedX > 0) {
                vec3Position.x += floatSpeedX;
                if (vec3Position.x >= this.data._SCROLLING_BG.TARGET_X) {
                    vec3Position.x = this.data._SCROLLING_BG.ORIGIN_X;
                }
            }
            if (floatSpeedX < 0) {
                vec3Position.x += floatSpeedX;
                if (vec3Position.x <= this.data._SCROLLING_BG.TARGET_X) {
                    vec3Position.x = this.data._SCROLLING_BG.ORIGIN_X;
                }
            }
            if (floatSpeedY > 0) {
                vec3Position.y += floatSpeedY * game.Time.deltaTime();
                if (vec3Position.y >= this.data._SCROLLING_BG.TARGET_Y) {
                    vec3Position.y = this.data._SCROLLING_BG.ORIGIN_Y;
                }
            }
            if (floatSpeedY < 0) {
                vec3Position.y += floatSpeedY * game.Time.deltaTime();
                if (vec3Position.y <= this.data._SCROLLING_BG.TARGET_Y) {
                    vec3Position.y = this.data._SCROLLING_BG.ORIGIN_Y;
                }
            }
            this.data._position.position = vec3Position;
        };
        return BGBehaviour;
    }(ut.ComponentBehaviour));
    game.BGBehaviour = BGBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    var CollisionSystem = /** @class */ (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            var _GAME_DATA = this.world.getConfigData(game.GAME_DATA);
            var boolIsGameOver = false;
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, ut.HitBox2D.HitBoxOverlapResults, game.PLAYER_BULLET_TAG], function (_entity, _position, _contacts, _TAG) {
                if (_contacts.overlaps.length == 0) {
                    return;
                }
                var _loop_1 = function (i) {
                    var _otherEntity = _contacts.overlaps[i].otherEntity;
                    if (!_this.world.exists(_otherEntity)) {
                        return "continue";
                    }
                    if (_this.world.hasComponent(_otherEntity, game.ENEMY_TAG)) {
                        var objEnemyDamage_1 = ut.EntityGroup.instantiate(_this.world, game.CollisionSystem.ENEMY_DAMAGE_GROUP)[0];
                        _this.world.usingComponentData(_otherEntity, [ut.Core2D.TransformLocalPosition], function (vec3EnemyPosition) {
                            _this.world.usingComponentData(objEnemyDamage_1, [ut.Core2D.TransformLocalPosition, game.DAMAGE_TIME], function (vec3EnemyDamagePosition, _DAMAGE_TIME) {
                                vec3EnemyDamagePosition.position = vec3EnemyPosition.position;
                                _DAMAGE_TIME.TIME = 24;
                            });
                        });
                        // Score.
                        _GAME_DATA.SCORE += 1;
                        if (_GAME_DATA.SCORE >= 0 && _GAME_DATA.SCORE < 50) {
                            _GAME_DATA.LEVEL = 1;
                        }
                        else if (_GAME_DATA.SCORE >= 50 && _GAME_DATA.SCORE < 150) {
                            _GAME_DATA.LEVEL = 2;
                        }
                        else if (_GAME_DATA.SCORE >= 150 && _GAME_DATA.SCORE < 300) {
                            _GAME_DATA.LEVEL = 3;
                        }
                        else if (_GAME_DATA.SCORE >= 300 && _GAME_DATA.SCORE < 550) {
                            _GAME_DATA.LEVEL = 4;
                        }
                        else {
                            _GAME_DATA.LEVEL = 5;
                        }
                        _this.world.destroyEntity(_entity);
                        _this.world.destroyEntity(_otherEntity);
                        return "break";
                    }
                };
                for (var i = 0; i < _contacts.overlaps.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
            });
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, ut.HitBox2D.HitBoxOverlapResults, game.PLAYER_TAG], function (_entity, _position, _contacts, _TAG) {
                if (_contacts.overlaps.length == 0) {
                    return;
                }
                for (var i = 0; i < _contacts.overlaps.length; i++) {
                    var _otherEntity = _contacts.overlaps[i].otherEntity;
                    if (!_this.world.exists(_otherEntity)) {
                        continue;
                    }
                    if (_this.world.hasComponent(_otherEntity, game.ENEMY_TAG)) {
                        var objSharkGirlDamage = ut.EntityGroup.instantiate(_this.world, game.CollisionSystem.PLAYER_DAMAGE_GROUP)[0];
                        _this.world.usingComponentData(objSharkGirlDamage, [ut.Core2D.TransformLocalPosition], function (vec3SharkGirlDamagePosition) {
                            vec3SharkGirlDamagePosition.position = _position.position;
                        });
                        _this.world.destroyEntity(_entity);
                        boolIsGameOver = true;
                        break;
                    }
                }
            });
            // Score.
            var enityScore = this.world.getEntityByName("TextScore");
            if (this.world.exists(enityScore)) {
                this.world.usingComponentData(enityScore, [ut.Text.Text2DRenderer], function (textScore) {
                    textScore.text = "Score : " + _GAME_DATA.SCORE + " Level : " + _GAME_DATA.LEVEL;
                });
            }
            if (boolIsGameOver) {
                _GAME_DATA.STATE = 3;
            }
            this.world.setConfigData(_GAME_DATA);
        };
        CollisionSystem.PLAYER_DAMAGE_GROUP = "game.PlayerDamageGroup";
        CollisionSystem.ENEMY_DAMAGE_GROUP = "game.EnemyDamageGroup";
        CollisionSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(ut.HitBox2D.HitBox2DSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.HitBox2D.HitBoxOverlapResults)
        ], CollisionSystem);
        return CollisionSystem;
    }(ut.ComponentSystem));
    game.CollisionSystem = CollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var DamageTimeSystem = /** @class */ (function (_super) {
        __extends(DamageTimeSystem, _super);
        function DamageTimeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DamageTimeSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.DAMAGE_TIME], function (_entity, _DAMAGE_TIME) {
                _DAMAGE_TIME.TIME = _DAMAGE_TIME.TIME - 1;
                if (_DAMAGE_TIME.TIME < 0) {
                    _this.world.destroyEntity(_entity);
                }
            });
        };
        return DamageTimeSystem;
    }(ut.ComponentSystem));
    game.DamageTimeSystem = DamageTimeSystem;
})(game || (game = {}));
var game;
(function (game) {
    var Enemy1BehaviourFilter = /** @class */ (function (_super) {
        __extends(Enemy1BehaviourFilter, _super);
        function Enemy1BehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Enemy1BehaviourFilter;
    }(ut.EntityFilter));
    game.Enemy1BehaviourFilter = Enemy1BehaviourFilter;
    var Enemy1Behaviour = /** @class */ (function (_super) {
        __extends(Enemy1Behaviour, _super);
        function Enemy1Behaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enemy1Behaviour.prototype.OnEntityEnable = function () {
            // Data.
            var _GAME_DATA = this.world.getConfigData(game.GAME_DATA);
            this.data._SPEED.SPEED = this.data._SPEED.SPEED + (50 * _GAME_DATA.LEVEL);
            var floatX = this.data._MOVE_AREA.MAX_X;
            var floatY = getRandom(this.data._MOVE_AREA.MIN_Y, this.data._MOVE_AREA.MAX_Y);
            var vec3Position = new Vector3(floatX, floatY, 0);
            this.data._position.position = vec3Position;
        };
        Enemy1Behaviour.prototype.OnEntityUpdate = function () {
            var vec3Position = this.data._position.position;
            vec3Position.x -= this.data._SPEED.SPEED * game.Time.deltaTime();
            this.data._position.position = vec3Position;
            if (vec3Position.x <= this.data._MOVE_AREA.MIN_X) {
                this.world.destroyEntity(this.data._enity);
            }
        };
        return Enemy1Behaviour;
    }(ut.ComponentBehaviour));
    game.Enemy1Behaviour = Enemy1Behaviour;
    function getRandom(min, max) {
        return Math.random() * (max - min - 1) + min;
    }
})(game || (game = {}));
var game;
(function (game) {
    var GameManagerSystem = /** @class */ (function (_super) {
        __extends(GameManagerSystem, _super);
        function GameManagerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameManagerSystem.prototype.OnUpdate = function () {
            var _GAME_DATA = this.world.getConfigData(game.GAME_DATA);
            switch (_GAME_DATA.STATE) {
                case 0:
                    {
                        game.GameService.initialize(this.world, _GAME_DATA);
                    }
                    break;
                case 1:
                    {
                        if (ut.Runtime.Input.getMouseButtonDown(0)) {
                            game.GameService.startGame(this.world, _GAME_DATA);
                        }
                    }
                    break;
                case 2:
                    {
                        //
                    }
                    break;
                case 3:
                    {
                        game.GameService.overGame(this.world, _GAME_DATA);
                    }
                    break;
                case 4:
                    {
                        if (ut.Runtime.Input.getMouseButtonDown(0)) {
                            game.GameService.initialize(this.world, _GAME_DATA);
                        }
                    }
                    break;
            }
            this.world.setConfigData(_GAME_DATA);
        };
        GameManagerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.CollisionSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], GameManagerSystem);
        return GameManagerSystem;
    }(ut.ComponentSystem));
    game.GameManagerSystem = GameManagerSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.initialize = function (world, _GAME_DATA) {
            game.Time.reset();
            ut.EntityGroup.destroyAll(world, this.OVER_GROUP);
            ut.EntityGroup.instantiate(world, this.TITLE_GROUP);
            _GAME_DATA.STATE = 1;
        };
        ;
        GameService.startGame = function (world, _GAME_DATA) {
            game.Time.reset();
            ut.EntityGroup.destroyAll(world, this.TITLE_GROUP);
            ut.EntityGroup.instantiate(world, this.MAIN_GROUP);
            // Data.
            _GAME_DATA.SCORE = 0;
            _GAME_DATA.LEVEL = 0;
            _GAME_DATA.STATE = 2;
        };
        ;
        GameService.overGame = function (world, _GAME_DATA) {
            game.Time.reset();
            ut.EntityGroup.destroyAll(world, this.MAIN_GROUP);
            ut.EntityGroup.destroyAll(world, this.ENEMY_GROUP);
            ut.EntityGroup.destroyAll(world, this.PLAYER_DAMAGE_GROUP);
            ut.EntityGroup.destroyAll(world, this.ENEMY_DAMAGE_GROUP);
            ut.EntityGroup.destroyAll(world, this.PLAYER_BULLET_GROUP);
            ut.EntityGroup.instantiate(world, this.OVER_GROUP);
            _GAME_DATA.STATE = 4;
        };
        ;
        GameService.TITLE_GROUP = 'game.TitleGroup';
        GameService.MAIN_GROUP = 'game.MainGroup';
        GameService.ENEMY_GROUP = 'game.EnemyGroup';
        GameService.PLAYER_DAMAGE_GROUP = 'game.PlayerDamageGroup';
        GameService.ENEMY_DAMAGE_GROUP = 'game.EnemyDamageGroup';
        GameService.PLAYER_BULLET_GROUP = 'game.PlayerBulletGroup';
        GameService.OVER_GROUP = 'game.OverGroup';
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    var InputMovementSystem = /** @class */ (function (_super) {
        __extends(InputMovementSystem, _super);
        function InputMovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputMovementSystem.prototype.OnUpdate = function () {
            var timeDelta = game.Time.deltaTime();
            this.world.forEach([game.MOVE_SPEED, game.MOVE_INPUT, game.MOVE_AREA, ut.Core2D.TransformLocalPosition], function (_SPEED, _TAG, _MOVE_AREA, _position) {
                var vec3Position = _position.position;
                vec3Position.y -= _SPEED.SPEED * timeDelta;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.UpArrow)) {
                    vec3Position.y += _SPEED.SPEED * 1.5 * timeDelta;
                }
                if (ut.Runtime.Input.getMouseButton(0)) {
                    vec3Position.y += _SPEED.SPEED * 1.5 * timeDelta;
                }
                vec3Position.x = Math.max(_MOVE_AREA.MIN_X, Math.min(_MOVE_AREA.MAX_X, vec3Position.x));
                vec3Position.y = Math.max(_MOVE_AREA.MIN_Y, Math.min(_MOVE_AREA.MAX_Y, vec3Position.y));
                _position.position = vec3Position;
            });
        };
        InputMovementSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence)
        ], InputMovementSystem);
        return InputMovementSystem;
    }(ut.ComponentSystem));
    game.InputMovementSystem = InputMovementSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PlayerBehaviourFilter = /** @class */ (function (_super) {
        __extends(PlayerBehaviourFilter, _super);
        function PlayerBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PlayerBehaviourFilter;
    }(ut.EntityFilter));
    game.PlayerBehaviourFilter = PlayerBehaviourFilter;
    var PlayerBehaviour = /** @class */ (function (_super) {
        __extends(PlayerBehaviour, _super);
        function PlayerBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerBehaviour.prototype.OnEntityEnable = function () {
            //
        };
        PlayerBehaviour.prototype.OnEntityUpdate = function () {
            var _this = this;
            var time = this.data._FIRE_RATE.TIME;
            var delay = this.data._FIRE_RATE.DELAY_TIME;
            time -= game.Time.deltaTime();
            if (time <= 0) {
                time += delay;
                var objPlayerBullet = ut.EntityGroup.instantiate(this.world, "game.PlayerBulletGroup")[0];
                this.world.usingComponentData(objPlayerBullet, [ut.Core2D.TransformLocalPosition], function (vec3PlayerBulletPosition) {
                    vec3PlayerBulletPosition.position = _this.data._position.position;
                });
            }
            this.data._FIRE_RATE.TIME = time;
        };
        return PlayerBehaviour;
    }(ut.ComponentBehaviour));
    game.PlayerBehaviour = PlayerBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    var PlayerBulletBehaviourFilter = /** @class */ (function (_super) {
        __extends(PlayerBulletBehaviourFilter, _super);
        function PlayerBulletBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PlayerBulletBehaviourFilter;
    }(ut.EntityFilter));
    game.PlayerBulletBehaviourFilter = PlayerBulletBehaviourFilter;
    var PlayerBulletBehaviour = /** @class */ (function (_super) {
        __extends(PlayerBulletBehaviour, _super);
        function PlayerBulletBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerBulletBehaviour.prototype.OnEntityEnable = function () {
            //
        };
        PlayerBulletBehaviour.prototype.OnEntityUpdate = function () {
            var vec3Position = this.data._position.position;
            vec3Position.x += this.data._SPEED.SPEED * game.Time.deltaTime();
            this.data._position.position = vec3Position;
            if (vec3Position.x >= this.data._MOVE_AREA.MAX_X) {
                this.world.destroyEntity(this.data._enity);
            }
        };
        return PlayerBulletBehaviour;
    }(ut.ComponentBehaviour));
    game.PlayerBulletBehaviour = PlayerBulletBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    var SpawnEnemySystem = /** @class */ (function (_super) {
        __extends(SpawnEnemySystem, _super);
        function SpawnEnemySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnEnemySystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.SPAWN_ENEMY], function (_spawnEnemy) {
                if (_spawnEnemy.IS_PAUSED) {
                    return;
                }
                var time = _spawnEnemy.TIME;
                var delay = _spawnEnemy.DELAY_TIME;
                time -= game.Time.deltaTime();
                if (time <= 0) {
                    time += delay;
                    ut.EntityGroup.instantiate(_this.world, _spawnEnemy.SPAWN_GROUP);
                }
                _spawnEnemy.TIME = time;
            });
        };
        return SpawnEnemySystem;
    }(ut.ComponentSystem));
    game.SpawnEnemySystem = SpawnEnemySystem;
})(game || (game = {}));
var game;
(function (game) {
    var Time = /** @class */ (function (_super) {
        __extends(Time, _super);
        function Time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Time_1 = Time;
        Time.deltaTime = function () {
            return Time_1._deltaTime;
        };
        Time.time = function () {
            return Time_1._time;
        };
        Time.reset = function () {
            Time_1._time = 0;
        };
        Time.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            Time_1._deltaTime = dt;
            Time_1._time += dt;
        };
        var Time_1;
        Time._deltaTime = 0;
        Time._time = 0;
        Time = Time_1 = __decorate([
            ut.executeBefore(ut.Shared.UserCodeStart)
        ], Time);
        return Time;
    }(ut.ComponentSystem));
    game.Time = Time;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map