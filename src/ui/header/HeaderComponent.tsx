import { Layout } from 'antd';
import React from 'react';
import { Logo } from '../../ui/form/Logo';
// import { TabsMenu } from '../components/tabs/TabsMenu';
import User from '../../image/Ellipse21.svg';
const { Header } = Layout;
import Logout from '../../image/log-in.svg';
import style from '../../styles/Header.module.scss';
import { useAppDispatch } from '../../bll/store';
import { logOutUsers } from '../../bll/reducers/registration-reducer';
// import { useSelector } from 'react-redux';
// import { selectIsAuthUser } from '../../bll/selectors/Selectors';
// import MenuIcon from '@mui/icons-material/Menu';
// import { ProviderLogOut } from '../../bll/reducers/registration-provider-reducer';

export const HeaderComponent = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const UserName = 'Aндрей';
  // const isAuth = useSelector(selectIsAuthUser);
  // const isAuthProvider = useSelector(selectIsAuthProvider);

  const logOutHandler = () => {
    dispatch(logOutUsers());
    // dispatch(ProviderLogOut());
  };
  // const clickMenuHandler = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <>
        <Header className={style.page_header_container}>
          <div className={style.menuIconContainer}>
            <div className={style.logoGroup}>
              <Logo />
              {/*<TabsMenu />*/}
            </div>
          </div>
          {/*<Button*/}
          {/*  onClick={() => navigate('/login')}*/}
          {/*  className={style.come_in}*/}
          {/*  disabled={isAuth}*/}
          {/*>*/}
          {/*  Войти*/}
          {/*</Button>*/}
          <div className={style.loginUser}>
            {UserName}
            <img className={style.UserLogo} src={User} />
            <img
              src={Logout}
              className={style.logOut}
              onClick={logOutHandler}
            />
          </div>
        </Header>
      </>
    </div>
  );
};
