"use client";
import React from "react";
import AnimatedCursor from "./AnimatedCursor";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const ClientLayout = ({ children }:Readonly< { children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <div className=" min-h-screen flex flex-col justify-between">
        <main className="flex flex-col flex-grow w-full">{children}</main>
        <AnimatedCursor />
      </div>
      <Footer />
    </>
  );
};

export default ClientLayout;
