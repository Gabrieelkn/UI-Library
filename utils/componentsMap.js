import NavigationBar from "@/shop/navbar/navbar";
import Form from "@/shop/form/form";
import ToastDemo from "@/shop/toast/ex";
import Button from "@/shop/button/button";
import User from "@/shop/user/user";
import Spinner from "@/shop/spinner/spinner";
import Accordion from "@/shop/accordion/accordion";
import SearchBar from "@/shop/searchBar/searchBar";
import ModalDemo from "@/shop/modal/modal";
import Testimonials from "@/shop/testimonials/testimonials";
import Switch from "@/shop/switch/switch";
import Calendar from "@/shop/calendar/calendar";
import NavigationBarDropdown from "@/shop/navbarDropdown/navBarDropdown";
import GridCards from "@/shop/cardsGrid/cardsGrid";
import Wrapper from "@/shop/productCard/productCard";
import StarRating from "@/shop/starRating/starRating";
import PriceWrapper from "@/shop/priceDiscount/priceDiscount";
import TooltipWrapper from "@/shop/tooltip/tooltip";
import List from "@/shop/list/list";
import Checkbox from "@/shop/checkbox/checkbox";
import Card from "@/shop/card/card";
import CartButton from "@/shop/cartButton/cartButton";

export const componentMap = {
  "navigation-bar": {
    component: <NavigationBar />,
    codePath: "/shop/navbar/code.txt",
    title: "Navigation Bar",
  },
  form: {
    component: <Form />,
    codePath: "/shop/form/code.txt",
    title: "Form Component",
  },
  toast: {
    component: <ToastDemo />,
    codePath: "/shop/toast/code.txt",
    usagePath: "/shop/toast/usage.txt",
    title: "Toast Component",
  },
  button: {
    component: (
      <Button variant="primary" size="medium">
        Primary Button
      </Button>
    ),
    codePath: "/shop/button/code.txt",
    usagePath: "/shop/button/usage.txt",
    title: "Button Component",
  },
  user: {
    component: <User />,
    codePath: "/shop/user/code.txt",
    title: "User Component",
  },
  spinner: {
    component: <Spinner />,
    codePath: "/shop/spinner/code.txt",
    title: "Spinner Component",
  },
  accordion: {
    component: <Accordion />,
    codePath: "/shop/accordion/code.txt",
    title: "Accordion Component",
  },
  "search-bar": {
    component: <SearchBar />,
    codePath: "/shop/searchBar/code.txt",
    title: "SearchBar Component",
  },
  testimonials: {
    component: <Testimonials />,
    codePath: "/shop/testimonials/code.txt",
    title: "Testimonials Component",
  },
  switch: {
    component: <Switch />,
    codePath: "/shop/switch/code.txt",
    title: "Switch Component",
  },
  calendar: {
    component: <Calendar />,
    codePath: "/shop/calendar/code.txt",
    title: "Switch Component",
  },
  "navigation-bar-dropdown": {
    component: <NavigationBarDropdown />,
    codePath: "/shop/navbarDropdown/code.txt",
    title: "Navigation Bar Dropdown Component",
  },
  "grid-cards": {
    component: <GridCards />,
    codePath: "/shop/cardsGrid/code.txt",
    title: "Grid Cards Component",
  },
  "star-rating": {
    component: <StarRating />,
    codePath: "/shop/starRating/code.txt",
    title: "Star Rating Component",
  },
  "product-card": {
    component: <Wrapper />,
    codePath: "/shop/productCard/code.txt",
    usagePath: "/shop/productCard/usage.txt",
    title: "Product Card Component",
  },
  modal: {
    component: <ModalDemo />,
    codePath: "/shop/modal/code.txt",
    usagePath: "/shop/modal/usage.txt",
    title: "Modal Component",
  },
  "discount-price": {
    component: <PriceWrapper />,
    codePath: "/shop/priceDiscount/code.txt",
    usagePath: "/shop/priceDiscount/usage.txt",
    title: "Discount Price Component",
  },
  tooltip: {
    component: <TooltipWrapper />,
    codePath: "/shop/tooltip/code.txt",
    usagePath: "/shop/tooltip/usage.txt",
    title: "Tooltip Component",
  },
  list: {
    component: <List />,
    codePath: "/shop/list/code.txt",
    title: "List Component",
  },
  checkbox: {
    component: <Checkbox />,
    codePath: "/shop/checkbox/code.txt",
    title: "Checkbox Component",
  },
  card: {
    component: <Card />,
    codePath: "/shop/card/code.txt",
    usagePath: "/shop/card/usage.txt",
    title: "Card Component",
  },
  "cart-button": {
    component: <CartButton />,
    codePath: "/shop/cartButton/code.txt",
    title: "Cart Button Component",
  },
};
