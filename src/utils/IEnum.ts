/** 动态内容类型枚举 */
export enum PostItemTypeEnum {
    /** 标题 */
    TITLE = 1,
    /** 文字段落 */
    TEXT = 2,
    /** 图片地址 */
    IMAGEURL = 3,
    /** 视频地址 */
    VIDEOURL = 4,
    /** 音频地址 */
    AUDIOURL = 5,
    /** 链接地址 */
    LINKURL = 6,
    /** 附件资源 */
    ATTACHMENT = 7,
    /** 收费资源 */
    CHARGEATTACHMENT = 8
}

/** 回复内容类型枚举 */
export enum CommentItemTypeEnum {
    /** 标题 */
    TITLE = 1,
    /** 文字段落 */
    TEXT = 2,
    /** 图片地址 */
    IMAGEURL = 3,
    /** 视频地址 */
    VIDEOURL = 4,
    /** 音频地址 */
    AUDIOURL = 5,
    /** 链接地址 */
    LINKURL = 6
}

/** 附件类型枚举 */
export enum AttachmentTypeEnum {
    /** 图片 */
    IMAGE = 1,
    /** 视频 */
    VIDEO = 2,
    /** 其他 */
    OTHER = 3
}

/** 消息类型枚举 */
export enum MessageTypeEnum {
    /** 动态 */
    POST = 1,
    /** 评论 */
    COMMENT = 2,
    /** 回复 */
    REPLY = 3,
    /** 私信 */
    PRIVATELETTER = 4,
    /** 系统通知 */
    SYSTEMNOTICE = 99
}

/** 动态可见度枚举 */
export enum VisibilityEnum {
    /** 公开 */
    PUBLIC,
    /** 私密 */
    PRIVATE,
    /** 好友可见 */
    FRIEND
}
