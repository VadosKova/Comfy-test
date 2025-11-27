import './App.css'
import logo from './assets/logo.png'
import catalogIcon from './assets/catalog.png';
import microphoneIcon from './assets/microphone.png';
import magnifyIcon from './assets/magnify.png';
import userIcon from './assets/user.png';
import scaleIcon from './assets/scale.png';
import choosenIcon from './assets/choosen.png';
import notificationIcon from './assets/notification.png';
import cartIcon from './assets/cart.png';
import phoneIcon from './assets/phone.png';
import laptopIcon from './assets/laptop.png';
import ovenIcon from './assets/oven.png';
import washmachIcon from './assets/washing-machine.png';
import tvIcon from './assets/tv.png';
import smartwatchIcon from './assets/smartwatch.png';
import leftIcon from './assets/left-arrow.png';
import rightIcon from './assets/right-arrow.png';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__left">
            <span className="header__lang">УКР</span>
            <span className="header__city">Київ</span>
          </div>

          <nav className="header__nav">
            <a>Акції</a>
            <a>Подарункові картки</a>
            <a>Магазини</a>
            <a>Доставка</a>
            <a>Повернення</a>
            <a>Trade-In</a>
            <a>COMFY допомагає</a>
          </nav>

          <div className="header__help">Допомога</div>
        </div>

        <div className="header__main">
          <div className="header__logo">
              <img src={logo} alt="COMFY" />
          </div>

          <button className="header__catalog-btn">
            <img src={catalogIcon} alt="" className="icon" />
            Каталог
          </button>

          <div className="header__search">
            <input type="text" placeholder="Я шукаю…" className="search__input" />
            <img src={microphoneIcon} alt="microphone" className="search__mic" />
            <button className="search__btn">
              Знайти
              <img src={magnifyIcon} alt="magnify" className="icon" />
            </button>
          </div>

          <div className="header__actions">
            <div className="action">
              <img src={userIcon} className="icon" />
              <span>Увійти</span>
            </div>

            <div className="action">
              <img src={scaleIcon} className="icon" />
              <span>Порівняння</span>
            </div>

            <div className="action">
              <img src={choosenIcon} className="icon" />
              <span>Обране</span>
            </div>

            <div className="action">
              <img src={notificationIcon} className="icon" />
              <span>Повідомлення</span>
            </div>

            <div className="action action--row header__cart">
              <img src={cartIcon} className="icon" />
              <span>Кошик</span>
            </div>
          </div>
        </div>
      </header>

      <div className='section-header'>
        <span className="header__divider">Головна</span>
        <span className="header__divider">Чорна п'ятниця</span>
        <img src="https://cdn.comfy.ua/media/x/brending-bannera/1366x200_1072.jpg"></img>

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
    </>
  )
}

export default Header