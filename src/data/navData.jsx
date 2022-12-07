const nav = [
  {
    id: 1,
    name: "Dolandyryş",
    path: "/management",
  },
  {
    id: 2,
    name: "Bannerlar",
    path: "/banners",
  },
  {
    id: 3,
    name: "Kuponlar",
    path: "/coupons",
  },
  {
    id: 4,
    name: "Hatlar",
    path: "/messages",
    notificationClassName: "inbox",
    messages: 4,
  },
  {
    id: 5,
    name: "Teswirler",
    path: "/requests",
  },
  {
    id: 6,
    name: "Sazlamalar",
    path: "/fixations",
  },
];

export const sidebar = [
  {
    id: 1,
    text: "Dolandyryş",
    path: "/management",
  },
  {
    id: 2,
    text: "Bazar",
    isIcon: true,
    subMenu: [
      {
        id: 1,
        text: "Dolandyryş",
        path: "/marketmanagement",
      },
      {
        id: 2,
        text: "Bannerlar",
        path: "/banners",
      },
      {
        id: 3,
        text: "Kuponlar",
        path: "/coupons",
      },
      {
        id: 4,
        text: "Hatlar",
        path: "/messages",
      },
      {
        id: 5,
        text: "Teswirler",
        path: "/requests",
      },
      {
        id: 6,
        text: "Sazlamalar",
        path: "/fixations",
      },
    ],
  },
  {
    id: 3,
    text: "Önümler",
    path: "/products",
  },
  {
    id: 4,
    text: "Sargytlar",
    path: "/orders",
  },
  {
    id: 5,
    text: "Müşderiler",
    path: "/customers",
  },
  {
    id: 6,
    text: "Mahabat",
    path: "/advertisement",
  },
  {
    id: 7,
    text: "Ulanyjylar",
    path: "/users",
  },
];

export default nav;
