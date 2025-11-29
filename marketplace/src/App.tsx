import { useState } from 'react'
import Header from './Header'
import './App.css'
import phoneIcon from './assets/phone.png';
import laptopIcon from './assets/laptop.png';
import ovenIcon from './assets/oven.png';
import washmachIcon from './assets/washing-machine.png';
import tvIcon from './assets/tv.png';
import smartwatchIcon from './assets/smartwatch.png';
import leftIcon from './assets/left-arrow.png';
import rightIcon from './assets/right-arrow.png';
import sortIcon from './assets/sort.png';
import secIcon from './assets/2x2.png';
import thrIcon from './assets/3x3.png';
import basketIcon from './assets/basket.png';
import choosenIcon from './assets/choosen.png';
import scaleIcon from './assets/scale.png';
import starIcon from './assets/star.png';
import smsIcon from './assets/sms.png';
import bonusIcon from './assets/bonus.png';

import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import card4 from './assets/card4.png'
import card5 from './assets/card5.png'
import card6 from './assets/card6.png'
import card7 from './assets/card7.png'
import card8 from './assets/card8.png'
import card9 from './assets/card9.png'
import card10 from './assets/card10.png'
import card11 from './assets/card11.png'
import card12 from './assets/card12.png'

import banner from './assets/banner.png';

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: number;
  rating?: number;
  reviews?: number;
  isBanner?: boolean;
}

