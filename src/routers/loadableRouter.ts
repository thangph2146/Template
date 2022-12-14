import { ReactNode } from 'react';
import Loadable from 'react-loadable';
import { IRouter } from './interface';

type ILoadable = {
  loading: ReactNode | any;
  routers: Array<IRouter>;
};

class LoadableRouter {
  routers: Array<IRouter>;
  constructor({ loading, routers }: ILoadable) {
    this.routers = routers.reduce((_arr: Array<any>, item: IRouter) => {
      _arr.push(...flattenIRouter(item, loading));
      return _arr;
    }, []);
  }
}

const flattenIRouter = (item: IRouter, loading: any) => {
  const { isPrivate = true, permissionCode: permisionCode = 'ALLOW' } = item;
  if (item.routes == null) {
    return [
      {
        ...item,
        isPrivate,
        permisionCode,
        component: Loadable({
          loader: () => item.loader,
          loading,
          delay: 200000,
        }),
        menu: undefined,
      },
    ];
  }
  const arr = item.routes.reduce(
    (_arr: any, it: IRouter) => {
      _arr.push(...flattenIRouter(it, loading));
      return _arr;
    },
    [
      {
        ...item,
        isPrivate,
        permisionCode,
        component: Loadable({
          loader: () => item.loader,
          loading,
          delay: 200000,
        }),
        menu: undefined,
        routes: undefined,
      },
    ]
  );
  return arr;
};

export default LoadableRouter;
