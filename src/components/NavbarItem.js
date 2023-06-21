"use client";
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

export default function NavbarItem({title, param}) {
    const SearchParams = useSearchParams();
    const genre = SearchParams.get("genre");
  return (
    <div>
      <Link className={`m-4 hover:text-purple-500 font-semibold p-2" ${
        genre && genre === param && "underline underline-offset-8 decoration-4 decoration-purple-500 rounded-lg"
      }`} href={`/?genre=${param}`}>{ title }</Link>
    </div>
  )
}
