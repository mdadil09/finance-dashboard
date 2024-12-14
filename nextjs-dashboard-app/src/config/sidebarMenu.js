import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ChartBarSquareIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

export const sidebarMenu = [
  {
    id: 1,
    icon: (
      <PresentationChartBarIcon
        style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
      />
    ),
    name: "Dashboard",
    isActive: false,
    url: "/dashboard",
  },
  {
    id: 2,
    icon: (
      <ChartBarSquareIcon
        style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
      />
    ),
    name: "Statistics",
    isActive: false,
    url: "/dashboard/statistics",
  },
  {
    id: 3,
    icon: (
      <InboxIcon
        style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
      />
    ),
    name: "Inbox",
    isActive: false,
    url: "/dashboard/inbox",
  },
  {
    id: 4,
    icon: (
      <CreditCardIcon
        style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
      />
    ),
    name: "Transactions",
    isActive: false,
    url: "/dashboard/transactions",
  },
  {
    id: 5,
    icon: (
      <UserCircleIcon
        style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
      />
    ),
    name: "Profile",
    isActive: false,
    url: "/dashboard/profile",
  },
  {
    icon: (
      <Cog6ToothIcon
        style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
      />
    ),
    name: "Settings",
    isActive: false,
    url: "/dashboard/settings",
  },
];
