import {
  Home,
  People,
  PeopleAlt,
  ProductionQuantityLimits,
  ReviewsRounded,
  VerifiedUser,
} from "@mui/icons-material";
import { faker } from "@faker-js/faker";
import { ChartBoxProps } from "../components/chartBox/ChartBox";
import { BarChartBoxProps } from "../components/barChartBox/BarChartBox";

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
  icon: <PeopleAlt />,
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct: ChartBoxProps = {
  color: "skyblue",
  icon: <ProductionQuantityLimits />,
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue: ChartBoxProps = {
  color: "teal",
  icon: <ReviewsRounded />,
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion: ChartBoxProps = {
  color: "gold",
  icon: <PeopleAlt />,
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue: BarChartBoxProps = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ]
}

export const barChartBoxVisit: BarChartBoxProps = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};
