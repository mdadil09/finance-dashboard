import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  PresentationChartBarIcon,
  ArrowLongDownIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";

export const cardData = [
  {
    icon: (
      <CurrencyDollarIcon
        style={{
          height: "1.5rem",
          width: "1.5rem",
          cursor: "pointer",
          color: "grey",
        }}
      />
    ),
    heading: "Earnings",
    dataDollar: "$928.41",
    dataPercentage: "12.8%",
    dataIcon: (
      <ArrowLongUpIcon
        style={{ height: "1rem", width: "1rem", cursor: "pointer" }}
      />
    ),
    revenue: "+$118",
    isLoss: false,
  },
  {
    icon: (
      <ShoppingCartIcon
        style={{
          height: "1.5rem",
          width: "1.5rem",
          cursor: "pointer",
          color: "grey",
        }}
      />
    ),
    heading: "Spendings",
    dataDollar: "$169.43",
    dataPercentage: "3.1%",
    dataIcon: (
      <ArrowLongDownIcon
        style={{ height: "1rem", width: "1rem", cursor: "pointer" }}
      />
    ),
    revenue: "-$5.2",
    isLoss: true,
  },
  {
    icon: (
      <BanknotesIcon
        style={{
          height: "1.5rem",
          width: "1.5rem",
          cursor: "pointer",
          color: "grey",
        }}
      />
    ),
    heading: "Savings",
    dataDollar: "$406.27",
    dataPercentage: "8.2%",
    dataIcon: (
      <ArrowLongUpIcon
        style={{ height: "1rem", width: "1rem", cursor: "pointer" }}
      />
    ),
    revenue: "+$33.3",
    isLoss: false,
  },
  {
    icon: (
      <PresentationChartBarIcon
        style={{
          height: "1.5rem",
          width: "1.5rem",
          cursor: "pointer",
          color: "grey",
        }}
      />
    ),
    heading: "Investment",
    dataDollar: "$1854.08",
    dataPercentage: "9.2%",
    dataIcon: (
      <ArrowLongUpIcon
        style={{ height: "1rem", width: "1rem", cursor: "pointer" }}
      />
    ),
    revenue: "+$78.5",
    isLoss: false,
  },
];
