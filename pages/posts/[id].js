const post =(props)=>(
<div className="block">
    <div className="card">
     <div className="card-content" key={props.data.id}>
        <div className="block">
        {props.data.id}
        </div>
        <div className="block">
        {props.data.title}
        </div>
        <div className="block">
        {props.data.body}
        </div>
       
     </div>
    </div>
</div>
)

export const getServerSideProps=async (context)=>{
    const api = `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  const result =   fetch(api).
    then(res =>{
  if (res.ok) {
   return res.json() 
  }
 return res.json().then(er=>{
    throw new Error(er)
  })
    })
.then(data=>{
    return data
    
})

return {
    props :{
        data : await result
    }
}
  
  
}

export default post