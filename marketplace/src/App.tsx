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

function App() {
  const [activePrice, setActivePrice] = useState("full");

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
          
        </div>

      </div>
    </>
  )
}

export default App
