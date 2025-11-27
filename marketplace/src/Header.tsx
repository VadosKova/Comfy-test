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
              <img src={magnifyIcon} alt="magnify" className="icon" />
              Знайти
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

            <div className="action header__cart">
              <img src={cartIcon} className="icon" />
              <span>Кошик</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header