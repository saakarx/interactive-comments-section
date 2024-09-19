export type User = {
  id: string;
  username: string;
  image: { png: string; webp: string };
};

export type ReplyType = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
};

export type CommentType = {
  id: number;
  content: string;
  replies: ReplyType[];
  score: number;
  createdAt: string;
  user: User;
};

export type IconProps = {
  className?: React.HTMLAttributes<SVGElement>['className'];
};
