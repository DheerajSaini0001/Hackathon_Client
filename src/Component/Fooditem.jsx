function Fooditem() {
     return (
      <>
     
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    type="text/tailwindcss"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t@layer base {\n\t\t\t\t:root {\n\t\t\t\t\t--background: 0 0% 100%;\n--foreground: 240 10% 3.9%;\n--card: 0 0% 100%;\n--card-foreground: 240 10% 3.9%;\n--popover: 0 0% 100%;\n--popover-foreground: 240 10% 3.9%;\n--primary: 240 5.9% 10%;\n--primary-foreground: 0 0% 98%;\n--secondary: 240 4.8% 95.9%;\n--secondary-foreground: 240 5.9% 10%;\n--muted: 240 4.8% 95.9%;\n--muted-foreground: 240 3.8% 46.1%;\n--accent: 240 4.8% 95.9%;\n--accent-foreground: 240 5.9% 10%;\n--destructive: 0 84.2% 60.2%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 5.9% 90%;\n--input: 240 5.9% 90%;\n--ring: 240 5.9% 10%;\n--radius: 0.5rem;\n\t\t\t\t}\n\t\t\t\t.dark {\n\t\t\t\t\t--background: 240 10% 3.9%;\n--foreground: 0 0% 98%;\n--card: 240 10% 3.9%;\n--card-foreground: 0 0% 98%;\n--popover: 240 10% 3.9%;\n--popover-foreground: 0 0% 98%;\n--primary: 0 0% 98%;\n--primary-foreground: 240 5.9% 10%;\n--secondary: 240 3.7% 15.9%;\n--secondary-foreground: 0 0% 98%;\n--muted: 240 3.7% 15.9%;\n--muted-foreground: 240 5% 64.9%;\n--accent: 240 3.7% 15.9%;\n--accent-foreground: 0 0% 98%;\n--destructive: 0 62.8% 30.6%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 3.7% 15.9%;\n--input: 240 3.7% 15.9%;\n--ring: 240 4.9% 83.9%;\n\t\t\t\t}\n\t\t\t}\n\t\t"
    }}
  />
  <div className="bg-[var(--background)] text-[var(--foreground)] p-4 overflow-x-hidden">
    <div className="container mx-auto">
      <header className="flex justify-between items-center py-4">
        <img
          src="https://placehold.co/100x50?text=Logo"
          alt="Restaurant Logo"
          className="h-12"
        />
        <nav className="flex space-x-4">
          <a
            href="#"
            className="text-[var(--foreground)] hover:text-[var(--primary)]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[var(--foreground)] hover:text-[var(--primary)]"
          >
            Menu
          </a>
          <a
            href="#"
            className="text-[var(--foreground)] hover:text-[var(--primary)]"
          >
            About
          </a>
          <a
            href="#"
            className="text-[var(--foreground)] hover:text-[var(--primary)]"
          >
            Contact
          </a>
        </nav>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-[var(--card)] p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            Unforgettable Burgers, Unforgettable Memories
          </h1>
          <p className="text-lg mb-6">
            Experience the best burgers in town with our unique recipes and
            fresh ingredients.
          </p>
          <a
            href="#"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg"
          >
            Order Now
          </a>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500 rounded-full transform translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative bg-[var(--card)] p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            Indulge in the Best Steaks in Town
          </h1>
          <p className="text-lg mb-6">
            Savor the flavors of our juicy and tender steaks, cooked to
            perfection.
          </p>
          <a
            href="#"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg"
          >
            Order Now
          </a>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500 rounded-full transform translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Unleash Your Burger Cravings with Our Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://placehold.co/150x150"
              alt="Classic Burger"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Classic Burger</h3>
            <p className="text-lg">$10.99</p>
          </div>
          <div className="text-center">
            <img
              src="https://placehold.co/150x150"
              alt="Bacon Burger"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Bacon Burger</h3>
            <p className="text-lg">$12.99</p>
          </div>
          <div className="text-center">
            <img
              src="https://placehold.co/150x150"
              alt="Cheese Burger"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Cheese Burger</h3>
            <p className="text-lg">$11.99</p>
          </div>
          <div className="text-center">
            <img
              src="https://placehold.co/150x150"
              alt="Veggie Burger"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Veggie Burger</h3>
            <p className="text-lg">$9.99</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg"
          >
            See Full Menu
          </a>
        </div>
      </section>
      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://placehold.co/500x300"
              alt="Restaurant Interior"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Delicious Burgers Made from the Freshest Ingredients
            </h2>
            <p className="text-lg mb-6">
              Since 1995, we have been serving the best burgers and steaks in
              town. Our commitment to quality and taste is unmatched.
            </p>
            <p className="text-lg">
              Join us for a meal and experience the difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>


      </>
    )
  }
  
  export default Fooditem