import React, { useEffect } from "react";
import "../Styles/eventform.css";

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
} from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

const event = [
  {
    value: "Wedding",
    label: "Wedding",
  },
  {
    value: "Meeting",
    label: "Meeting",
  },
  {
    value: "Conference",
    label: "Conference",
  },
  {
    value: "Party",
    label: "Party",
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select date!",
    },
  ],
};
const onFinish = (fieldsValue) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue["range-picker"];
  const rangeTimeValue = fieldsValue["range-time-picker"];
  const values = {
    ...fieldsValue,
    "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
    "date-time-picker": fieldsValue["date-time-picker"].format(
      "YYYY-MM-DD HH:mm:ss"
    ),
    "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
    "range-picker": [
      rangeValue[0].format("YYYY-MM-DD"),
      rangeValue[1].format("YYYY-MM-DD"),
    ],
    "range-time-picker": [
      rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
      rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
    ],
    "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
  };
  console.log("Received values of form: ", values);
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [needMoreRooms, setNeedMoreRooms] = useState("No");
  const [numOfRooms, handleNumOfRoomsChange] = useState();

  useEffect(() => {
    form.setFieldValue("rooms", needMoreRooms);
  }, []);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+91</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div style={{ margin: "4rem 10rem" }}>
      <h1 style={{ textAlign: "center" }}>MEETING & WEDDING REQUESTS</h1>
      <Row style={{ marginTop: "5rem" }}>
        <Col span={10}>
          <p>
            We're here to help! Whether you have a question, need more
            information, or just want to say hello, our team is ready to assist
            you in any way we can. So don't hesitate to reach out to us - we're
            always happy to chat and provide the support you need!
          </p>
          <div>
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                id="event-icon"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              ADDRESS:
            </h5>
            <p>
              Siri Ambari BM Road, Near HDFC ATM, Kushalnagar, Kodagu (Coorg),
              571234
            </p>
          </div>
          <div>
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                id="event-icon"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              PHONE:
            </h5>
            <p>+91-95354 95938</p>
          </div>
          <div>
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
                id="event-icon"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              E-MAIL:
            </h5>
            <p>admin@siriambari.com</p>
          </div>
        </Col>
        <Col span={12}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
   */}
            {/* <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item> */}

            <Form.Item
              name="event"
              label="Nature of Event"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your Nature of Event!",
                },
              ]}
            >
              <Cascader options={event} />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item name="range-picker" label="Event Date" {...rangeConfig}>
              <RangePicker />
            </Form.Item>
            <Form.Item
              name="numberOfPeople"
              label="Number of People"
              rules={[
                {
                  required: true,
                  message: "Please input number of People!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Does your event require rooms"
              name="rooms"
              rules={[
                {
                  required: true,
                  message: "Please select!",
                },
              ]}
            >
              <Select
                value={needMoreRooms}
                onChange={(e) => setNeedMoreRooms(e)}
              >
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>
           
              {needMoreRooms === "Yes" && (
                <Form.Item
                label="No of rooms"
                name="noofrooms">
                  <Select
                    id="numOfRooms"
                    value={numOfRooms}
                    onChange={handleNumOfRoomsChange}
                  >
                    <Select.Option value={1}>1</Select.Option>
                    <Select.Option value={2}>2</Select.Option>
                    <Select.Option value={3}>3</Select.Option>
                  </Select>
                  </Form.Item>              
                  )}
           

            <Form.Item
              label="Does your event require Catering"
              name="catering"
              rules={[
                {
                  required: true,
                  message: "Please select!",
                },
              ]}
            >
              <Select>
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Requirement"
              label="Additional Requirement"
              rules={[
                {
                  required: true,
                  message: "Please input additional requirement",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "#debe64",
                  color: "#363433",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default App;
