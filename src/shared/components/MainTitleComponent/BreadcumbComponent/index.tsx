import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
import { IBreadcrumbs } from '../inteface';
import { IRouter } from '../../../../routers/interface';
import { ArrowRight } from 'react-feather';
const BreadcrumbComponent: React.FC<IBreadcrumbs> = ({ breadcrumbs, className = '' }) => {
  const renderBreadcrumbArray = () => {
    if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      return breadcrumbs.map((router: IRouter, index) => {
        let lastBreadcrumb = index + 1 == breadcrumbs.length;
        let classNameBreadcrumb = '';
        if (lastBreadcrumb == true) {
          classNameBreadcrumb = 'breadcrumb__last';
        }
        return (
          <React.Fragment key={index}>
            <span className="breadcrumb__icon">
              <Icon component={ ArrowRight } />
            </span>
            <span className={`breadcrumb__li ${classNameBreadcrumb} `}>
              <Link to={!lastBreadcrumb ? router.path : ''}>
                {router.name ?  router.name  : 'unknown'}
              </Link>
            </span>
          </React.Fragment>
        );
      });
    } else {
      const router: any = breadcrumbs;
      return (
        <React.Fragment>
          <span className="breadcrumb__icon">
            <Icon component={ ArrowRight }  />
          </span>
          <span className={`breadcrumb__li breadcrumb__last `}>
            <Link to={router.path}>{router.headerName ?  router.headerName : 'unknown'}</Link>
          </span>
        </React.Fragment>
      );
    }
  };
  return (
    <div className={`breadcrumb__box ${className}`}>
      <span className="breadcrumb__li">
        <Link to="/">Trang chủ</Link>
      </span>
      {renderBreadcrumbArray()}
    </div>
  );
};

export default memo(BreadcrumbComponent);
