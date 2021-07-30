import React, {useState} from 'react';

import Search from './Search';

const MainSearch = () => {
  const [imageIdx, setImageIdx] = useState(0);
  
  /*setInterval(()=> {
    setImageIdx((imageIdx>1)? 0: imageIdx+1);
    console.log(imageIdx)
  }, 7000)*/

  return (
    <div className="main_search_wrap">
        <div className="main_search_images">
          <div className={'search_background image_slider_'+imageIdx}>
            <Search />
          </div>
        </div>
    </div>
  )
}


export default MainSearch;