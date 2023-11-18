
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOpenOutlined, MenuOutlined } from '@mui/icons-material'


export const NavBar = ( {drawerWidth = 300}) => {

  return (
    <AppBar position='fixed'
    sx={{ 

            width: {  sm: `calc(100% - ${drawerWidth}px)`},
            ml: { sm: `${drawerWidth}px`}
     }}
    
    >
    <Toolbar>
            <IconButton
            color='inherit'
            edge='start'
            sx={ { mr: 2, display: {sm: 'none'} }}
            >

                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>GestorWeb - Carnet: 4090-12-598</Typography>
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>

            </Grid>


    </Toolbar>

    </AppBar>
  )
}
