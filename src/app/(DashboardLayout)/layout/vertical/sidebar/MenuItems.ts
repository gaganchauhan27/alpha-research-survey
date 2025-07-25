import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconShoppingCart,
  IconAperture,
  IconLayout,
  IconSettings,
  IconHelp,
  IconZoomCode,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBorderStyle2,
  IconLockAccess,
  IconAppWindow,
  IconNotebook,
  IconFileCheck,
  IconHome2,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconAperture,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Homepage",
    icon: IconHome2,
    href: "/home",
  },
  // {
  //   id: uniqueId(),
  //   title: "eCommerce",
  //   icon: IconShoppingCart,
  //   href: "/dashboards/ecommerce",

  // },
  // {
  //   id: uniqueId(),
  //   title: "Frontend pages",
  //   icon: IconAppWindow,
  //   href: "/frontend-pages/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Homepage",
  //       icon: IconPoint,
  //       href: "/frontend-pages/homepage",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "About Us",
  //       icon: IconPoint,
  //       href: "/frontend-pages/about",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Blog",
  //       icon: IconPoint,
  //       href: "/frontend-pages/blog",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Blog Details",
  //       icon: IconPoint,
  //       href: "/frontend-pages/blog/Blog_1",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Contact",
  //       icon: IconPoint,
  //       href: "/frontend-pages/contact",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Portfolio",
  //       icon: IconPoint,
  //       href: "/frontend-pages/portfolio",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Pricing",
  //       icon: IconPoint,
  //       href: "/frontend-pages/pricing",
  //     },
  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: "Apps",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Contacts",
  //   icon: IconPackage,
  //   chip: "2",
  //   chipColor: "secondary",
  //   href: "/apps/contacts",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Blog",
  //   icon: IconChartDonut3,
  //   href: "/apps/blog/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Posts",
  //       icon: IconPoint,
  //       href: "/apps/blog/post",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Detail",
  //       icon: IconPoint,
  //       href: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ecommerce",
  //   icon: IconBasket,
  //   href: "/apps/ecommerce/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Shop",
  //       icon: IconPoint,
  //       href: "/apps/ecommerce/shop",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Detail",
  //       icon: IconPoint,
  //       href: "/apps/ecommerce/detail/1",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "List",
  //       icon: IconPoint,
  //       href: "/apps/ecommerce/list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Checkout",
  //       icon: IconPoint,
  //       href: "/apps/ecommerce/checkout",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Add Product",
  //       icon: IconPoint,
  //       href: "/apps/ecommerce/add-product",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Edit Product",
  //       icon: IconPoint,
  //       href: "/apps/ecommerce/edit-product",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Chats",
  //   icon: IconMessage2,
  //   href: "/apps/chats",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Users",
  //   icon: IconUserCircle,
  //   href: "/apps/user-profile/profile",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Profile",
  //       icon: IconPoint,
  //       href: "/apps/user-profile/profile",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Followers",
  //       icon: IconPoint,
  //       href: "/apps/user-profile/followers",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Friends",
  //       icon: IconPoint,
  //       href: "/apps/user-profile/friends",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Gallery",
  //       icon: IconPoint,
  //       href: "/apps/user-profile/gallery",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Notes",
  //   icon: IconNotes,
  //   href: "/apps/notes",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Calendar",
  //   icon: IconCalendar,
  //   href: "/apps/calendar",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Email",
  //   icon: IconMail,
  //   href: "/apps/email",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Tickets",
  //   icon: IconTicket,
  //   href: "/apps/tickets",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Kanban",
  //   icon: IconNotebook,
  //   href: "/apps/kanban",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Invoice",
  //   icon: IconFileCheck,
  //   href: "/apps/invoice/list",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "List",
  //       icon: IconPoint,
  //       href: "/apps/invoice/list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Details",
  //       icon: IconPoint,
  //       href: "/apps/invoice/detail/PineappleInc",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Create",
  //       icon: IconPoint,
  //       href: "/apps/invoice/create",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Edit",
  //       icon: IconPoint,
  //       href: "/apps/invoice/edit/PineappleInc",
  //     },
  //   ],
  // },

  // {
  //   navlabel: true,
  //   subheader: "Pages",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Roll Base Access",
  //   icon: IconLockAccess,
  //   href: "/theme-pages/casl",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Treeview",
  //   icon: IconGitMerge,
  //   href: "/theme-pages/treeview",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pricing",
  //   icon: IconCurrencyDollar,
  //   href: "/theme-pages/pricing",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Account Setting",
  //   icon: IconUserCircle,
  //   href: "/theme-pages/account-settings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "FAQ",
  //   icon: IconHelp,
  //   href: "/theme-pages/faq",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Landingpage",
  //   icon: IconAppWindow,
  //   href: "/landingpage",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Widgets",
  //   icon: IconLayout,
  //   href: "/widgets/cards",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Cards",
  //       icon: IconPoint,
  //       href: "/widgets/cards",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Banners",
  //       icon: IconPoint,
  //       href: "/widgets/banners",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Charts",
  //       icon: IconPoint,
  //       href: "/widgets/charts",
  //     },
  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: "Forms",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Elements",
  //   icon: IconApps,
  //   href: "/forms/form-elements/autocomplete",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Autocomplete",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/autocomplete",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Button",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/button",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Checkbox",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/checkbox",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Radio",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/radio",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Date Time",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/date-time",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Slider",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/slider",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Switch",
  //       icon: IconPoint,
  //       href: "/forms/form-elements/switch",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Layout",
  //   icon: IconFileDescription,
  //   href: "/forms/form-layout",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Horizontal",
  //   icon: IconBoxAlignBottom,
  //   href: "/forms/form-horizontal",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Vertical",
  //   icon: IconBoxAlignLeft,
  //   href: "/forms/form-vertical",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Custom",
  //   icon: IconFileDots,
  //   href: "/forms/form-custom",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Wizard",
  //   icon: IconFiles,
  //   href: "/forms/form-wizard",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Validation",
  //   icon: IconFiles,
  //   href: "/forms/form-validation",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Quill Editor",
  //   icon: IconEdit,
  //   href: "/forms/form-quill",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Tables",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Basic",
  //   icon: IconBorderAll,
  //   href: "/tables/basic",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Collapsible",
  //   icon: IconBorderHorizontal,
  //   href: "/tables/collapsible",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Enhanced",
  //   icon: IconBorderInner,
  //   href: "/tables/enhanced",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Fixed Header",
  //   icon: IconBorderVertical,
  //   href: "/tables/fixed-header",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconBorderTop,
  //   href: "/tables/pagination",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Search",
  //   icon: IconBorderStyle2,
  //   href: "/tables/search",
  // },
  // {
  //   id: uniqueId(),
  //   title: "React Table",
  //   icon: IconBorderStyle2,
  //   href: "/react-tables/basic",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Basic",
  //       icon: IconPoint,
  //       href: "/react-tables/basic",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Dense",
  //       icon: IconPoint,
  //       href: "/react-tables/dense",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Filter",
  //       icon: IconPoint,
  //       href: "/react-tables/filter",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Row Selection",
  //       icon: IconPoint,
  //       href: "/react-tables/row-selection",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Pagination",
  //       icon: IconPoint,
  //       href: "/react-tables/pagination",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Sorting",
  //       icon: IconPoint,
  //       href: "/react-tables/sorting",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Column Visibility",
  //       icon: IconPoint,
  //       href: "/react-tables/column-visiblity",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Drag n Drop",
  //       icon: IconPoint,
  //       href: "/react-tables/drag-n-drop",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Editable",
  //       icon: IconPoint,
  //       href: "/react-tables/editable",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Empty",
  //       icon: IconPoint,
  //       href: "/react-tables/empty",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Expand",
  //       icon: IconPoint,
  //       href: "/react-tables/expanding",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Sticky",
  //       icon: IconPoint,
  //       href: "/react-tables/sticky",
  //     },
  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: "UI",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ui Components",
  //   icon: IconBox,
  //   href: "/ui-components/alert",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Alert",
  //       icon: IconPoint,
  //       href: "/ui-components/alert",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Accordion",
  //       icon: IconPoint,
  //       href: "/ui-components/accordion",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Avatar",
  //       icon: IconPoint,
  //       href: "/ui-components/avatar",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Chip",
  //       icon: IconPoint,
  //       href: "/ui-components/chip",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Dialog",
  //       icon: IconPoint,
  //       href: "/ui-components/dialog",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "List",
  //       icon: IconPoint,
  //       href: "/ui-components/list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Popover",
  //       icon: IconPoint,
  //       href: "/ui-components/popover",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Rating",
  //       icon: IconPoint,
  //       href: "/ui-components/rating",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Tabs",
  //       icon: IconPoint,
  //       href: "/ui-components/tabs",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Tooltip",
  //       icon: IconPoint,
  //       href: "/ui-components/tooltip",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Transfer List",
  //       icon: IconPoint,
  //       href: "/ui-components/transfer-list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Typography",
  //       icon: IconPoint,
  //       href: "/ui-components/typography",
  //     },
  //   ],
  // },

  // {
  //   navlabel: true,
  //   subheader: "Charts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Line",
  //   icon: IconChartLine,
  //   href: "/charts/line",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Gradient",
  //   icon: IconChartArcs,
  //   href: "/charts/gradient",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Area",
  //   icon: IconChartArea,
  //   href: "/charts/area",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Candlestick",
  //   icon: IconChartCandle,
  //   href: "/charts/candlestick",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Column",
  //   icon: IconChartDots,
  //   href: "/charts/column",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Doughtnut & Pie",
  //   icon: IconChartDonut3,
  //   href: "/charts/doughnut",
  // },
  // {
  //   id: uniqueId(),
  //   title: "RadialBar & Radar",
  //   icon: IconChartRadar,
  //   href: "/charts/radialbar",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/auth/auth1/login",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Login",
  //       icon: IconPoint,
  //       href: "/auth/auth1/login",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Login",
  //       icon: IconPoint,
  //       href: "/auth/auth2/login",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/auth/auth1/register",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Register",
  //       icon: IconPoint,
  //       href: "/auth/auth1/register",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Register",
  //       icon: IconPoint,
  //       href: "/auth/auth2/register",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Forgot Password",
  //   icon: IconRotate,
  //   href: "/auth/auth1/forgot-password",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Forgot Password",
  //       icon: IconPoint,
  //       href: "/auth/auth1/forgot-password",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Forgot Password",
  //       icon: IconPoint,
  //       href: "/auth/auth2/forgot-password",
  //     },
  //   ],
  // },

  // {
  //   id: uniqueId(),
  //   title: "Two Steps",
  //   icon: IconZoomCode,
  //   href: "/auth/auth1/two-steps",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Two Steps",
  //       icon: IconPoint,
  //       href: "/auth/auth1/two-steps",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Two Steps",
  //       icon: IconPoint,
  //       href: "/auth/auth2/two-steps",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Error",
  //   icon: IconAlertCircle,
  //   href: "/auth/error",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Maintenance",
  //   icon: IconSettings,
  //   href: "/auth/maintenance",
  // },

  // {
  //   navlabel: true,
  //   subheader: "Other",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Menu Level",
  //   icon: IconBoxMultiple,
  //   href: "/menulevel/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Level 1",
  //       icon: IconPoint,
  //       href: "/l1",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Level 1.1",
  //       icon: IconPoint,
  //       href: "/l1.1",
  //       children: [
  //         {
  //           id: uniqueId(),
  //           title: "Level 2",
  //           icon: IconPoint,
  //           href: "/l2",
  //         },
  //         {
  //           id: uniqueId(),
  //           title: "Level 2.1",
  //           icon: IconPoint,
  //           href: "/l2.1",
  //           children: [
  //             {
  //               id: uniqueId(),
  //               title: "Level 3",
  //               icon: IconPoint,
  //               href: "/l3",
  //             },
  //             {
  //               id: uniqueId(),
  //               title: "Level 3.1",
  //               icon: IconPoint,
  //               href: "/l3.1",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Disabled",
  //   icon: IconBan,
  //   href: "",
  //   disabled: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: "SubCaption",
  //   subtitle: "This is the sutitle",
  //   icon: IconStar,
  //   href: "",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Chip",
  //   icon: IconAward,
  //   href: "",
  //   chip: "9",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Outlined",
  //   icon: IconMoodSmile,
  //   href: "",
  //   chip: "outline",
  //   variant: "outlined",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "External Link",
  //   external: true,
  //   icon: IconStar,
  //   href: "https://google.com",
  // },
];

export default Menuitems;
