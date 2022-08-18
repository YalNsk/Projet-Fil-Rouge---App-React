import { Drawer , Avatar} from "@mui/material";
import IconMenu from './buzz.jpg'

const NavBar = ({isVisible, onCloseMenu}) => {

    return (

        <Drawer 
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