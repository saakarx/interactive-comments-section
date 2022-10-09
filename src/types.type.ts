export type UserType = {
  image: { png: string; webp: string };
  username: string;
};
export type ReplyType = {
  id: number;
  createdAt: string;
  content: string;
  replyingTo: string;
  score: number;
  user: UserType;
};
export type CommentType = {
  id: number;
  content: string;
  replies: ReplyType[];
  score: number;
  createdAt: string;
  user: UserType;
};
