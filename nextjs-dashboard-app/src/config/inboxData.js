export const inboxData = [
  {
    companyName: "Google",
    data: {
      companyLogo:
        "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      message:
        "Here is the invoice for the month of March. The payment deadline is on March 30, 2024, We encourage you to settle the payment before this date to avoid any potential delays. If you have any questions or need further assistance, please feel free to reach out. Thank you for your cooperation!",
      paymentType: "Payments",
      month: "January",
      year: 2024,
      date: "28 Jan 2024",
      invoice: [
        {
          invoiceId: `#${Math.floor(10000000 + Math.random() * 90000000)}`,
          invoiceDate: "7 Jan, 2024",
          dueDate: "15 Jan, 2024",
          billedTo: {
            name: "N&N Finance",
            email: "accountant@nnfinance.com",
            address: "856, IT Park, Dubai",
            phone: "+951106617786",
          },
          from: {
            companyName: "Google",
            email: "info@google.com",
            phone: "+1234567890",
            address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
          },
          productDescription: [
            {
              productName: "Product 1",
              quantity: 5,
              pricePerProduct: 10,
              totalProductPrice: 50,
            },
            {
              productName: "Product 2",
              quantity: 10,
              pricePerProduct: 20,
              totalProductPrice: 200,
            },
          ],
        },
      ],
    },
  },
  {
    companyName: "Amazon",
    data: {
      companyLogo:
        "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
      message:
        "Hellal We're excited to share the details of your GitHub Developer Ptan: Plan: GitHub Developer Plan, Billing Cycle: Monthly, Payments Due Date: March 28, 2024, Amount: $29.99. To keep enjoying the benefits of your plan, make sure to settle the payment before the due date. If you have any questions o...",
      paymentType: "Plan",
      month: "February",
      year: 2024,
      date: "26 Feb 2024",
      invoice: [
        {
          invoiceId: `#${Math.floor(10000000 + Math.random() * 90000000)}`,
          invoiceDate: "10 Feb, 2024",
          dueDate: "18 Feb, 2024",
          billedTo: {
            name: "N&N Finance",
            email: "accountant@nnfinance.com",
            address: "856, IT Park, Dubai",
            phone: "+951106617786",
          },
          from: {
            companyName: "Amazon",
            email: "info@amazon.com",
            phone: "+1234567890",
            address: "410 Terry Ave. North, Seattle, WA 98109-5210, USA",
          },
          productDescription: [
            {
              productName: "Product 1",
              quantity: 3,
              pricePerProduct: 15,
              totalProductPrice: 45,
            },
            {
              productName: "Product 2",
              quantity: 8,
              pricePerProduct: 25,
              totalProductPrice: 200,
            },
          ],
        },
      ],
    },
  },
  {
    companyName: "Spotify",
    data: {
      companyLogo:
        "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      message:
        "Hello! We've thrilled to share the details of your Microsoft subscription: Subscription: Microsoft 365 Business Premium, Billing Cycle: Annual, Payment Due Date: March 15, 2024, Amount: $199.99. To continue-accessing your Microsoft account and applications, please ensure the payment is made befor...",
      paymentType: "Subscriptions",
      month: "March",
      year: 2024,
      date: "24 March 2024",
      invoice: [
        {
          invoiceId: `#${Math.floor(10000000 + Math.random() * 90000000)}`,
          invoiceDate: "12 Mar, 2024",
          dueDate: "20 Mar, 2024",
          billedTo: {
            name: "N&N Finance",
            email: "accountant@nnfinance.com",
            address: "856, IT Park, Dubai",
            phone: "+951106617786",
          },
          from: {
            companyName: "Spotify",
            email: "info@spotify.com",
            phone: "+1234567890",
            address:
              "Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm, Sweden",
          },
          productDescription: [
            {
              productName: "Premium Subscription",
              quantity: 1,
              pricePerProduct: 99,
              totalProductPrice: 99,
            },
          ],
        },
      ],
    },
  },
];
