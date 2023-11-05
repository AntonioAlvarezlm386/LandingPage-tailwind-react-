import { Footer, SuperQuality } from './components/index.js'

function App() {
    return (
      <main className="relative">
        nav
        <section className="xl:padding-1 wide:padding-r padding-b">
          hero
        </section>
        <section className="padding">
          popular products
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          services
        </section>
        <section className="padding">
          pspecial offer
        </section>

        <section className="padding bg-pale-blue">
          customer reviews
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          subscribe
        </section>
        <section className="padding-x padding-t pb-8 bg-black">
          <Footer/>
        </section>
      </main>
    )
  }
export default App;