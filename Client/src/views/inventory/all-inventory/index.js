import React from "react";

const AllProducts = (props) => {
  return (
    <div>
        <h1 className="text-center">Current Inventory</h1>
        <br></br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Supplier</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Hammer</td>
            <td>10</td>
            <td>TomHardware</td>
            <td>Mjöllnir</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Drill Machine</td>
            <td>5</td>
            <td>TomHardware</td>
            <td>Multi-Bit built in Kit Drill</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Medium Ladder</td>
            <td>10</td>
            <td>BillyNJoe</td>
            <td>7 Foot Medium Size Ladder</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
