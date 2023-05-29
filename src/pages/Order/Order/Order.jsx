import { useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import shopImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";

import "./Order.css";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = ["desert", "pizza", "salad", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const deserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>
      <Cover
        bgImg={shopImg}
        title={"OUR SHOP"}
        text={"Would you like to have a dish?"}
      ></Cover>
      {/* React Tabs */}
      <Tabs
        className="mt-16 text-center"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="custom-tab-list flex justify-center items-center">
          <Tab className="custom-tab">DESSERTS</Tab>
          <Tab className="custom-tab">PIZZA</Tab>
          <Tab className="custom-tab">SALADS</Tab>
          <Tab className="custom-tab">SOUPS</Tab>
          <Tab className="custom-tab">DRINKS</Tab>
        </TabList>

        {/* Deserts */}
        <TabPanel>
          <OrderTab items={deserts}></OrderTab>
        </TabPanel>

        {/* Pizza */}
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>

        {/* Salads */}
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>

        {/* Soups */}
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>

        {/* Drinks */}
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
