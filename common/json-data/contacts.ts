import { MdMail, MdMap, MdPhone } from "react-icons/md";

export const contactData = {
  id: "contact",
  title: "Get In Touch",
  description:
    "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
  form: {
    title: "Send a Message",
    description:
      "Fill out the form below and I'll get back to you as soon as possible.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        rows: 5,
        required: true,
      },
    ],
    buttonText: "Send Message",
  },
  contactInfo: {
    title: "Contact Information",
    description: "Feel free to reach out through any of these channels.",
    items: [
      { type: "email", icon: MdMail, value: "deepak.ds.0621@gmail.com" },
      { type: "phone", icon: MdPhone, value: "+91 98727 93808" },
      { type: "location", icon: MdMap, value: "SAS Nagar Mohali, India" },
    ],
  },
  cta: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always interested in new opportunities and exciting projects. Whether you need a full-stack web application, API development, or technical consulting, I'd love to hear about your project.",
  },
};
