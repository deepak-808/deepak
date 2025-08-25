"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";
import { contactData } from "@/common/json-data/contacts";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(errorData.error || "Failed to send message");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id={contactData.id} className="py-24">
      <div className="px-4">
        {/* Section Title */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
            {contactData.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {contactData.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">
                  {contactData.form.title}
                </CardTitle>
                <CardDescription>
                  {contactData.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mb-4 flex items-center gap-2 rounded-md bg-green-50 p-3 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {contactData.form.fields.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <Label htmlFor={field.name}>{field.label}</Label>
                      {field.type === "textarea" ? (
                        <Textarea
                          id={field.name}
                          name={field.name}
                          rows={field.rows}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          disabled={isLoading}
                          className="bg-white"
                        />
                      ) : (
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          disabled={isLoading}
                          className="bg-white"
                        />
                      )}
                    </div>
                  ))}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : contactData.form.buttonText}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">
                    {contactData.contactInfo.title}
                  </CardTitle>
                  <CardDescription>
                    {contactData.contactInfo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactData.contactInfo.items.map(
                    ({ type, icon: Icon, value }) => (
                      <div key={type} className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span>{value}</span>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">
                    {contactData.cta.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {contactData.cta.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
