import React, {useState, Fragment} from 'react'

const Search = () => {
    const [searchData, setSearchData] = useState('');
    const [searchTourData, setSearchTourData] = useState('');

    const [searchTypes, setSearchTypes] = useState({
      spot: 'on',
      tour: 'off'
    });

    const handleSearchType = (event) => {
      const {name} = event.target;
      if (name==='search_spot_btn') {
        setSearchTypes({...searchTypes, ['spot']: 'on', ['tour']: 'off'})
      } else {
        setSearchTypes({...searchTypes, ['spot']: 'off', ['tour']: 'on'})
      }
    }

    const handleDataChange = (event) => {
      const {name, value} = event.target;
      setSearchData(value)
    }

    return (
      <Fragment>
        <div className="search_type">
          <button 
            name="search_spot_btn"
            className={"search_spot_btn "+searchTypes.spot}
            onClick={handleSearchType}>관광지</button>
          <button 
            name="search_tour_btn"
            className={"search_tour_btn "+searchTypes.tour}
            onClick={handleSearchType}>여행코스</button>
        </div> 
        <div className="search_data_input_wrap">
          <input 
            type="text"
            value={searchData}
            name="search_spot"
            className={"search_data_input "+searchTypes.spot}
            placeholder="어디로 떠나고 싶으신가요?✈"
            onChange={handleDataChange}/>
          <input 
            type="text"
            name="search_tour"
            value={searchData}
            className={"search_data_input "+searchTypes.tour}
            placeholder="여행코스를 찾고 계신가요?✈" 
            onChange={handleDataChange}/>
          <button className="search_btn">SEARCH</button>
        </div>
      </Fragment>
    )
}

export default Search;