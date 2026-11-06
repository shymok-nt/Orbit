import type { Notification, Post, UserProfile, World } from "./types";

/** Deterministic sample data for previews only; never represent these as real users. */
export const demoUsers = [
  { id: "user-maya", handle: "mayamakes", displayName: "Maya Chen", bio: "Making things for the joy of it.", avatarUrl: null, joinedAt: "2026-10-01T10:00:00.000Z" },
  { id: "user-leo", handle: "leocreates", displayName: "Leo Rivera", bio: "Small moments and creative projects.", avatarUrl: null, joinedAt: "2026-10-02T11:00:00.000Z" },
  { id: "user-guest", handle: "orbitguest", displayName: "Orbit Guest", bio: "A preview-only visitor.", avatarUrl: null, joinedAt: "2026-10-03T12:00:00.000Z" },
] satisfies UserProfile[];

export const demoWorlds = [
  { id: "world-design", slug: "design-club", name: "Design Club", description: "Make, share, inspire.", symbol: "✳", accent: "lavender", memberCount: 1248, createdAt: "2026-10-01T10:00:00.000Z" },
  { id: "world-slow", slug: "slow-sundays", name: "Slow Sundays", description: "Find joy in little things.", symbol: "☀", accent: "coral", memberCount: 863, createdAt: "2026-10-02T10:00:00.000Z" },
  { id: "world-code", slug: "creative-coding", name: "Creative Coding", description: "Ideas meet technology.", symbol: "⌘", accent: "sand", memberCount: 642, createdAt: "2026-10-03T10:00:00.000Z" },
] satisfies World[];

export const demoPosts = [
  { id: "post-maya-1", authorId: "user-maya", worldId: "world-design", body: "A little reminder to make things just for the joy of making them. What's inspiring you lately?", createdAt: "2026-11-06T14:00:00.000Z", visual: "lavender", likeCount: 128, commentCount: 24 },
  { id: "post-leo-1", authorId: "user-leo", worldId: "world-slow", body: "Today's mood: fresh coffee, a good playlist, and finally finishing that side project. ☀️", createdAt: "2026-11-06T11:00:00.000Z", visual: "coral", likeCount: 86, commentCount: 12 },
] satisfies Post[];

export const demoNotifications = [
  { id: "notice-1", recipientId: "user-guest", actorId: "user-maya", kind: "world-update", postId: null, worldId: "world-design", message: "Design Club has a new community highlight.", createdAt: "2026-11-06T15:00:00.000Z", read: false },
] satisfies Notification[];
