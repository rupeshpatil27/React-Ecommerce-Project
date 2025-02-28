import { icons, categoryBarImagepath } from "./Path";

export const HeaderNavItem = [
  {
    title: "Login",
    img: icons.Account,
    path: "/auth",
  },
  {
    title: "Cart",
    img: icons.cart,
    path: "/cart",
  },
  {
    title: "wishlist",
    img: icons.heart,
    path: "/wishlist",
  },
  {
    title: "Customer Care",
    img: icons.customercare,
    path: "/cart",
  },
];

export const DropDownMenuItem = [
  {
    title: "My Profile",
    img: icons.Account,
    path: "/",
    authorized: false,
  },
  {
    title: "wishlist",
    img: icons.heart,
    path: "/wishlist",
    authorized: false,
  },
  {
    title: "Orders",
    img: icons.oders,
    path: "/orders",
    authorized: false,
  },
  {
    title: "Notifications",
    img: icons.notification,
    path: "/Notifications",
    authorized: true,
  },
  {
    title: "Logout",
    img: icons.logout,
    path: "",
    authorized: true,
  },
];

export const CategoriesBarItem = [
  {
    title: "Grocery",
    img: categoryBarImagepath.grocery,
    path: "/Grocery-store",
  },
  {
    title: "Mobile",
    img: categoryBarImagepath.mobile,
    path: "/Mobile-phone-store",
  },
  {
    title: "Fashion",
    img: categoryBarImagepath.fashion,
    path: "/product-list",
  },
  {
    title: "Electronics",
    img: categoryBarImagepath.electronics,
    path: "",
  },
  {
    title: "Furniture",
    img: categoryBarImagepath.furniture,
    path: "",
  },
  {
    title: "Tvs & Appliences",
    img: categoryBarImagepath.appliences,
    path: "",
  },
  {
    title: "Travel",
    img: categoryBarImagepath.aroplane,
    path: "",
  },
  {
    title: "Toys",
    img: categoryBarImagepath.toys,
    path: "",
  },
];

export const CategoriesNavItem = [
  {
    title: "Grocery",
    path: "/Grocery-store",
  },
  {
    title: "Mobile",
    path: "/mobile-phone-store",
  },
  {
    title: "Electronics",
    path: "",
  },
  {
    title: "TVs & Appliances",
    path: "",
  },
  {
    title: "Men",
    path: "",
  },
  {
    title: "Women",
    path: "",
  },
  {
    title: "Baby & Kids",
    path: "",
  },
  {
    title: "Home & Furniture",
    path: "",
  },
  {
    title: "Flight Booking",
    path: "/booking",
  },
];

