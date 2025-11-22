import Header from "./layout/Header/Header"
import Content from "./layout/Content/Content"
import Footer from "./layout/Footer/Footer"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Content>
        <ProductsPage />
      </Content>
      <Footer />
    </div>
  )
}

export default App
