import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import {
  BoltIcon,
  FolderIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const metricsData = [
  {
    icon: (
      <FolderIcon
        style={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          color: "#007fff",
        }}
      />
    ),
    name: "Unique Clients",
    day: "last 30 days",
    value: "400",
    percentage: "20%",
    percentageIcon: (
      <ArrowUpRightIcon
        style={{
          height: "0.75rem",
          width: "0.75rem",
          cursor: "pointer",
        }}
      />
    ),
  },

  {
    icon: (
      <MapPinIcon
        style={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          color: "#007fff",
        }}
      />
    ),
    name: "Regions",
    day: "last 30 days",
    value: "25",
    percentage: "25%",
    percentageIcon: (
      <ArrowUpRightIcon
        style={{
          height: "0.75rem",
          width: "0.75rem",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    icon: (
      <BoltIcon
        style={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          color: "#007fff",
        }}
      />
    ),
    name: "Lead Alerts",
    day: "last 30 days",
    value: "400",
    percentage: "20%",
    percentageIcon: (
      <ArrowUpRightIcon
        style={{
          height: "0.75rem",
          width: "0.75rem",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    icon: (
      <UserGroupIcon
        style={{
          height: "1rem",
          width: "1rem",
          cursor: "pointer",
          color: "#007fff",
        }}
      />
    ),
    name: "Clients",
    day: "last 30 days",
    value: "600",
    percentage: "30%",
    percentageIcon: (
      <ArrowUpRightIcon
        style={{
          height: "0.75rem",
          width: "0.75rem",
          cursor: "pointer",
        }}
      />
    ),
  },
];

export const assetsData = [
  { name: "Average annual return", value: 7.96, isProfit: null },
  { name: "Best 12-month return", value: 76.57, isProfit: true },
  { name: "Worst 12-month return", value: -20.32, isProfit: false },
];
