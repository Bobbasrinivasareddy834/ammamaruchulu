/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from './logo.svg';
import './App.css';
import { CiFacebook, CiInstagram, CiYoutube, CiLocationOn } from "react-icons/ci";

function App() {
  const googleMapsLink = 'https://www.google.com/maps/@17.4431085,78.3917647,3a,75y,290.09h,90t/data=!3m7!1e1!3m5!1s0HyDNG11x4Na-wzZj4YqlA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0HyDNG11x4Na-wzZj4YqlA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D290.08896%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu';

  const insta = "https://www.instagram.com/reel/CztF4tipMfE/?igshid=NWRjY2QxMjhkNg=="
  const youtube = "https://www.youtube.com/shorts/uuQp6u-_7cU"
  const facebook = "https://www.youtube.com/shorts/3_ujun9MbFs"
  const handleMapLinkClick = () => {
    window.open(googleMapsLink, '_blank');
  };
  const handleinstLinkClick = () => {
    window.open(insta, '_blank');
  };
  const handleyoutubeLinkClick = () => {
    window.open(youtube, '_blank');
  };
  const handlefbLinkClick = () => {
    window.open(facebook, '_blank');
  };
  return (
    <>
      {/* <div className='ss'>
        <nav href='#Hello'>
          <ul className="Topbar" href='#Hello'>
            <a href="https://wa.me/95550907417" id="whatsappNumber" style={{ color: "black" }}> Pootharekulu&nbsp;
              &nbsp; Pala kova&nbsp; &nbsp; Bobbatlu&nbsp; &nbsp; Mysore Pak&nbsp;
              &nbsp; Laddu&nbsp; &nbsp; Madatha Kaja&nbsp; &nbsp; Nethi Ariselu&nbsp; &nbsp;
              Janthikalu&nbsp; &nbsp; Chegodi&nbsp; &nbsp; Gavvalu&nbsp; &nbsp;
              Gottam Kaja</a>
          </ul>
        </nav>
        <div className='main-titel'>
          <div className='row'>
            <img src='/logo.png' alt='logo' width="10%" height="80" className='imge_flued col-sm-2' />
            <div className='col-sm-8'>
              <div className='Centertext'>
                99 Ammamma Ruchulu
              </div>
            </div>
            <div className='col-sm-2'>

              <span className='icon' onClick={handlefbLinkClick} ><CiFacebook /></span>
              <span className='icon' onClick={handleyoutubeLinkClick} ><CiYoutube /></span>
              <span className='icon' onClick={handleinstLinkClick} ><CiInstagram /></span>
              <span className='icon' onClick={handleMapLinkClick}><CiLocationOn /></span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://wa.me/95550907417" id="whatsappNumber" style={{ color: 'black' }}>
              Pootharekulu&nbsp; &nbsp; Pala kova&nbsp; &nbsp; Bobbatlu&nbsp; &nbsp; Mysore Pak&nbsp; &nbsp; Laddu&nbsp; &nbsp; Madatha Kaja&nbsp; &nbsp; Nethi Ariselu&nbsp; &nbsp; Janthikalu&nbsp; &nbsp; Chegodi&nbsp; &nbsp; Gavvalu&nbsp; &nbsp; Gottam Kaja
            </a>
           
          
        </nav>
      </div> */}
      {/* <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://wa.me/95550907417" id="whatsappNumber" style={{ color: 'black' }}>
          Pootharekulu&nbsp; &nbsp; Pala kova&nbsp; &nbsp; Bobbatlu&nbsp; &nbsp; Mysore Pak&nbsp; &nbsp; Laddu&nbsp; &nbsp; Madatha Kaja&nbsp; &nbsp; Nethi Ariselu&nbsp; &nbsp; Janthikalu&nbsp; &nbsp; Chegodi&nbsp; &nbsp; Gavvalu&nbsp; &nbsp; Gottam Kaja
        </a>
      </nav>
    </div> */}

      <div className="fluid">
        <div className="row align-items-center" >
          <img src="/logo.png" alt="logo" width="10%" height="80px" className="img-fluids col-sm-2" />

          <div className="col-sm-8">
            <div className="Centertext">99 Ammamma Ruchulu</div>
          </div>

          <div className="col-sm-2">
            <div className='IconGroup'>
              <span className="icon" onClick={handlefbLinkClick}>
                <CiFacebook />
              </span>
              <span className="icon" onClick={handleyoutubeLinkClick}>
                <CiYoutube />
              </span>
              <span className="icon" onClick={handleinstLinkClick}>
                <CiInstagram />
              </span>
              <span className="icon" onClick={handleMapLinkClick}>
                <CiLocationOn />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/logo-1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>purnam & kova bobatlu</h5>
              <p>All Type of Bobatlu Available</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/logo-2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Jagiri & Dryfruit Pootharekulu</h5>
              <p>All Type of Pootharekulu Available</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/logo-3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Kova & Gulabjumun Bun</h5>
              <p>All Type of Recipes Available</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/26.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Bobbatlu/Puran Poli Recipe</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/27.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Kova Bun / Gulab Jamun Bun</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/1.jpg" alt="Image 1" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Bellam Gavvalu Original Godavari Recipe</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/2.jpg" alt="Image 2" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Bandar Laddu / Tokkudu Laddu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/3.jpg" alt="Image 3" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Gormiti / Gorumitilu / Murupeelu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/4.jpg" alt="Image 4" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Bellam Nuvvula Undalu (Nuvvula Laddu / Sesame Ladoo/ Til Laddu)</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/5.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Milk Mysore Pak</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/6.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Badhusha - Andhra Home Made Special Sweet</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/7.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Halwa Special Dry Fruit</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/8.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Boondhi Achu (or) Boondhi Mithai (or) karakajjam</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/9.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Soan papdi</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/10.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Tapeswaram Madatha Kaja</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/11.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Dry Fruit Pootharekulu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/12.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Kova Billalu / Pala kova - Made with 100% pure organic milk</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/13.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Kajjikayalu (Crispy Coconut Gujiya/Karanji)</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/14.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Nethi Ariselu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/15.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Kakinada Gottam Kaja</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/16.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Kobbari Kova Laddu / Kobbari Kova Kajjikayalu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/17.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Bellam Sunnundalu (Sunnivundalu) | Jaggery Urad Dal Ladoo</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/18.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Peanut ladoo/ Palli Undalu / Bellam Verusenaga Pappu Undalu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/19.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Janthikalu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/20.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Special Pappu Chegodi / Narayana lanka Pappu Chegodilu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/9550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/21.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Karapu Boondi</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/22.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Butter Murukulu</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/23.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Dal Moth Mixture</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/24.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Vampusa / Vamu Pusa</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='cards'>
              <div className="image-container">
                <img src="/25.jpg" alt="Image 5" className="img-fluid" />
                <div className='CardTitel'>
                  <p>Hot Maida Chips / Hot Chips</p>
                </div>
                <div className='CardTitel'>
                  <a href="https://wa.me/95550907417" id="whatsappNumber" class="btn btn-success px-5" >Order</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ background: 'green', color: 'white', padding: '20px' }}>
        <div className="page-width">
          <div className="flex-footer" style={{ display: 'flex', justifyContent: "space-between" }}>
            <div className="flex__item">
              <div className="site-footer__section">
                <h4 className="h1 site-footer__section-title">About us</h4>
                <div className="rte-setting">
                  <p>Ammamma Ruchulu is specialized food delivery <br />service for all types of Godavari Delicacies <br />ranging from Sweets, Snacks,and many more <br /> Authentic Indian food are available.</p>
                </div>
              </div>
            </div>

            <div className="flex__item">
              <div className="site-footer__section">
                <h4 className="h1 site-footer__section-title">Our Locations</h4>
                <div className="rte-setting">
                  <ul>
                    <li>Madhapur, Ayyappa society <br />opp Annapurna curries point-Madhapur -Hyd</li>
                    <br />
                    <li>Chilkuru Balaji food court<br />Google office opp -Kondapur -Hyd</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex__item">
              <div className="site-footer__section">
                <h4 className="h1 site-footer__section-title">Order us</h4>
                <div className="rte-setting">
                  <p>Call us on :95509 07417 / 87908 28158</p>
                  <p>Monday to Sunday - 8 AM to 10 PM</p>
                  <p>for queries email us on :<br />info@99ammammaruchulu.com</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__copyright">
          <div className="page-width">
            <div className="grid medium-up--grid--table">
              <div className="grid__item medium-up--one-half">
                <small>&copy; 2023, <a href="/">Ammamma Ruchulu</a>. </small>
              </div>
              <div className="grid__item medium-up--one-half medium-up--text-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
