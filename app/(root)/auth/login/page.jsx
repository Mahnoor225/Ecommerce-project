
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "@/lib/ZodSchema";
import { FaRegEye, FaRegEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
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
import { WEBSITE_REGISTER } from "@/routes/WebsiteRoute";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = zSchema.pick({
    email: true,
    password: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


   const handleLoginSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook Login Clicked");
  };


  return (
    <Card className="">
      <CardContent>
        <div className="flex justify-center items-center ">
          <Image src="/Logo-new.webp" alt="Logo" width={150} height={150} />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-light mt-6">
            Login with your email & password
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLoginSubmit)}
            className="mt-5 space-y-6"
          >
            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Submit Button */}
            <ButtonLogin
              loading={loading}
              type="submit"
              text="Login"
              className="font-bold text-md mt-2 w-full bg-[#02a282] hover:bg-[#019376] cursor-pointer"
            />
          </form>
           {/* OR Divider */}
            <div className="flex items-center justify-center mt-4">
              <span className="h-[1px] bg-gray-300 w-1/4"></span>
              <span className="mx-2 text-gray-500 text-sm">OR</span>
              <span className="h-[1px] bg-gray-300 w-1/4"></span>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-3 border rounded-lg py-1 hover:bg-gray-100 transition"
              >
                <FaGoogle className="text-red-500" />
                <span>Login with Google</span>
              </button>

              <button
                onClick={handleFacebookLogin}
                className="flex items-center justify-center gap-3 border rounded-lg py-1 hover:bg-gray-100 transition"
              >
                <FaFacebook className="text-blue-600" />
                <span>Login with Facebook</span>
              </button>
            </div>
          

          <div className="text-center mt-5 flex justify-center items-center gap-2">
            <p>Don't have an account?</p>
            <Link href={WEBSITE_REGISTER} className="text-[#02a282] hover:underline">
              Register
            </Link>
          </div>
          <div className="text-center mt-4 flex justify-center items-center gap-2">
            <Link href="/register" className="text-[#02a282] hover:underline">
              Forget password?
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login; 