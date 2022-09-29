import React from 'react'
import  './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow.js';
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneOutlinedIcon />
            <h2>Filter</h2>
        </div>
        <hr />
        <ChannelRow 
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj"
        channel="clever programmer"
        verified
        subs="1.1M"
        noOfVideos  ={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."/>
        <hr />
        <VideoRow title={"🔴 How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)"}
        description="Course Contents ⌨️: (0:00:00) LIVE demo of the Amazon Clone App ⌨️: (0:16:30) Set up REACT Project ⌨️: (0:18:30) Set ...
        4K"
        image={"https://i.ytimg.com/an_webp/1_IYL9ZMR_Y/mqdefault_6s.webp?du=3000&sqp=CKKSqJEG&rs=AOn4CLDVsUSenc-vZuz2Ue32yPVS9fewuw"}
        subs="1.1M"
        views={"2.4K"}
        timestamp={"1 year ago"}
        channel={"clever programmer"}
        />
        <VideoRow title={"STOP watching tutorials. Code like this instead."}
        description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your ..."
        image={"https://i.ytimg.com/an_webp/d01vkk3CYi0/mqdefault_6s.webp?du=3000&sqp=CL7jp5EG&rs=AOn4CLCc9RCwjHC7OPlMkdewEDnJAU2qIg"}
        subs="1.1M"
        views={"197K"}
        timestamp={"9 months ago"}
        channel="clever programmer"
        />
        <VideoRow title={"Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"}
        image={"https://i.ytimg.com/an_webp/RDV3Z1KCBvo/mqdefault_6s.webp?du=3000&sqp=CIb5p5EG&rs=AOn4CLBzHfNV2ZkhFyqMHReZFZymmit7Lg"}
        description="In this Exclusive React VIDEO training, we will be covering... ✓ Learn how to build the FULL Amazon website with FULL ..."
        subs={"1.1M"}
        views={"1.2M"}
        timestamp={"1 year ago"}
        channel="clever programmer"
        />
        <VideoRow subs="1.1M" 
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
        title={"Dance Performance on Tumko Paya Hai by BSSITM Students | Fresher's Party | Tarang | Rhythm Divine"}
        image={"https://i.ytimg.com/vi/BqGQtwYViK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLE9QyEX2r3fOcjZYSRDcHuH2b1w"}
        views={"2.3k views"}
        timestamp={"2 hours ago"}
        channel={"Bssitm Lko"}/> 
    </div>
  )
}

export default SearchPage