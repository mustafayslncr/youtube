import React from 'react'
import './Home.css'
import { Avatar } from '@material-ui/core'

const Home = () => {
    return (
        <div className="home">
            <div className="menubutton">
                    <button>Tümü</button>
                    <button>Mix'ler</button>
                    <button>Müzik</button>
                    <button>Yemek Pişirme Programları</button>
                    <button>Futbol</button>
                    <button>Aksiyon-Macera Oyunları</button>
                    <button>Son Yüklenenler</button>
                    <button>İzlenenler</button>
            </div>
            <div className="ortavideolar">
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/JGwWNGJdvx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Ed Sheeran - Shape of You</span>
                        </div>
                        <div className="baslikiki">
                            <span>Ed Sheeran</span>
                            <span>5.3 Mr görüntülenme * 30 Ocak 2017</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/Ck63ZX-QO_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Derya Uluğ - Kanunlar Gibi</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>14 Mn görüntülenme * 30 Nisan 2021</span>
                        </div>
                </div>
                <div className="video">
                    <iframe width="350" height="220" src="https://www.youtube.com/embed/9tB2ag6sv68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Irmak Arıcı - Güya</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>28 Mn görüntülenme * 19 Mart 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/Dz0SIT0B6o0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Buray - Deli Divane</span>
                        </div>
                        <div className="baslikiki">
                            <span>Buray</span>
                            <span>92 Mn görüntülenme * 11 Mayıs 2018</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/qAX_O2e3hx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Tuğçe Kandemir-Ah Ellerim Kırılaydı</span>
                        </div>
                        <div className="baslikiki">
                            <span>Tuğçe Kandemir</span>
                            <span>103 Mn görüntülenme * 19 Mart 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/5z-j3_J30rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Sakiler - Dünyadan Uzak</span>
                        </div>
                        <div className="baslikiki">
                            <span>Bizim Bahçe Müzik</span>
                            <span>50 Mn görüntülenme * 18 Aralık 2020</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/h5oHhGlWKf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Madrigal - Seni Dert Etmeler</span>
                        </div>
                        <div className="baslikiki">
                            <span>MüzikPlay</span>
                            <span>47 Mn görüntülenme * 27 Mart 2020</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/eGmpz1KXF4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Ebru Yaşar - Yalnız Uyunmaz</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>15 Mn görüntülenme * 9 Nisan 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/aRbj2MzaCFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Ceylan - Birileri Kandırmış</span>
                        </div>
                        <div className="baslikiki">
                            <span>Ceylan Müzik</span>
                            <span>14 Mn görüntülenme * 11 Mart 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/HvuLecJdefo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Derya Bedavacı - Affet</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>31 Mn görüntülenme * 29 Ocak 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/DjSBg3WpxnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Diyar Pala - Uzak Ol</span>
                        </div>
                        <div className="baslikiki">
                            <span>Diyar Pala</span>
                            <span>46 Mn görüntülenme * 4 Eylül 2020</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/wRVekDWb47I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Merve Özbey - Vuracak</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>165 Mn görüntülenme * 11 Temmuz 2018</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/26xNHZzGJZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Hadise - Hay Hay</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>18 Mn görüntülenme * 18 Haziran 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/sLgz57tguKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Maneskin - Beggin</span>
                        </div>
                        <div className="baslikiki">
                            <span>Vibe Music</span>
                            <span>58 Mn görüntülenme * 10 Haziran 2021</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/4OkiH2yD-eQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Zehra - Cennetten Çiçek</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>237 Mn görüntülenme * 25 Haziran 2020</span>
                        </div>
                </div>
                <div className="video">
                <iframe width="350" height="220" src="https://www.youtube.com/embed/bbflWvhBIBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="baslik">
                            <Avatar/>
                            <span>Ziynet Sali - Efkarım var</span>
                        </div>
                        <div className="baslikiki">
                            <span>netd müzik</span>
                            <span>30 Mn görüntülenme * 2 Nisan 2021</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
