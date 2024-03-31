import { Loader, Transactions, Welcome, Footer, Navbar,Services } from './components'

const App = () => (
  <div className="min-h-screen">
  <div className="gradient-bg-welcome">
    <Navbar />
    <Welcome />
  </div>
  <Services />
  <Transactions />
  <Footer />
</div>
);


export default App
