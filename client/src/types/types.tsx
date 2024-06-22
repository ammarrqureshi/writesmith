export interface PostType {
  id: number;
  title: string;
  desc: string;
  img: string;
  username: string;
  createdAt: Date;
  timeToRead: string;
}

export interface AuthorType {
  id: number;
  name: string;
  designation: string;
  joinedDate: Date;
  avatar: string;
}
