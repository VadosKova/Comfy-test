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

  return (
    <>
      <div className='discount'>Знижки на Чорну П'ятницю до -50% | Оплата Частинами від 15 платежів</div>

      <Header />

      <div className='section-header'>
        <div className="header__breadcrumbs">
          <span className="header__divider">Головна</span>
          <span className="header__divider">Чорна п'ятниця</span>
        </div>
        
        <img src="https://cdn.comfy.ua/media/x/brending-bannera/1366x200_1072.jpg"></img>

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
            <span>Повна ціна</span>
            <span>Ціна в місяць</span>
          </div>

          <div className='sort'>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
