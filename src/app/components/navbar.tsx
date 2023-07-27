import Link from "next/link"

const Navbar = () =>{
  return (
    <div>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/">Home</Link>
    </div>
  )
}

export default Navbar
