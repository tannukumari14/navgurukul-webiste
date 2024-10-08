import "./globals.css"
import Header from "./Header.js"
import Content from "./Content.js"
import Footer from "./Footer"

const page=()=>{
  return(
    <div className="container">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}
export default page;