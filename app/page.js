"use client";

import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
