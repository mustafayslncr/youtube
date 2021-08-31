import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import RestoreIcon from '@material-ui/icons/Restore';
import { Avatar } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import AdjustIcon from '@material-ui/icons/Adjust';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div style={{color:'red',cursor:'pointer',fontWeight:'bold',letterSpacing:'1px'}} className="solbar">
                <HomeIcon/><span> Ana Sayfa</span>
            </div>
            <div className="solbar solbarhover">
                <ExploreIcon/><span> Keşfet</span>
            </div>
            <div className="solbar solbarhover">
                <SubscriptionsIcon/><span> Abonelikler</span>
            </div>
            <hr/>
            <div className="solbar solbarhover">
                <CollectionsBookmarkIcon/><span> Kitaplık</span>
            </div>
            <div className="solbar solbarhover">
                <RestoreIcon/> <span> Geçmiş</span>
            </div>
            <hr />
            <div className="solbariki">
                <p>Videoları beğenmek, yorum yapmak ve abone olmak için oturum açın</p>  
                <button className="btn">
                    <Avatar/> <span>Oturum Aç</span>
                </button>
            </div>
            <hr />
            <div className="solbarbir solbariki">
            <p style={{fontWeight:'bold',color:'gray',fontSize:14}}>YOUTUBE'UN EN İYİLERİ</p>
                <div className="solbarhoverbir"><PlayCircleFilledIcon/> <span>Müzik</span></div>
                <div className="solbarhoverbir"><SportsBaseballIcon/> <span>Spor</span></div>
                <div className="solbarhoverbir"><BlurCircularIcon/> <span>Oyun</span></div>
                <div className="solbarhoverbir"><AccessTimeIcon/>  <span>Haberler</span></div> 
                <div className="solbarhoverbir"><ExploreIcon/> <span>Canlı</span></div>
                <div className="solbarhoverbir"><AdjustIcon/> <span>360 Video</span></div>
            </div>
            <hr />
            <div className="solbar solbariki">
            <AddCircleIcon/> <span>Kanallara Göz At</span>
            </div>
            <hr />
            <div className="solbarbir solbariki">
                <p style={{fontWeight:'bold',color:'gray',fontSize:14}}>YOUTUBE'DAN DAHA FAZLA İÇERİK</p>
                    <div className="solbarhoverbir"><YouTubeIcon/><span>Youtube Premium</span></div>
                    <div className="solbarhoverbir"><RecordVoiceOverIcon/><span>Canlı</span></div>
            </div>
            <hr />
            
                <div className="solbar solbariki"><SettingsIcon/><span>Ayarlar</span></div>
                <div className="solbar solbariki"><FlagIcon/><span>İçerik Bildirme Geçmişi</span></div>
                <div className="solbar solbariki"><HelpIcon/><span>Yardım</span></div>
                <div className="solbar solbariki"><FeedbackIcon/><span>Geri Bildirim Gönder</span></div>
            
            <hr />
            <div className="solbariki">
                <p style={{fontWeight:'bold',color:'gray',fontSize:13,lineHeight:2}}>Hakkında Basın Telif hakkı Bize ulaşın İçerik Üreticiler Reklam verme Geliştiriciler
                Şartlar Gizlilik Politika ve Güvenlik YouTube Nasıl Çalışıyor? Yeni özellikleri deneyin</p>
                <p style={{color:'gray',fontSize:13,lineHeight:2,opacity:0.7}}>
                     @2021 Google LLC
                </p>
            </div>
        </div>
    )
}

export default Sidebar
