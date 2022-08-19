import { Typography } from "@mui/material";
import { style } from "@mui/system";

const TitlePage = ({ClassName, children}) => {

    return (
        <Typography 
        component='h1'
        variant='h3'
        >

            {children}

        </Typography>
    );
};


export default TitlePage;