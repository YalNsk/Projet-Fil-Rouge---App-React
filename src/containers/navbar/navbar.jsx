import { Drawer , Avatar} from "@mui/material";
import IconMenu from './buzz.jpg'
import style from './navbar.module.css'

const NavBar = ({isVisible, onCloseMenu}) => {

    return (

        <Drawer 
        className={style.navbarStyle}
        open={isVisible}
        anchor='left'
        onClose={onCloseMenu}
        > 
            <Avatar 
            sx={{ width :90, height : 90}}
            alt ='Logo menu'
            src={IconMenu}
            />
        </Drawer>

    );


};

export default NavBar;