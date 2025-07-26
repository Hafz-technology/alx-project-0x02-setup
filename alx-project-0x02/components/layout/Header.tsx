import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
     <Link href="/">Daily Contents</Link>
  </h3>
        <nav>



          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/aboutPage">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/alx-project-0x02/pages/home.tsx">Home</Link>
            </li>
    


          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;