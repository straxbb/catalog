import ProductList, { Product } from "@/components/product-list";
import { Shield, Award, Users, Heart, Headphones } from "lucide-react";

const products: Product[] = [
  { id: 1, name: "Игровой ПК Phantom X", price: 189990, category: "Игровые ПК", description: "RTX 4080, i9, 32 ГБ DDR5", inStock: true, img: "/products/pc1.webp" },
  { id: 2, name: "Ноутбук Lenovo Legion", price: 124990, category: "Ноутбуки", description: "RTX 4060, Ryzen 7, 16 ГБ", inStock: true, img: "/products/laptop.webp" },
  { id: 3, name: "Монитор ASUS ROG 27\"", price: 44990, category: "Мониторы", description: "165 Гц, IPS, 1 мс", inStock: true, img: "/products/monitor.webp" },
  { id: 4, name: "Клавиатура HyperX Alloy", price: 8990, category: "Периферия", description: "Механическая, RGB", inStock: true, img: "/products/keyboard.webp" },
  { id: 5, name: "Мышь Logitech G Pro", price: 6990, category: "Периферия", description: "Беспроводная, 25 600 DPI", inStock: true, img: "/products/mouse.jpg" },
  { id: 6, name: "Наушники SteelSeries", price: 12990, category: "Аудио", description: "7.1 Surround, микрофон", inStock: true, img: "/products/headphones.webp" },
  { id: 7, name: "SSD Samsung 980 Pro 1TB", price: 11990, category: "Комплектующие", description: "NVMe, 7000 МБ/с", inStock: true, img: "/products/ssd.webp" },
  { id: 8, name: "Корпус NZXT H510", price: 8490, category: "Комплектующие", description: "Mid-Tower, стекло", inStock: true, img: "/products/case.jpg" },
  { id: 9, name: "Блок питания Corsair 750W", price: 9990, category: "Комплектующие", description: "80+ Gold, модульный", inStock: true, img: "/products/psu.webp" },
  { id: 10, name: "Кулер Noctua NH-D15", price: 10990, category: "Охлаждение", description: "Двойной вентилятор", inStock: true, img: "/products/cooler.webp" },
  { id: 11, name: "Веб-камера Logitech C920", price: 7990, category: "Периферия", description: "1080p, автофокус", inStock: true, img: "/products/webcam.jpg" },
  { id: 12, name: "Стол игровой Cougar", price: 24990, category: "Мебель", description: "RGB-подсветка, 140×70", inStock: true, img: "/products/desk.webp" },
  { id: 13, name: "Кресло DXRacer King", price: 34990, category: "Мебель", description: "Ортопедическое, экокожа", inStock: true, img: "/products/chair.jpg" },
  { id: 14, name: "Микрофон HyperX Quadcast", price: 14990, category: "Аудио", description: "USB, кардиоида", inStock: true, img: "/products/microphone.jpg" },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#0b0618] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-transparent to-indigo-900/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <header className="flex flex-wrap justify-between items-center mb-10">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span> C0mput3rX </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Главная</a>
            <a href="#" className="hover:text-white">Каталог</a>
            <a href="#" className="hover:text-white">О нас</a>
            <a href="#" className="hover:text-white">Контакты</a>
          </nav>
          <div className="flex gap-4 text-sm">
            <span>+7 (800) 000-00-00</span>
            <span className="text-violet-400">Связаться с нами</span>
          </div>
        </header>

        <section
  className="relative rounded-3xl border border-white/10 mb-10 overflow-hidden bg-cover bg-right"
  style={{ backgroundImage: "url('/pc.png')" }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b38] via-[#1a0b38]/80 to-transparent" />

  <div className="relative z-10 p-10 md:p-16 max-w-2xl">
    <p className="text-violet-300 text-sm mb-3 tracking-widest uppercase">Магазин техники</p>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Компьютеры <br />
      и комплектующие
    </h1>
    <p className="text-white/60 mb-8 max-w-md">
      Подбор и продажа компьютерной техники, комплектующих и периферии для дома, работы и игр.
    </p>
    <div className="flex flex-wrap gap-4 mb-8">
      <span className="text-3xl font-bold text-violet-400">10</span>
      <span className="text-3xl font-bold text-violet-400">24/7</span>
      <span className="text-sm text-white/60 self-center ml-2">лет опыта • поддержка</span>
    </div>
    <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full font-medium transition">
      Оставить заявку
    </button>
  </div>
</section>

        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[
            { icon: Shield, label: "Качество" },
            { icon: Award, label: "Надёжность" },
            { icon: Users, label: "Доступность" },
            { icon: Heart, label: "Гарантия" },
            { icon: Headphones, label: "Поддержка" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-5 hover:border-violet-400/50 transition"
            >
              <Icon className="h-6 w-6 text-violet-400" />
              <span className="text-sm text-white/80">{label}</span>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Каталог товаров</h2>
          <p className="text-white/50 mb-8 max-w-xl">
            Все товары в наличии на складе. Доставка по всей России. Гарантия качества от производителя.
          </p>

          <ProductList products={products} />
        </section>
      </div>
    </main>
  );
}