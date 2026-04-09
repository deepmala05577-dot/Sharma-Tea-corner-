import { motion } from "motion/react";
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    name: "Masala Chai",
    price: "₹20",
    description: "Our signature blend of spices and strong Assam tea.",
    image: "https://picsum.photos/seed/chai/400/300"
  },
  {
    name: "Bun Makkhan",
    price: "₹40",
    description: "Soft bun loaded with fresh white butter. A classic Lucknow treat.",
    image: "https://picsum.photos/seed/bun/400/300"
  },
  {
    name: "Samosa",
    price: "₹15",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    image: "https://picsum.photos/seed/samosa/400/300"
  },
  {
    name: "Kachori Sabzi",
    price: "₹50",
    description: "Flaky kachoris served with spicy potato curry.",
    image: "https://picsum.photos/seed/kachori/400/300"
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-clay rounded-full flex items-center justify-center text-white">
              <Coffee size={24} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">
              Sharma Tea Corner
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-brand-clay transition-colors">About</a>
            <a href="#menu" className="hover:text-brand-clay transition-colors">Menu</a>
            <a href="#contact" className="hover:text-brand-clay transition-colors">Contact</a>
            <Button className="bg-brand-olive hover:bg-brand-olive/90 rounded-full px-6">
              Order Now
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/lucknow-tea/1920/1080" 
              alt="Tea pouring" 
              className="w-full h-full object-cover brightness-50"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <Badge className="mb-4 bg-brand-saffron text-stone-900 hover:bg-brand-saffron border-none px-3 py-1">
                Lucknow's Finest Since 1960
              </Badge>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                The Soul of Lucknow in Every Sip
              </h1>
              <p className="text-xl text-stone-200 mb-8 font-light leading-relaxed">
                Experience the authentic taste of Masala Chai and Bun Makkhan at the heart of Hazratganj. A tradition that brings people together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-brand-clay hover:bg-brand-clay/90 text-white rounded-full px-8 h-14 text-lg">
                  Explore Menu
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8 h-14 text-lg">
                  Find Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats/Quick Info */}
        <section className="py-12 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center items-center gap-1 text-brand-saffron mb-2">
                  <Star fill="currentColor" size={20} />
                  <span className="text-2xl font-bold text-stone-900">4.3</span>
                </div>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">128 Reviews</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-900 mb-2">₹600</div>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Price for Two</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-900 mb-2">7 AM - 9 PM</div>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Opening Hours</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-900 mb-2">Hazratganj</div>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">Location</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-stone-900">
                  A Popular Local Tea Stall Known for Tradition
                </h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  Sharma Tea Corner isn't just a place to grab a quick snack; it's a landmark in Lucknow's culinary map. For decades, we've been the go-to spot for locals and tourists alike who seek the perfect balance of spices in their tea and the softest bun makkhan in town.
                </p>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Located in the bustling Hazratganj Market, we offer a slice of Lucknow's vibrant culture, one cup at a time. Whether it's a morning kickstart or an evening catch-up, our tea corner is where stories are shared and memories are made.
                </p>
                <div className="flex items-center gap-4 text-brand-clay font-semibold italic">
                  <span>"The best masala chai in Uttar Pradesh"</span>
                  <Separator className="w-12 bg-brand-clay" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://picsum.photos/seed/cafe-vibe/800/1000" 
                  alt="Cafe atmosphere" 
                  className="rounded-3xl shadow-2xl aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 bg-brand-olive text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                  <p className="text-3xl font-serif font-bold mb-1">60+</p>
                  <p className="text-sm uppercase tracking-widest opacity-80">Years of Legacy</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section id="menu" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-stone-900">Menu Highlights</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Handpicked favorites that define our legacy. Simple, authentic, and bursting with flavor.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-stone-100 hover:shadow-xl transition-shadow duration-300 group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-bold text-stone-900">{item.name}</h3>
                        <span className="text-brand-clay font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="rounded-full border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white px-8">
                View Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section id="contact" className="py-24 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Visit Us</h2>
                <p className="text-stone-400 mb-12 text-lg">
                  We're located in the heart of Lucknow. Stop by for a cup of tea and experience the local buzz.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-saffron">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Address</h4>
                      <p className="text-stone-400">12, Hazratganj Market<br />Lucknow, Uttar Pradesh - 226001</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-saffron">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                      <p className="text-stone-400">Mon–Sat: 7:00 AM – 9:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-saffron">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-stone-400">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-saffron">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-stone-400">sharmatea@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[400px] rounded-3xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.812345678901!2d80.9412345678901!3d26.84612345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0000000001%3A0x0!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-clay rounded-full flex items-center justify-center text-white">
                <Coffee size={18} />
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Sharma Tea Corner
              </span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
            
            <p className="text-sm">
              © 2026 Sharma Tea Corner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
