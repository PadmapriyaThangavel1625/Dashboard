export type SettingItem = {
  id: string;
  title: string;
  description: string;
};

export const storeInformation: SettingItem[] = [
  {
    id: "store_name",
    title: "Store Name",
    description: "Enter your shop or business name",
  },
  {
    id: "store_address",
    title: "Store Address",
    description: "Full address of your store",
  },
  {
    id: "contact_number",
    title: "Contact Number",
    description: "Primary phone number for customers",
  },
  {
    id: "email",
    title: "Email",
    description: "Official business email address",
  },
];

export const deliveryCharges: SettingItem[] = [
  {
    id: "base_charge",
    title: "Base Delivery Charge",
    description: "Default delivery fee for all orders",
  },
  {
    id: "per_km_charge",
    title: "Per KM Charge",
    description: "Extra charge per kilometer",
  },
  {
    id: "free_delivery_limit",
    title: "Free Delivery Limit",
    description: "Minimum order amount for free delivery",
  },
];

export const taxConfiguration: SettingItem[] = [
  {
    id: "gst_rate",
    title: "GST Rate",
    description: "Tax percentage applied to products",
  },
  {
    id: "service_tax",
    title: "Service Tax",
    description: "Additional service charge if applicable",
  },
];

export const paymentGatewaySettings: SettingItem[] = [
  {
    id: "razorpay_key",
    title: "Razorpay Key",
    description: "API key for Razorpay integration",
  },
  {
    id: "stripe_key",
    title: "Stripe Key",
    description: "API key for Stripe payments",
  },
];

export const emailSmsSettings: SettingItem[] = [
  {
    id: "smtp_host",
    title: "SMTP Host",
    description: "Email server host",
  },
  {
    id: "smtp_port",
    title: "SMTP Port",
    description: "Email server port number",
  },
  {
    id: "sms_api",
    title: "SMS API Key",
    description: "API key for SMS notifications",
  },
];

export const appConfiguration: SettingItem[] = [
  {
    id: "app_name",
    title: "App Name",
    description: "Name displayed in the app",
  },
  {
    id: "maintenance_mode",
    title: "Maintenance Mode",
    description: "Enable/disable system maintenance mode",
  },
  {
    id: "currency",
    title: "Currency",
    description: "Default currency for transactions",
  },
];