import Link from "next/link";

export default function MenuItems({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-purple-500">
        <Icon className="text-2xl mx-2 sm:hidden"/>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
