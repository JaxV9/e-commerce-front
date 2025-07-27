export type User = {
  name: string;
  email: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  comments: String[];
};
