import { MainBar, MainBarNav, MainBarNavTopLogo, Hamburger } from './styled';

export function Navbar() {
  return (
    <>
      <MainBar>
        <MainBarNav>
          <MainBarNavTopLogo>
            <Hamburger>
              <div>
                <img src='https://static.wanted.co.kr/images/icon-menu.png' alt='hamburger-menu' />
              </div>
              <span>wanted</span>
            </Hamburger>
          </MainBarNavTopLogo>
        </MainBarNav>
      </MainBar>
    </>
  );
}
