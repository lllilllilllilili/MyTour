import React from 'react';

import '../../assets/css/review/review.css';
import Star from  '../../lib/utils/Star';

const Review = () => {
  return (
    <div className="review_wrap">
      <div className="spot_review_search">
        <input 
          type="search"
          placeholder="방문하신 여행지를 검색해주세요." />
      </div>
      <div className="review_spot_info">
        <div className="spot_image">
          
        </div>
        <div className="spot_info">

        </div>
      </div>
      <div className="review_inputs">
        <form className="review_input_form" action="">
          <div className="all_score">
            <p className="score_title">총점 *</p>
            <Star />
          </div>
          <hr />
          <div className="complex_score">
            <p className="score_title">혼잡도 점수 *</p>
            <Star />
          </div>
          <div className="view_score">
            <p className="score_title">풍경 점수 *</p>
            <Star />
          </div>
          <div className="with_who">
            누구와 갔니 *
            <input type="text" />
          </div>
          <div className="whether">
            날씨
            <select name="" id="">
              <option value="">맑음</option>
              <option value="흐림">흐림</option>
            </select>
          </div>
          <div className="visted_date">
            방문날짜
          </div>
          <div className="review_content">
            리뷰내용 *
            <input 
              type="text"
              placeholder="리뷰를 작성해주세요" />
          </div>
          <div className="hashtag">
            <input 
              typs="text"
              placeholder="해시태그 작성"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Review;