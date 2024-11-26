import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { NavLink } from "react-router-dom";

const UserCreation = () => {
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          User
          <NavLink to="/" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Create User
          </NavLink>
        </h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="text-center">Email Id</th>
                    <th className="text-center">Password</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserCreation;
