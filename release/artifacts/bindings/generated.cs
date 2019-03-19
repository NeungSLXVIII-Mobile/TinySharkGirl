using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.HitBox2D;
using UTiny.UILayout;
using UTiny.Text;
using UTiny.UIControls;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EnemyDamageGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EnemyGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace OverGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PlayerBulletGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PlayerDamageGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace TitleGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct DAMAGE_TIME : IComponentData
    {
        public float TIME;
    }
    public struct ENEMY_TAG : IComponentData
    {
    }
    public struct FIRE_RATE : IComponentData
    {
        public float TIME;
        public float DELAY_TIME;
    }
    public struct MOVE_AREA : IComponentData
    {
        public float MIN_X;
        public float MAX_X;
        public float MIN_Y;
        public float MAX_Y;
    }
    public struct MOVE_INPUT : IComponentData
    {
    }
    public struct MOVE_SPEED : IComponentData
    {
        public float SPEED;
    }
    public struct PLAYER_BULLET_TAG : IComponentData
    {
    }
    public struct PLAYER_TAG : IComponentData
    {
    }
    public struct SCROLLING_BG : IComponentData
    {
        public float ORIGIN_X;
        public float ORIGIN_Y;
        public float TARGET_X;
        public float TARGET_Y;
        public float SPEED_X;
        public float SPEED_Y;
    }
    public struct SPAWN_ENEMY : IComponentData
    {
        public float TIME;
        public float DELAY_TIME;
        public bool IS_PAUSED;
        public string SPAWN_GROUP;
    }
    public struct TITLE_TAG : IComponentData
    {
    }
    [Configuration]
    public struct GAME_DATA : IComponentData
    {
        public float SCORE;
        public int LEVEL;
        public int STATE;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct PostProcessing : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.HitBox2D
{
}

namespace ut.UILayout
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UIControls
{
}
namespace game
{
    public struct BGBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct Enemy1Behaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct PlayerBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct PlayerBulletBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(UTiny.HitBox2D.HitBox2DSystem))]
    public class CollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DamageTimeSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.CollisionSystemJS))]
    public class GameManagerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    public class InputMovementSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnEnemySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeStart))]
    public class TimeJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class BGBehaviour_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class BGBehaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class Enemy1Behaviour_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class Enemy1Behaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class PlayerBehaviour_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PlayerBehaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class PlayerBulletBehaviour_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PlayerBulletBehaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
