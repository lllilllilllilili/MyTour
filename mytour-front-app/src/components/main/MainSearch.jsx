import React, {useState} from 'react';

import Search from './Search';
import imgA from '../../assets/image/main/Paris..mp4';

const MainSearch = () => {
  const [imageIdx, setImageIdx] = useState(0);

  return (
    <div className="main_search_wrap">
        <div className="main_search_images">
          <div className={'search_background image_slider_'+imageIdx}>
            <video
              loop
              autoPlay
              muted
              src={imgA} >
            </video>    
            <Search />         
          </div>
        </div>
    </div>
  )
}


export default MainSearch;