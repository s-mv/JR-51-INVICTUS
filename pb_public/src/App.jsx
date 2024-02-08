import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import './css/App.scss';
import { Home } from './pages/Home';
import { auth, getUserID, getUserName } from "./firebase.js";
import WarehousePage from "./pages/WareHousePage";
import { Nav } from "./components/Nav";
import { QueuePage } from "./pages/QueuePage";
import { ML } from "./pages/ML";
import { Company, company } from "../mgmt/Company.js";
import { pb } from "./backend.js";

if (!localStorage.getItem("userID")) {
  let uid = getUserID();
  localStorage.setItem("userID", uid);

  await pb.collection("companies").getOne(uid).catch(() => {
    pb.collection("companies").create({
      id: uid,
      name: getUserID().displayName,
      location: "Thane",
      warehouses: [],
      items: [],
      inflow: [],
      outflow: [],
    });
  });

}

new Company(localStorage.getItem("userID"), getUserName(), []);

function App() {
  // auth, setAuth but auth is already defined
  const [value, setValue] = useState(0);

  const handleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(data => {
      localStorage.setItem("isAuth", "true");
      setValue("true");
    });
  };

  const signOut = () => {
    auth.signOut().then(data => {
      localStorage.removeItem("isAuth");
      setValue("false");
    });
  };

  // const updateQueues = () => {
  //   for (let i = 0; i < company.inflow.data.length; i++) {
  //     let data = company.inflow.data[i];
  //     data.edit(i, data.factor + ~~(Math.random() * 10 - 5) - 1);
  //     if (data.peek() <= 1) data.pop();
  //   }
  //   for (let i = 0; i < company.outflow.data.length; i++) {
  //     let data = company.outflow.data[i];
  //     data.edit(i, data.factor + ~~(Math.random() * 10 - 5) - 1);
  //     if (data.peek() <= 1) data.pop();
  //   }
  //   console.log(company.inflow.length, company.outflow.length);
  //   pb.collection("companies")
  //     .getOne(getUserID()).update("inflow", company.inflow.data);
  //   pb.collection("companies")
  //     .getOne(getUserID()).update("outflow", company.inflow.data);
  // }
  // console.log("wtf");
  // if (getUserID()) {
  //   setTimeout(updateQueues, 1000);
  // }
  return <>
    <Nav handleAuth={handleAuth} signOut={signOut} />
    <main>
      <div className="pushup"></div> {/* for navbar */}
      <BrowserRouter>
        <Routes>
          {/* temporary */}
          <Route index element={<Home />}></Route>
          <Route path="/warehouse" element={<div><WarehousePage /></div>}></Route>
          <Route path="/goods-status" element={<div><QueuePage /></div>}></Route>
          <Route path="/ml" element={<ML />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  </>;
}

export default App;
