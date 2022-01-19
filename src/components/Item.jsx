import React from 'react';
import { ReactComponent as NextArrow } from '../assets/nextArrow.svg';

const Item = ({ url, title, description, current }) => {
  return (
    <div className='w-[80vw] desktop:w-[1060px]'>
      <div className='mx-[10px] my-[20px] desktop:my-0 relative'>
        <div className='w-full inline-block'>
          <div className={`h-[183px] desktop:h-[300px] ${current ? 'brightness-100' : 'brightness-50'}`}>
            <a href='/#' className='center h-full'>
              <img src={url} alt={title} className='inline-block w-full h-full rounded object-cover' />
            </a>
          </div>
          <div
            className={`${
              current ? 'opacity-100' : 'desktop:opacity-0'
            } text-center bg-white desktop:absolute desktop:bottom-[28px] desktop:w-[330px] desktop:h-[146px] desktop:rounded desktop:left-[34px] desktop:text-left`}
          >
            <h2 className='mt-5 text-[18px] font-semibold	 text-[#333] leading-none desktop:mx-[20px] desktop:text-[20px] desktop:leading-normal'>{title}</h2>
            <h3 className='mt-[6px] text-[13px] text-[#333] leading-[1.15] desktop:my-0 desktop:mx-[20px] desktop:h-[44px] desktop:text-[14px] desktop:leading-[1.64] truncate'>{description}</h3>
            <hr className='hidden desktop:block' />
            <a href='/#' className='text-[14px] font-bold text-[#36f] px-2 py-[6px] h-10 inline-flex items-center align-middle desktop:mt-[6px] desktop:ml-[13px]'>
              <span className='flex items-center'>
                바로가기
                <span>
                  <span className='flex items-center'>
                    <NextArrow width='1em' height='1em' fill='#36f' />
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Item);
