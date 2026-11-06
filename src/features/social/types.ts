/** UI-facing domain contracts. No database or API implementation is implied. */
export type EntityId = string;
export type IsoDateTime = string;
export type WorldAccent = "lavender" | "coral" | "sand";
export type PostVisual = "lavender" | "coral" | "sand";

export interface UserProfile {
  id: EntityId;
  handle: string;
  displayName: string;
  bio: string;
  avatarUrl: string | null;
  joinedAt: IsoDateTime;
}

export interface World {
  id: EntityId;
  slug: string;
  name: string;
  description: string;
  symbol: string;
  accent: WorldAccent;
  memberCount: number;
  createdAt: IsoDateTime;
}

export interface Post {
  id: EntityId;
  authorId: EntityId;
  worldId: EntityId;
  body: string;
  createdAt: IsoDateTime;
  visual: PostVisual;
  likeCount: number;
  commentCount: number;
}

export type NotificationKind = "mention" | "reaction" | "world-update";

export interface Notification {
  id: EntityId;
  recipientId: EntityId;
  actorId: EntityId;
  kind: NotificationKind;
  postId: EntityId | null;
  worldId: EntityId | null;
  message: string;
  createdAt: IsoDateTime;
  read: boolean;
}
