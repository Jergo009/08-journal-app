
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { AccountCircle, Book, TurnedInNot } from "@mui/icons-material"

export const SideBar = ({ drawerWidth = 500 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <AccountCircle />
                    <Typography variant='h6' noWrap component='div' sx={{ xs: 1 }}>
                        Juan Emanuel Ramirez
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Usuarios','Visualizar Configuraciones', 'Generar Backup'].map(text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Book/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText  primary={ text }/>
                                        <ListItemText  secondary={ 'Este modulo estaran disponible pronto...' }/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
