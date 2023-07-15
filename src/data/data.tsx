import { Home, People, PeopleAlt, VerifiedUser } from "@mui/icons-material";
import { faker } from "@faker-js/faker";
import { ChartBoxProps } from "../components/chartBox/ChartBox";

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

export const chartBoxUser: ChartBoxProps = {
  color: "#8884d8",
  icon: <PeopleAlt/>,
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    {name: "Sun", users: 400},
    {name: "Mon", users: 600},
    {name: "Tue", users: 500},
    {name: "Wed", users: 700},
    {name: "Thu", users: 400},
    {name: "Fri", users: 500},
    {name: "Sat", users: 450},
    
  ]
}
