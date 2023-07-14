import { Home, People, VerifiedUser } from "@mui/icons-material";
import { faker } from "@faker-js/faker";

type ListItem = {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
};

type Menu = {
  id: number;
  title: string;
  listItems: ListItem[];
};

export const menu: Menu[] = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: <Home />,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: <People />,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <VerifiedUser />,
      },
    ],
  },
];

export const topUsers = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  img: faker.image.avatar(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  amount: faker.finance.amount(),
}));
