import React from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'moment/locale/zh-cn';

import PriceList from './components/PriceList';
import { IPriceListItem } from './components/types/PriceList'

const items: IPriceListItem[] = [
  {
    id: 1,
    title: "去云南旅游",
    price: 200,
    date: moment('2015-01-01'),
    category: {
      id: "1",
      name: "旅行",
      type: "outcome"
    }
  },
  {
    id: 2,
    title: "去云南旅游",
    price: 400,
    date: moment('2015-01-01'),
    category: {
      id: "1",
      name: "旅行",
      type: "outcome"
    }
  }
]


const App: React.FC = () => {
  return (
    <div className="App">
      <PriceList
        items={items}
        onModifyItem={(item)=>{console.log(item.id)}}
        onDeleteItem={(item)=>{console.log(item.id)}}
      />
    </div>
  );
}

export default App;
