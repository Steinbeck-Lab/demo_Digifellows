import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ArrowLeft, ArrowRight} from '@site/src/components/Icons';

export default function PaginatorNavLink({permalink, title, subLabel, isNext}) {
  return (
    <Link
      className={clsx('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev')}
      to={permalink}>
      {subLabel && <span className="pagination-nav__sublabel">{subLabel}</span>}
      <span className="pagination-nav__label">
        {!isNext && <ArrowLeft />}
        <span>{title}</span>
        {isNext && <ArrowRight />}
      </span>
    </Link>
  );
}
