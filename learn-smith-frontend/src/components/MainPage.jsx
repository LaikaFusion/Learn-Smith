import React from "react";
import Card from "./Card";
import Resources from "./Resources";
import Inventory from "./Inventory";
import Forges from "./Forge";
import Customers from "./Customers";

export default function MainPage() {
  return (
    <div className="gridContainer">
      <div className="resources">
        <Card>
          <Resources />
        </Card>
      </div>
      <div className="inventory">
        <Card>
          <Inventory />
        </Card>
      </div>
      <div className="customers">
        <Card>
          <Customers />
        </Card>
      </div>
      <div className="forges">
        <Card>
          <Forges />
        </Card>
      </div>
    </div>
  );
}
