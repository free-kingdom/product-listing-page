import Header from "./layout/Header/Header"
import Content from "./layout/Content/Content"
import Footer from "./layout/Footer/Footer"
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage"
import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Content>
        <ProductListingPage />
      </Content>
      <Footer />
    </div>
  )
}

export default App
