 import Link from "next/link";
 const   contact =(props)=>(
    <div className="columns is-multiline">
        {     
props.result.map(item =>(
  <div key={item.id} className="column is-4 text-center">
   <p>{item.title}</p>
  <span className="tag is-dark mt-1">
     The Content
  </span>
   <p className="block mt-3">
  {item.body}
  </p>
  <div className="block">
    <Link href={`posts/${item.id}`}>
    <button className="button is-success">Read</button></Link>
  </div>
  <hr />

  </div>

))
        }
        Hey
        
    </div>
)
export const getStaticProps=async()=>{
  const api =`https://jsonplaceholder.typicode.com/posts`
  const res= await fetch(api);
  const data = await res.json()
  return {
    props :{
        result : data
    }
  }
}
export default contact