import './index'
import CityName from "./CityName";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationDot);

function App() {
  return (
    <div className="all-app py-[60px]">
      <div className="text-[30px] text-center text-blue-900"> weather app </div>
        <CityName/>
      </div>
  );
}

export default App;
