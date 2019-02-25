import React from "react";
import Card from "./Card";
import Resources from "./Resources";

export default function MainPage() {
  return (
    <div className="gridContainer">
      <div className="resources">
        <Card>
          <Resources />
        </Card>
      </div>
      <div className="inventory">
        <Card>Inventory</Card>
      </div>
      <div className="customers">
        <Card>Customers</Card>
      </div>
      <div className="forges">
        <Card>forge</Card>
      </div>
    </div>
  );
}