function App() {
  const [activePrice, setActivePrice] = useState("full");

  const products: Product[] = [
    { id: 1, title: 'Смартфон Apple iPhone 14 128Gb Midnight', price: 24999, oldPrice: 26999, discount: 2000, rating: 4.9, reviews: 435, image: card1 },
    { id: 2, title: "Телевізор Samsung QE55Q8FAAUXUA", price: 26999, oldPrice: 35999, discount: 9000, rating: 4.9, reviews: 17, image: card2 },
    { id: 100, title: "", price: 0, image: banner, isBanner: true },
    { id: 3, title: "Пральна машина Daewoo WMS712T3WB44UA", price: 12222, oldPrice: 18999, discount: 6777, rating: 4.3, reviews: 42, image: card3 },
    { id: 4, title: "Сковорода універсальна Tefal...", price: 599, oldPrice: 999, discount: 400, rating: 4.8, reviews: 321, image: card4 },

    { id: 5, title: "Пилосос ручний для дому Rowenta...", price: 15999, oldPrice: 29999, discount: 14000, rating: 4.7, reviews: 210, image: card5 },
    { id: 6, title: "Ноутбук ігровий Acer Nitro V 15 ANV15-51-...", price: 35999, oldPrice: 40999, discount: 5000, rating: 4.9, reviews: 92, image: card6 },
    { id: 7, title: "Телевізор JVC LT-43MU759", price: 9999, oldPrice: 14999, discount: 5000, rating: 4.3, reviews: 59, image: card7 },
    { id: 8, title: "Навушники вкладиші бездротові TWS Apple...", price: 5999, oldPrice: 7399, discount: 1400, rating: 4.4, reviews: 72, image: card8 },
    { id: 9, title: "Ігрова приставка PlayStation 5 Sli...", price: 18599, oldPrice: 24999, discount: 6400, rating: 4.9, reviews: 90, image: card9 },

    { id: 10, title: "Набір посуду зі знімною ручкою Tefal...", price: 4199, oldPrice: 12199, discount: 8000, rating: 4.9, reviews: 204, image: card10 },
    { id: 11, title: "Набір склянок з подвійними стінками...", price: 299, oldPrice: 659, discount: 360, rating: 4.7, reviews: 154, image: card11 },
    { id: 12, title: "Холодильник Samsung RB38C676ES9/UA", price: 25999, oldPrice: 32899, discount: 6900, rating: 4.7, reviews: 247, image: card12 },
    { id: 101, title: "", price: 0, image: banner, isBanner: true },

    ...Array.from({ length: 27 - 13 }).map((_, i) => ({
      id: 200 + i,
      title: "Товар " + (i + 14),
      price: 1999 + i * 10,
      oldPrice: 2499 + i * 10,
      discount: 500,
      rating: 4.7,
      reviews: 30 + i,
      image: card1
    }))
  ];

  return (
    <>
      <div className='discount'>Знижки на Чорну П'ятницю до -50% | Оплата Частинами від 15 платежів</div>

      <Header />

      <div className='section-header'>
        <div className="header__breadcrumbs">
          <span className="header__divider">Головна</span>
          <span className="header__divider">Чорна п'ятниця</span>
        </div>
        
        <img src="https://cdn.comfy.ua/media/x/brending-bannera/1366x200_1072.jpg" />

        <div className="categories-wrapper">
          <button className='not-active-carousel'>
            <img src={leftIcon} className="icon" />
          </button>
          <div className="categories">
            <div className="categories__title">
              <div className='categorie-count'>1850</div>
              <img src={phoneIcon} className="icon" />
              Смартфони та телефони
            </div>
            <div className="categories__title">
              <div className='categorie-count'>10140</div>
              <img src={laptopIcon} className="icon" />
              Ноутбуки, планшети та комп'ютерна техніка
            </div>
            <div className="categories__title">
              <div className='categorie-count'>3877</div>
              <img src={ovenIcon} className="icon" />
              Техніка для кухні
            </div>
            <div className="categories__title">
              <div className='categorie-count'>1552</div>
              <img src={washmachIcon} className="icon" />
              Техніка для дому
            </div>
            <div className="categories__title">
              <div className='categorie-count'>670</div>
              <img src={tvIcon} className="icon" />
              Телевізори та мультимедіа
            </div>
            <div className="categories__title">
              <div className='categorie-count'>364</div>
              <img src={smartwatchIcon} className="icon" />
              Смарт-годинники та гаджети
            </div>
          </div>
          <button className='active-carousel'>
            <img src={rightIcon} className="icon" />
          </button>
        </div>
      </div>

      <section className="products-section">
        <h2>Чорна п'ятниця 2025</h2>
        <h3>10000 товарів</h3>
        <h4>сторінка 1</h4>

        <div className='basic-filters'>
          <div className='price-per'>
            <span className={activePrice === "full" ? "active-price" : ""} onClick={() => setActivePrice("full")}>Повна ціна</span>
            <span className={activePrice === "month" ? "active-price" : ""} onClick={() => setActivePrice("month")}>Ціна в місяць</span>
          </div>

          <div className='sort'>
            <img src={sortIcon} className="icon" />
            За популярністю
          </div>

          <div className='view-options'>
            <img src={thrIcon} className="icon" />
            |
            <img src={secIcon} className="icon" />
          </div>
        </div>
      </section>

      <div className="filters-layout">
        <aside className="filters-panel">
          <div className="filter-block">
            <h3>Ціна</h3>
            <div className="price-inputs">
              <input type="number" placeholder="8" />
              <span className="dash">—</span>
              <input type="number" placeholder="699 999" />
            </div>
            <button className="apply-btn">ЗАСТОСУВАТИ</button>
          </div>

          <div className="filter-block">
            <h3>Розділ</h3>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Смартфони та телефони</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Ноутбуки, планшети та комп'ютерна техніка</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Техніка для кухні</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Техніка для дому</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Телевізори та мультимедіа</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Смарт-годинники та гаджети</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Аудіо, фото та відео</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Ігрові консолі та геймінг</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Краса і здоров'я</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Посуд</span>
            </div>
          </div>

          <div className="filter-block">
            <h3>Бренд</h3>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Samsung</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Apple</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Lenovo</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Xiaomi</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Bosch</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Philips</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Tefal</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Asus</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>LG</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Daewoo</span>
            </div>
          </div>

          <div className="filter-block">
            <h3>Наявність</h3>
            <div className="filter-row">
              <input type="checkbox" />
              <span>Тільки в наявності</span>
            </div>
            <div className="filter-row">
              <input type="checkbox" />
              <span>В магазині</span>
            </div>
          </div>

          <div className="filter-block">
            <h3>Діючі акції</h3>
            <div className="filter-row"><input type="checkbox" /><span>ЧОРНА П'ЯТНИЦЯ</span></div>
            <div className="filter-row"><input type="checkbox" /><span>Знижка на комплект</span></div>
            <div className="filter-row"><input type="checkbox" /><span>КРАЩ</span></div>
            <div className="filter-row"><input type="checkbox" /><span>КРАЩ online</span></div>
            <div className="filter-row"><input type="checkbox" /><span>5% бонусів за оплату онлайн</span></div>
            <div className="filter-row"><input type="checkbox" /><span>ДОСТАВИМО за 1₴ в квартиру</span></div>
            <div className="filter-row"><input type="checkbox" /><span>ДОСТАВИМО за 1₴ у відділення</span></div>
            <div className="filter-row"><input type="checkbox" /><span>Оплата частинами</span></div>
            <div className="filter-row"><input type="checkbox" /><span>Знижка</span></div>
          </div>

          <div className="missing-filters">
            <p>Не вистачає фільтрів?</p>
            <button className="suggest-btn">Запропонуй!</button>
          </div>
        </aside>

        <div className="products-placeholder">
          {products.map((p) =>
            p.isBanner ? (
              <div className="product-banner" key={p.id}>
                <img src={p.image} alt="banner" />
              </div>
            ) : (
              <div className="product-card" key={p.id}>
                <div className="card-actions">
                  <img src={choosenIcon} className="icon" alt="favorite" />
                  <img src={scaleIcon} className="icon" alt="compare" />
                </div>
                <img src={p.image} className="product-image" alt={p.title} />
                <div className="product-title">{p.title}</div>
                <div className="product-rating">
                  <img src={starIcon} className="rating-icon" />
                  <span>{p.rating}</span>
                  <img src={smsIcon} className="rating-icon" />
                  <span>{p.reviews}</span>
                </div>
                <div className="old-price-row">
                  <span className="old-price">{p.oldPrice} ₴</span>
                  <span className="discount-card">-{p.discount} ₴</span>
                </div>

                <div className="price-row">
                  <span className="price">{p.price} ₴</span>
                  <button className="buy-btn">
                    <img src={basketIcon} />
                  </button>
                </div>

                <div className="bonus-row">
                  <img src={bonusIcon} />
                  <span>+ {Math.round(p.price * 0.01)} бонусів</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default App
