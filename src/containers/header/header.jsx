import style from './headerStyle.module.css';
import { AppBar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuRounded';


const Header = () => {

    return (
        <header>
            <AppBar position ='static' className={style.appbar}>
                <Toolbar>
                        <IconButton
                        size='large'
                        edge='start' 
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        >

                        
                        </IconButton>

                        <Typography className={style.title} variant="h5" component="div" >
                            Gestionnaire de tâches
                        </Typography>

                        <Button color="inherit">Connexion</Button>
                </Toolbar>
            </AppBar>
        </header>
    );

};

export default Header;