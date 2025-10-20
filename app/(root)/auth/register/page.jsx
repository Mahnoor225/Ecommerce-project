"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "@/lib/ZodSchema";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonLogin from "@/components/Application/ButtonLogin";
import Link from "next/link";
import { WEBSITE_LOGIN } from "@/routes/WebsiteRoute";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formSchema = zSchema.pick({
    fullName: true,
    email: true,
    password: true,
    confirmPassword: true,
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <main className="flex justify-center items-center h-screen overflow-hidden bg-gray-50">
      <Card className="w-full max-w-md shadow-lg border border-gray-100 rounded-2xl">
        <CardContent className="p-6">
          {/* Logo */}
          <div className="flex justify-center items-center mb-4">
            <Image src="/Logo-new.webp" alt="Logo" width={150} height={150} />
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-md font-light">
              Create a new account by filling out the form below
            </h2>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleRegisterSubmit)}
              className="space-y-4"
            >
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="***********"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="***********"
                          {...field}
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <ButtonLogin
                loading={loading}
                type="submit"
                text="Register"
                className="w-full font-bold text-md bg-[#02a282] hover:bg-[#019376] mt-2"
              />
            </form>
          </Form>

          {/* Footer */}
          <div className="text-center mt-5 flex justify-center items-center gap-2">
            <p>Already have an account?</p>
            <Link href={WEBSITE_LOGIN} className="text-[#02a282] hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Register;