export const megaMenuData = [
  {
    megaMenuTitle: {
      Electronics: [
        {
          menu: [
            {
              Navtitle: "Mobiles",
              path: "/Mobiles",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Mi",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Realme",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Samsung",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Infinix",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "OPPO",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Apple",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Vivo",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Honor",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Asus",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Poco X2",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "realme Narzo 10",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Infinix Hot 9",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "IQOO 3",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "iPhone SE",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Motorola razr",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "realme Narzo 10A",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Motorola g8 power lite",
                  path: "/Mobiles",
                  NavCategory: false,
                },
              ],
            },
          ],
        },
        {
          menu: [
            {
              Navtitle: "Mobile Accessories",
              path: "/Mobile-Accessories",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Mobile Cases",
                  path: "/Mobile-Cases",
                  NavCategory: false,
                },
                {
                  Navtitle: "Headphones & Headsets",
                  path: "/Headphones",
                  NavCategory: false,
                },
                {
                  Navtitle: "Power Banks",
                  path: "/Power-Banks",
                  NavCategory: false,
                },
                {
                  Navtitle: "Screenguards",
                  path: "/Screenguards",
                  NavCategory: false,
                },
                {
                  Navtitle: "Memory Cards",
                  path: "/Memory-Cards",
                  NavCategory: false,
                },
                {
                  Navtitle: "Smart Headphones",
                  path: "/Smart-Headphones",
                  NavCategory: false,
                },
                {
                  Navtitle: "Mobile Cables",
                  path: "/Mobile-Cables",
                  NavCategory: false,
                },
                {
                  Navtitle: "Mobile Chargers",
                  path: "/Mobile-Chargers",
                  NavCategory: false,
                },
                {
                  Navtitle: "Mobile Holders",
                  path: "/Mobile-Holders",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Smart Wearable Tech",
              path: "/Smart-Wearable-Tech",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Smart Watches",
                  path: "/Smart-Watches",
                  NavCategory: false,
                },
                {
                  Navtitle: "Smart Glasses (VR)",
                  path: "/Smart-Glasses",
                  NavCategory: false,
                },
                {
                  Navtitle: "Smart-Bands",
                  path: "/Smart-Bands",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Health Care Appliances",
              path: "/Health-Care-Appliances",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Bp Monitors",
                  path: "/Bp-Monitors",
                  NavCategory: false,
                },
                {
                  Navtitle: "Weighing Scale",
                  path: "/Weighing-Scale",
                  NavCategory: false,
                },
              ],
            },
          ],
        },
        {
          menu: [
            {
              Navtitle: "Laptops",
              path: "/Laptops",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Gaming Laptops",
                  path: "/Gaming-Laptops",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Desktop PCs",
              path: "/Desktop-PCs",
              NavCategory: true,
              subMenu: [],
            },
            {
              Navtitle: "Gaming & Accessories",
              path: "/Gaming-Accessories",
              NavCategory: true,
              subMenu: [],
            },
            {
              Navtitle: "Computer Accessories",
              path: "/Computer-Accessories",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "External Hard Disks",
                  path: "/External-Hard-Disks",
                  NavCategory: false,
                },
                {
                  Navtitle: "Pendrives",
                  path: "/Pendrives",
                  NavCategory: false,
                },
                {
                  Navtitle: "Laptop Skins & Decals",
                  path: "/Laptop-Skins-Decals",
                  NavCategory: false,
                },
                {
                  Navtitle: "Laptop Bags",
                  path: "/Laptop-Bags",
                  NavCategory: false,
                },
                {
                  Navtitle: "Mouse",
                  path: "/Mouse",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Computer Peripherals",
              path: "/Computer-Peripherals",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Printers & Ink Cartridges",
                  path: "/Printers",
                  NavCategory: false,
                },
                {
                  Navtitle: "Monitors",
                  path: "/Monitors",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Tablets",
              path: "/Tablets",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Apple iPads",
                  path: "/Apple-iPads",
                  NavCategory: false,
                },
              ],
            },
          ],
        },
        {
          menu: [
            {
              Navtitle: "Speakers",
              path: "/Speakers",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Home Audio Speakers",
                  path: "/Home-Audio-Speakers",
                  NavCategory: false,
                },
                {
                  Navtitle: "Home Theatres",
                  path: "/Home-Theatres",
                  NavCategory: false,
                },
                {
                  Navtitle: "Soundbars",
                  path: "/Soundbars",
                  NavCategory: false,
                },
                {
                  Navtitle: "Bluetooth Speakers",
                  path: "/Bluetooth-Speakers",
                  NavCategory: false,
                },
                {
                  Navtitle: "DTH Set Top Box",
                  path: "/DTH-Set-Top-Box",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Smart Home Automation",
              path: "/Smart-Home-Automation",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Google Nest",
                  path: "/Google-Nest",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Camera",
              path: "/Camera",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "DSLR & Mirrorless",
                  path: "/DSLR-Mirrorless",
                  NavCategory: false,
                },
                {
                  Navtitle: "Compact & Bridge Cameras",
                  path: "/Compact-Bridge-Cameras",
                  NavCategory: false,
                },
                {
                  Navtitle: "Sports & Action",
                  path: "/Sports",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Camera Accessories",
              path: "/Camera-Accessories",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Lens",
                  path: "/Lens",
                  NavCategory: false,
                },
                {
                  Navtitle: "Tripods",
                  path: "/Tripods",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Network Components",
              path: "/Network-Components",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Routers",
                  path: "/Routers",
                  NavCategory: false,
                },
              ],
            },
          ],
        },
        {
          menu: [
            {
              Navtitle: "Featured",
              path: "/Featured",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Google Assistant Store",
                  path: "/Google-Assistant-Store",
                  NavCategory: false,
                },
                {
                  Navtitle: "Laptops on Buyback Guarantee",
                  path: "/Laptops",
                  NavCategory: false,
                },
                {
                  Navtitle: "Flipkart SmartBuy",
                  path: "/Flipkart-SmartBuy",
                  NavCategory: false,
                },
                {
                  Navtitle: "Li-Polymer Power Banks",
                  path: "/Li-Polymer-Power-Banks",
                  NavCategory: false,
                },
                {
                  Navtitle: "Sony PS4 Pro & Slim",
                  path: "/PS4",
                  NavCategory: false,
                },
                {
                  Navtitle: "Apple Products",
                  path: "/Apple-Products",
                  NavCategory: false,
                },
                {
                  Navtitle: "Microsoft Store",
                  path: "/Microsoft-Store",
                  NavCategory: false,
                },
                {
                  Navtitle: "Lenovo Phab Series",
                  path: "/Lenovo-Phab-Series",
                  NavCategory: false,
                },
                {
                  Navtitle: "JBL Speakers",
                  path: "/JBL-Speakers",
                  NavCategory: false,
                },
                {
                  Navtitle: "Smartphones On Buyback Guarantee",
                  path: "/Smartphones",
                  NavCategory: false,
                },
                {
                  Navtitle: "Philips",
                  path: "/Philips",
                  NavCategory: false,
                },
                {
                  Navtitle: "Dr. Morepen",
                  path: "/Morepen",
                  NavCategory: false,
                },
                {
                  Navtitle: "Complete Mobile Protection",
                  path: "/Mobile-Protection",
                  NavCategory: false,
                },
                {
                  Navtitle: "Mobiles No Cost EMI",
                  path: "/Mobiles",
                  NavCategory: false,
                },
                {
                  Navtitle: "Huawei Watch Gt 2e Smart Watch",
                  path: "/Smart-Watch",
                  NavCategory: false,
                },
              ],
            },
          ],
        },
      ],
      "TVs & Appliances": [
        {
          menu: [
            {
              Navtitle: "Television",
              path: "/Television",
              NavCategory: true,
              subMenu: [],
            },
            {
              Navtitle: "New Launches",
              path: "/New-Launches",
              NavCategory: true,
              subMenu: [],
            },
            {
              Navtitle: "Smart & Ultra HD",
              path: "/Smart-Ultra-HD",
              NavCategory: true,
              subMenu: [],
            },
            {
              Navtitle: "Top Brands",
              path: "/Top-Brands",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "Mi",
                  path: "/Mi",
                  NavCategory: false,
                },
                {
                  Navtitle: "Vu",
                  path: "/Vu",
                  NavCategory: false,
                },
                {
                  Navtitle: "Thomson",
                  path: "/Thomson",
                  NavCategory: false,
                },
                {
                  Navtitle: "Samsung",
                  path: "/Samsung",
                  NavCategory: false,
                },
                {
                  Navtitle: "iFFALCON by TCL",
                  path: "/iFFALCON",
                  NavCategory: false,
                },
                {
                  Navtitle: "Nokia",
                  path: "/Nokia",
                  NavCategory: false,
                },
                {
                  Navtitle: "LG",
                  path: "/LG",
                  NavCategory: false,
                },
                {
                  Navtitle: "realme",
                  path: "/realme",
                  NavCategory: false,
                },
                {
                  Navtitle: "Motorola",
                  path: "/Motorola",
                  NavCategory: false,
                },
              ],
            },
            {
              Navtitle: "Shop by Screen Size",
              path: "/Screen-Size",
              NavCategory: true,
              subMenu: [
                {
                  Navtitle: "24 & below",
                  path: "/24-below",
                  NavCategory: false,
                },
                {
                  Navtitle: "28 - 32",
                  path: "/28-32",
                  NavCategory: false,
                },
                {
                  Navtitle: "39 - 43",
                  path: "/39-43",
                  NavCategory: false,
                },
                {
                  Navtitle: "48 - 55",
                  path: "/39-43",
                  NavCategory: false,
                },
                {
                  Navtitle: "60 & above",
                  path: "/60",
                  NavCategory: false,
                },
              ],
            },
          ],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
      ],
      Men: [
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
      ],
      Women: [
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
      ],
      "Baby & Kids": [
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
      ],
      "Home & Furniture": [
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
        {
          menu: [],
        },
      ],
    },
  },
];
