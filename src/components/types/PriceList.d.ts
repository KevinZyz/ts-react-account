import moment from 'moment'

/** 条目类型 */
type CategoryType = "income" | "outcome"

/** 条目分类信息 */
interface ICategory {
  id: string,
  name: string,
  type: CategoryType
}

/** 条目信息 */
export interface IPriceListItem {
  id: number,
  title: string,
  price: number,
  date: moment.Moment,
  category: ICategory
}

export interface IProps{
  items: IPriceListItem[],
  onModifyItem: (item: IPriceListItem) => void,
  onDeleteItem: (item: IPriceListItem) => void 
}