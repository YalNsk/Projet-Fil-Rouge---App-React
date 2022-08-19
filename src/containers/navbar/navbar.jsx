import { Drawer, Avatar, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import IconMenu from "./buzz.jpg";
import style from "./navbar.module.css";

const NavBar = () => {
    return (
        <nav className={style.navbarStyle}>
            <Stack 
            direction='column'
            divider={<Divider orientation='horizontal'/>}
            spacing={2}
            >
                <Avatar
                    className={style.logoStyle}
                    alt="Logo menu" src={IconMenu} />
                <h5>Le menu</h5>
            </Stack>
        </nav>
    );
};

export default NavBar;
