import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({channel,image,noOfVideos,subs,verified,description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo'  alt={channel} src={image} />
        <div className='channelRow__text'>
            <h4>{channel}{verified && <VerifiedIcon />}</h4>
            <p>
                {subs} subscrbers • {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow