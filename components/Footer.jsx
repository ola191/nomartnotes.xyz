import {useState, useEffect} from "react"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="flex w-full h-20 border-borderColor border-t-4 rounded-md z-10 px-10 mt-8">
      <span className="flex w-full justify-start items-center text-gray-800">
        © 2024 nomartnotes.xyz, All Rights Reserved.
      </span>
    </footer>
  );
}