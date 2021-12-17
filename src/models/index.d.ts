import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SocialPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SocialPost {
  readonly id: string;
  readonly message?: string;
  readonly postTime?: string;
  readonly postDate?: string;
  readonly sharesCount?: number;
  readonly crosspostCount?: number;
  readonly likesCount?: number;
  readonly author?: string;
  readonly profilePic?: string;
  readonly likedBy?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SocialPost, SocialPostMetaData>);
  static copyOf(source: SocialPost, mutator: (draft: MutableModel<SocialPost, SocialPostMetaData>) => MutableModel<SocialPost, SocialPostMetaData> | void): SocialPost;
}