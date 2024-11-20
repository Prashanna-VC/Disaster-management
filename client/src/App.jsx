import React, { useState } from "react";
import CustomInput from "./Components/CustomInput";
import CustomButton from "./Components/CustomButton";
import "./App.css";
import axios from "axios";

const App = () => {
  const [Disaster_name, setDisaster_name] = useState("");
  const [Disaster_location, setDisaster_location] = useState("");
  const [Disaster_detail, setDisaster_detail] = useState("");
  const [Disaster_level, setDisaster_level] = useState("");
  const [change, setChange] = useState("");

  const Disaster_create = async () => {
    try {
      const res = await axios.post("http://localhost:3000/createDisaster", {
        Disaster_name,
        Disaster_location,
        Disaster_detail,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Disaster_update = async () => {
    try {
      const res = await axios.put("http://localhost:3000/updateDisaster", {
        Disaster_name,
        Disaster_location,
        Disaster_detail,
        Disaster_level,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Disaster_delete = async () => {
    try {
      const res = await axios.delete("http://localhost:3000/deleteDisaster", {
        Disaster_name,
        Disaster_location,
        Disaster_detail,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="dis">
      <h1>Disaster Management</h1>

      <CustomButton
        onclick={() => setChange("Disaster_create")}
        button={"Disaster_create"}
      />
      <br />
      <CustomButton
        onclick={() => setChange("Disaster_update")}
        button={"Disaster_update"}
      />
      <br />
      <CustomButton
        
        onclick={() => setChange("Disaster_delete")}
        button={"Disaster_delete"}
      />
      <br />
      {change === "Disaster_create" && (
        <div>
          <CustomInput
            label={"Disaster_name : "}
            type={"text"}
            value={Disaster_name}
            onChange={(e) => setDisaster_name(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_location : "}
            type={"text"}
            value={Disaster_location}
            onChange={(e) => setDisaster_location(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_detail : "}
            type={"text "}
            value={Disaster_detail}
            onChange={(e) => setDisaster_detail(e.target.value)}
          />
          <br />

          <CustomButton button={"create"} onClick={Disaster_create} />
        </div>
      )}
      {change == "Disaster_update" && (
        <div>
          <CustomInput
            label={"Disaster_name : "}
            type={"text"}
            value={Disaster_name}
            onChange={(e) => setDisaster_name(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_location : "}
            type={"text"}
            value={Disaster_location}
            onChange={(e) => setDisaster_location(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_detail : "}
            type={"text "}
            value={Disaster_detail}
            onChange={(e) => setDisaster_detail(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_level : "}
            type={"text "}
            value={Disaster_level}
            onChange={(e) => setDisaster_level(e.target.value)}
          />
          <br />
          <CustomButton button={"updated"} onClick={Disaster_update} />
        </div>
      )}
      {change == "Disaster_delete" && (
        <div>
          <CustomInput
            label={"Disaster_name : "}
            type={"text "}
            value={Disaster_name}
            onChange={(e) => setDisaster_name(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_location : "}
            type={"text"}
            value={Disaster_location}
            onChange={(e) => setDisaster_location(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_detail : "}
            type={"text"}
            value={Disaster_detail}
            onChange={(e) => setDisaster_detail(e.target.value)}
          />
          <br />
          <CustomInput
            label={"Disaster_level : "}
            type={"text"}
            value={Disaster_level}
            onChange={(e) => setDisaster_level(e.target.value)}
          />
          <br />
          <CustomButton button={"delete"} onClick={Disaster_delete} />
        </div>
      )}
    </div>
  );
};

export default App;
