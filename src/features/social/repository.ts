import { demoNotifications, demoPosts, demoUsers, demoWorlds } from "./fixtures";
import type { EntityId, Notification, Post, UserProfile, World } from "./types";

/**
 * Read-only in-memory adapter for Phase 1E.
 * Replace with an async API adapter later without changing page data contracts.
 * Do not expose mutable fixture arrays to callers.
 */
const users: readonly UserProfile[] = demoUsers;
const worlds: readonly World[] = demoWorlds;
const posts: readonly Post[] = demoPosts;
const notifications: readonly Notification[] = demoNotifications;

export interface SocialRepository {
  listUsers(): readonly UserProfile[];
  getUser(id: EntityId): UserProfile | undefined;
  listWorlds(): readonly World[];
  getWorld(id: EntityId): World | undefined;
  listPosts(): readonly Post[];
  listNotifications(recipientId: EntityId): readonly Notification[];
}

export const demoSocialRepository: SocialRepository = {
  listUsers: () => [...users],
  getUser: (id) => users.find((user) => user.id === id),
  listWorlds: () => [...worlds],
  getWorld: (id) => worlds.find((world) => world.id === id),
  listPosts: () => [...posts].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  listNotifications: (recipientId) => notifications.filter((notice) => notice.recipientId === recipientId),
};
