import { useEffect, useState } from 'react';
import '../styles/container.css'
const Container = ({color, color2, size}) => {

    const [data, setData] = useState([])
    const fetchData = async () =>{
     const data = await fetch("https://jsonplaceholder.typicode.com/photos")
     const jsonData = await data.json()
     setData (jsonData)
   }
   useEffect(() =>{
     fetchData()
   }, [])

    return <div className = "container1" style={{backgroundColor: color}}>
        <p style={{color: color2, fontSize: size, textAlign: "center", marginTop:'50%'}}>Data</p>
        {/* <h1>Data</h1>  */}
        {!data.length && <p>loading....</p>}
        {
            data.map((res, index) => {
            return <div >
                {!data.length && <p>loading...</p>}
                <img
                    className="avatar"
                    src={res.thumbnailUrl}
                    alt={'Photo of ' + res.name}
                    style={{
                    width: "150px",
                    height: "150px"
                        }}
                />
                {/* <p>{res.title}</p> */}
            </div>
            })
        }
   
           
    </div>

}

export default Container