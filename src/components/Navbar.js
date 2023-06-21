import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-700 bg-purple-200 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
