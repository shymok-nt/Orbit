import type { Post, UserProfile, World } from "./types";
import { demoSocialRepository } from "./repository";

export interface FeedItem {
  post: Post;
  author: UserProfile;
  world: World;
}

/** Join related entities by stable IDs rather than duplicating author/world text. */
export function getDemoFeed(): FeedItem[] {
  return demoSocialRepository.listPosts().flatMap((post) => {
    const author = demoSocialRepository.getUser(post.authorId);
    const world = demoSocialRepository.getWorld(post.worldId);
    return author && world ? [{ post, author, world }] : [];
  });
}

export function getFeaturedWorlds(): readonly World[] {
  return demoSocialRepository.listWorlds();
}
