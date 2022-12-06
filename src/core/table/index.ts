import { SorterResult } from 'antd/lib/table/interface';
import { PaginationEntity } from '../pagination/entity';


export class OptionEntity {
  search?: string;
  from?: any;
  to?: any;
  filter?: { [propName: string]: string | number };
  sorter?: SorterResult<any>;
  constructor(option: null) {
    if (option == null) return;
    Object.assign(this, option);
  }
}

export class TableEntity extends PaginationEntity {
  from: any;
  to: any;
  constructor(pagination: any, option?: OptionEntity) {
    super(pagination);
    if (option?.search != null) {
      this.search = option.search;
    }
    if (option?.from != null) {
      this.from = option.from;
    }
    if (option?.to != null) {
      this.to = option.to;
    }

    if (option?.sorter != null && option.sorter.order) {
      const order: string = option.sorter.order == 'ascend' ? 'asc' : 'desc';
      this.OrderByQuery = `${option.sorter.field} ${order}`;
    }
    Object.assign(this, option?.filter);
  }
}
