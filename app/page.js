import "./globals.css"
import Header from "./Header.js"
import Content from "./Content.js"

const page=()=>{
  return(
    <div className="container">
        <Header/>
        <Content/>
    </div>
  )
}
export default page;