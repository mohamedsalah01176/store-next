

// import Navbar from "./componenet/navbar/Navbar";
// import Footer from "./componenet/footer/Footer";
import Products from "./componenet/Prodects/Products";
// import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className={styles.body}>
        
      <main className="container">
      <Products/>
      </main>
      
      
    </div>
  );
}
