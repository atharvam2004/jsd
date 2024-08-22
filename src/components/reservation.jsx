import React, { useState } from "react";
import "../Styles/reservation.css";
import "../Styles/rangePicker.css";
import dayjs from "dayjs";
import { Button, Modal } from "antd";
import { Checkbox, Form, Input } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { DatePicker, Space, Select } from "antd";
import { useNavigate } from "react-router";

//const baseURL = process.env.REACT_APP_API_KEY+"/add-customer";

const { RangePicker } = DatePicker;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function ReservationForm() {
  const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
  };
  const getPriceForDate = () => {
    return "₹2500";
  };

  const renderCell = (date) => {
    const price = getPriceForDate(date);

    return (
      <div className="cell-render-custom">
        <div className="cell-date">{date.date()}</div>
        <div className="cell-price">{price}</div>
      </div>
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [user, setUser] = useState({
    name: "",
    checkin: "",
    checkOut: "",
    mobno: "",
    email: "",
    roomType: "Premium Rooms",
  });

  const { name, checkin, checkOut, mobno, email, roomType } = user;
  const dateFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onInputChangeCheckInDate = (date, dateString) => {
    if (date) {
      const isoDateString = date.toISOString();
      setUser({ ...user, checkin: isoDateString });
    }
  };

  const onInputChangeCheckOutDate = (date, dateString) => {
    if (date) {
      const isoDateString = date.toISOString();
      setUser({ ...user, checkOut: isoDateString });
    }
  };

  const navigate = useNavigate();

  const [selectedRoomName, setSelectedRoomName] = useState("View Rooms"); // Initialize with the default text

  const onInputChangeSelect = (value) => {
    navigate("/ViewNonACSuite");
    setUser({ ...user, roomType: value });
    setSelectedRoomName(value);
  };
  const [value, setValue] = useState([null, null]);

  const start = value[0];
  const end = value[1];
  const onChangeRange = (value) => {
    setValue(value);
    setUser({
      ...user,
      checkin: value[0].toISOString(),
      checkOut: value[1].toISOString(),
    });
    console.log(user);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    // await axios
    //   .post(process.env.REACT_APP_API_KEY+"/add-customer", user)
    //   .then((response) => {
    //     console.log(response.status, response.data.token);
    //   });
  };
  return (
    <div className="form">
      <div className="form-elem">
        <div class="formbt">
          <Dropdown onSelect={(value) => onInputChangeSelect(value)}>
            <Dropdown.Toggle className="custom-dropdown-toggle">
              {selectedRoomName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Standard Rooms">
                View Standard Rooms
              </Dropdown.Item>
              <Dropdown.Item eventKey="Executive  Rooms">
                View Executive Rooms
              </Dropdown.Item>
              <Dropdown.Item eventKey="Premium Rooms">
                View Premium Rooms
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Honey moon suit Rooms"
                href="/ViewACStandard"
              >
                View Honey moon suit Rooms
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <RangePicker
            className="rangepickerForm"
            disabledDate={disabledDate}
            cellRender={renderCell}
            onChange={onChangeRange}
          />
        </div>
        <div className="formbtns">
          <Modal
            title="Booking Form"
            open={isModalOpen}
            onOk={onSubmit}
            onCancel={handleCancel}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="CheckIn date :"
                name="checkin"
                rules={[
                  {
                    required: true,
                    message: "Please input your checkInDate!",
                  },
                ]}
              >
                <DatePicker
                  className="Res-input"
                  name="checkin"
                  value={user.roomType}
                  defaultValue={dayjs(user.checkin, dateFormat)} // Set the checkin date
                  onChange={(date, dateString) =>
                    onInputChangeCheckInDate(date, dateString)
                  }
                />
              </Form.Item>
              <Form.Item
                label="CheckOut date :"
                name="checkOut"
                rules={[
                  {
                    required: true,
                    message: "Please input your checkOutDate!",
                  },
                ]}
              >
                <DatePicker
                  className="Res-input"
                  name="checkOut"
                  defaultValue={dayjs(user.checkOut, dateFormat)} // Set the checkin date
                  value={user.roomType}
                  onChange={(date, dateString) =>
                    onInputChangeCheckOutDate(date, dateString)
                  }
                />
              </Form.Item>
              <Form.Item
                label="Type Of Room:"
                name="roomType"
                rules={[
                  {
                    required: true,
                    message: "Please select a room type!",
                  },
                ]}
              >
                <Select
                  name="roomType"
                  defaultValue={user.roomType}
                  value={user.roomType}
                  className="Res-input"
                  onSelect={(value) => onInputChangeSelect(value)}
                  options={[
                    {
                      value: "Standard Rooms",
                      label: "Standard Rooms",
                    },
                    {
                      value: "Executive  Rooms",
                      label: "Executive  Rooms",
                    },
                    {
                      value: "Premium Rooms",
                      label: "Premium Rooms",
                    },
                    {
                      value: "Honey moon suit Rooms",
                      label: "Honey moon suit Rooms",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Your Name :"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  type={"text"}
                  className="Res-input"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Item>

              <Form.Item
                label="Email :"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  className="Res-input"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Item>

              <Form.Item
                label="Mobile No :"
                name="mobNo"
                rules={[
                  {
                    required: true,
                    message: "Please input your Mob No!",
                  },
                ]}
              >
                <Input
                  className="Res-input"
                  name="mobno"
                  value={mobno}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Item>
            </Form>
          </Modal>

          <button
            className="formbtn"
            id="btnsub"
            onClick={showModal}
            type="submit"
          >
            BOOK NOW!
          </button>
          <button className="formbtn" type="">
            MANAGE RESERVATIONS
          </button>
        </div>
      </div>

      <div className="formText">
        For bookings or queries, reach us at +91- 95 35 49 59 38
      </div>
    </div>
  );
}

export default ReservationForm;
