import React from 'react';
import { ReactComponent as SearchButton } from '../assets/searchButton.svg';
import { ReactComponent as NotificationButton } from '../assets/notificationButton.svg';
import { ReactComponent as MenuButton } from '../assets/menuButton.svg';
import { ReactComponent as New } from '../assets/new.svg';
import { ReactComponent as Beta } from '../assets/beta.svg';
import { ReactComponent as Badge } from '../assets/badge.svg';
import Profile from '../assets/default.png';

const Navbar = () => {
  return (
    <div className='fixed w-full z-10 bg-white border-b-[1px] '>
      <div className='max-w-[1060px] relative h-[110px] tablet:w-[90%] tablet:mx-auto laptop:h-[50px] desktop:w-[87.72%]'>
        <nav className='sort flex-row flex-wrap'>
          <div className='sort w-full h-[60px] py-4 px-5 tablet:px-0 laptop:py-0 laptop:w-fit laptop:h-fit'>
            <div className='flex'>
              <button type='button' className='mr-4 mt-1'>
                <img src='https://static.wanted.co.kr/images/icon-menu.png' alt='hamberger menu' style={{ width: 17, height: 14, objectFit: 'contain' }} />
              </button>
              <a href='/#'>
                <img src='https://www.wantedlab.com/img/logo.png' alt='원티드_로고' style={{ width: 74, height: 17 }} />
              </a>
            </div>
          </div>
          <ul className='laptop:flex laptop:justify-evenly laptop:flex-1 desktop:block desktop:flex-none'>
            <li className='menu tablet:hidden pl-[20px]'>
              <a href='/' className=''>
                홈
              </a>
            </li>
            <li className='menu'>
              <a href='/#'>채용</a>
            </li>
            <li className='menu'>
              <a href='/#'>이벤트</a>
            </li>
            <li className='hidden tablet:menu'>
              <a href='/#'>직군별 연봉</a>
            </li>
            <li className='hidden tablet:menu'>
              <a href='/#'>이력서</a>
            </li>
            <li className='hidden tablet:menu'>
              <a href='/#'>
                커뮤니티
                <em className='absolute desktop:top-[10px] desktop:right-[-5px] pointer-events-none not-italic center h-[20px] top-[4px] right-[-8px]'>
                  <New />
                </em>
              </a>
            </li>
            <li className='hidden tablet:menu'>
              <a href='/#'>프리랜서</a>
            </li>
            <li className='hidden tablet:menu'>
              <a href='/#'>
                AI 합격예측
                <span className='absolute desktop:top-[10px] desktop:right-[-7px] pointer-events-none h-[20px] center top-[5px] right-[-7px]'>
                  <Beta />
                </span>
              </a>
            </li>
          </ul>
          <aside className='h-full py-[9px]'>
            <ul>
              <li className='mobile_aside'>
                <button type='button' className='m-0 px-[5px] laptop:mt-[5px] desktop:px-[10px]'>
                  <SearchButton />
                </button>
              </li>
              <>
                <li className='mobile_aside'>
                  <button type='button' className='m-0 px-[5px] laptop:mt-[5px] laptop:mr-[5px] desktop:px-[10px] desktop:mr-[10px]'>
                    <NotificationButton />
                  </button>
                  <span className='w-[13px] h-[13px] bg-[#36f] absolute top-[-4px] left-[24px] center rounded-[5px] '>
                    <Badge />
                  </span>
                </li>
                <li className='hidden laptop:mobile_aside laptop:inline-flex laptop:items-center laptop:mr-[5px]'>
                  <button type='button' className='mr-[11px]'>
                    <div className='profile'>
                      <img src={Profile} alt='profile' className='w-7 h-7 rounded-full' />
                    </div>
                  </button>
                </li>
              </>
              <li className='hidden dashboard_button'>
                <a href='/#' className='desktop:ml-[15px]'>
                  기업 서비스
                </a>
              </li>
              <li className='mobile_aside laptop:hidden'>
                <button type='button' className='pl-[10px] pr-[5px] mr-[10px] tablet:m-0'>
                  <MenuButton />
                </button>
              </li>
            </ul>
            <div></div>
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
