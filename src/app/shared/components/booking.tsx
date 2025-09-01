"use client";

import React from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Typography,
  Space,
  message,
  Row,
  Col,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useBooking } from "../contexts/booking-context";
import type { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  date: Dayjs;
  timeSlot: string;
  serviceDetails: string;
}

// Generate time slots from 9 AM to 8 PM
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 20; hour++) {
    const time12h = hour > 12 ? hour - 12 : hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayTime = `${time12h}:00 ${ampm}`;
    const endHour = hour + 1;
    const endTime12h = endHour > 12 ? endHour - 12 : endHour;
    const endAmpm = endHour >= 12 ? "PM" : "AM";
    const endDisplayTime = `${endTime12h}:00 ${endAmpm}`;

    slots.push({
      value: `${displayTime} - ${endDisplayTime}`,
      label: `${displayTime} - ${endDisplayTime}`,
    });
  }
  return slots;
};

export const BookingForm: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleSubmit = async (values: BookingFormData) => {
    setLoading(true);
    try {
      // Create FormData for Web3Forms
      const formData = new FormData();

      // Add Web3Forms access key
      formData.append("access_key", "0ea0c0ea-9e49-4708-b184-54702a7482f5");

      // Add honeypot field for spam protection (leave empty)
      formData.append("botcheck", "");

      // Add form fields
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("email", values.email);

      // Format date properly to avoid timezone issues
      const selectedDate = values.date;
      const formattedDate = selectedDate
        ? selectedDate.format("YYYY-MM-DD")
        : "";
      formData.append("date", formattedDate);

      formData.append("timeSlot", values.timeSlot);
      formData.append("serviceDetails", values.serviceDetails);

      // Add subject for the email
      formData.append("subject", "New Dental Appointment Booking");

      // Add redirect URL (optional - can be your website)

      // Add from name and email for better delivery
      formData.append("from_name", "Kia Dental Booking System");
      formData.append("replyto", values.email);

      // Add custom message format
      const customMessage = `
New Appointment Booking Request:

Patient Name: ${values.name}
Phone Number: ${values.phone}
Email Address: ${values.email}
Preferred Date: ${formattedDate}
Preferred Time: ${values.timeSlot}
Service Details: ${values.serviceDetails}

Please contact the patient to confirm the appointment.
      `;
      formData.append("message", customMessage);

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log("Booking submitted successfully:", values);
        router.push("/booking-success");
        message.success(
          "Booking request submitted successfully! We will contact you soon."
        );

        form.resetFields();
        closeBookingModal();
      } else {
        console.log("Error", data);
        message.error(
          data.message || "Failed to submit booking. Please try again."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      message.error("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const disabledDate = (current: Dayjs | null) => {
    // Disable past dates
    if (!current) return false;
    return current.isBefore(new Date(), "day");
  };

  return (
    <Modal
      title={
        <Space align="center">
          <CalendarOutlined style={{ color: "#ec4899" }} />
          <Title
            level={3}
            style={{
              margin: 0,
              background: "linear-gradient(to right, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Book Your Appointment
          </Title>
        </Space>
      }
      open={isBookingModalOpen}
      onCancel={closeBookingModal}
      footer={null}
      width={700}
      centered
      destroyOnHidden
      styles={{
        header: {
          borderBottom: "2px solid #fce7f3",
          paddingBottom: "16px",
        },
        body: {
          padding: "24px",
        },
      }}
    >
      <div>
        <Text
          type="secondary"
          style={{ marginBottom: 24, display: "block", fontSize: "16px" }}
        >
          Please fill out the form below to schedule your dental appointment.
          We&apos;ll contact you to confirm your booking.
        </Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
          size="large"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label={
                  <span style={{ color: "#374151", fontWeight: "600" }}>
                    Full Name
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your full name" },
                  { min: 2, message: "Name must be at least 2 characters" },
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#ec4899" }} />}
                  placeholder="Enter your full name"
                  style={{
                    borderColor: "#fce7f3",
                    borderRadius: "8px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ec4899";
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(236, 72, 153, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#fce7f3";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label={
                  <span style={{ color: "#374151", fontWeight: "600" }}>
                    Phone Number
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^[\+]?[1-9][\d]{0,15}$/,
                    message: "Please enter a valid phone number",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined style={{ color: "#ec4899" }} />}
                  placeholder="Enter your phone number"
                  style={{
                    borderColor: "#fce7f3",
                    borderRadius: "8px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ec4899";
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(236, 72, 153, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#fce7f3";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label={
                  <span style={{ color: "#374151", fontWeight: "600" }}>
                    Email Address
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined style={{ color: "#ec4899" }} />}
                  placeholder="Enter your email address"
                  style={{
                    borderColor: "#fce7f3",
                    borderRadius: "8px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ec4899";
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(236, 72, 153, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#fce7f3";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date"
                label={
                  <span style={{ color: "#374151", fontWeight: "600" }}>
                    Preferred Date
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please select your preferred date",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                    borderColor: "#fce7f3",
                    borderRadius: "8px",
                  }}
                  placeholder="Select date"
                  disabledDate={disabledDate}
                  format="YYYY-MM-DD"
                  suffixIcon={<CalendarOutlined style={{ color: "#ec4899" }} />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="timeSlot"
                label={
                  <span style={{ color: "#374151", fontWeight: "600" }}>
                    Preferred Time Slot
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please select your preferred time slot",
                  },
                ]}
              >
                <Select
                  placeholder="Select time slot"
                  suffixIcon={
                    <ClockCircleOutlined style={{ color: "#ec4899" }} />
                  }
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  {generateTimeSlots().map((slot) => (
                    <Option key={slot.value} value={slot.value}>
                      {slot.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="serviceDetails"
            label={
              <span style={{ color: "#374151", fontWeight: "600" }}>
                What service are you looking for?
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please describe the service you need",
              },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Please describe the dental service you need (e.g., teeth cleaning, dental filling, orthodontic consultation, etc.) and any specific concerns or additional information..."
              style={{
                borderColor: "#fce7f3",
                borderRadius: "8px",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#ec4899";
                e.target.style.boxShadow = "0 0 0 2px rgba(236, 72, 153, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#fce7f3";
                e.target.style.boxShadow = "none";
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, marginTop: 32 }}>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button
                size="large"
                onClick={closeBookingModal}
                style={{
                  borderColor: "#fce7f3",
                  color: "#6b7280",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
                style={{
                  background: "linear-gradient(to right, #ec4899, #8b5cf6)",
                  borderColor: "transparent",
                  borderRadius: "8px",
                  minWidth: 140,
                  fontWeight: "600",
                  boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.39)",
                }}
              >
                {loading ? "Submitting..." : "Book Appointment"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default BookingForm;
