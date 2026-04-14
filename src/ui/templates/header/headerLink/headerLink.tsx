"use client";

//npm
import Link from "next/link";
import Image from "next/image";

//functions
import { removeHeader } from "../functions";

//styles
import "./headerLink.css";

interface props {
  children: React.ReactNode;
  path: string;
  icon: string;
}

export default function HeaderLink({ children, path, icon }: props) {
  return (
    <Link
      onClick={removeHeader}
      href={path}
      className="header-link"
    >
      {children}
    </Link>
  );
}
