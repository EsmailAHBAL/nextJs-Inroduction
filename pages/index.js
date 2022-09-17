import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'





export default function Home() {
return (
<div className="container mt-5 text-center">
  <div className="content">
    <h2>This a 🏠  Page 😉</h2>
  </div>
  <hr />
  <div className='card'>
    <div className="card-content">
      <div className="block">
      <p>For More Details Go To About Page</p>
      </div>
    <div className="block">
      <Link href={"about"}>
    <button className='button is-success'>To About </button>
      </Link>
    </div>
    </div>
  </div>

</div>
)
}