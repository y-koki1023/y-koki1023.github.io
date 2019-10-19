import React from 'react'
import Events from './Events'
import Style from '../css/History.module.css'
function History(){
    return(
        <section name = "history" className = {Style.HistoryBody}>
            <p className = {Style.HistoryTitle}> History </p>
            <p className = {Style.HistorySectionYear} >2014</p>
            <div className = {Style.HistorySection} >
              <Events title = "金沢工業高等専門学校に入学 グローバル情報工学科" />
            </div>
            <p className = {Style.HistorySectionYear} > 2016 </p>
            <div className = {Style.HistorySection}>
              <Events title = "ニュージーランドに一年間留学"/> 
            </div>
            <p className = {Style.HistorySectionYear} >2017 </p>
            <div className = {Style.HistorySection}>
              <Events title = "TOEIC L&R 755点取得 (2017年5月)" />
            </div>
            <p className = {Style.HistorySectionYear} > 2018 </p>
            <div className = {Style.HistorySection}>
              <Events title = "第11回全国高等専門学校英語プレゼンテーションコンテスト 全国大会出場権獲得" />
              <Events title = "国際高専袖研究室に所属" />
              <Events title = "IEEE 7th GCCE 2018 でトマトの収穫量と収穫時期の予測についての口頭発表を行う" />
            </div>
            <p className = {Style.HistorySectionYear} >2019 </p>
            <div className = {Style.HistorySection}>
              <Events title = "豊橋技術科学大学　情報知能工学課程 3年次編入" />
              <Events title = "TOEIC L&R(IP) 880点取得(2019年4月)" />
            </div>
        </section>
    )
}
export default History