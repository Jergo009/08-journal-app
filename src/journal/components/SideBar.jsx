
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { AccountCircle, Book, TurnedInNot } from "@mui/icons-material"

export const SideBar = ({ drawerWidth = 240 }) => {
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
                    <Typography variant='h6' noWrap component='div' sx={{ ml: 1 }}>
                        Juan Ramirez
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Comunicación y Lenguaje L1', 'Matemáticas', 'Medio Social y Natural', 'Tecnológia'].map(text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Book/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText  primary={ text }/>
                                        <ListItemText  secondary={ 'Qui aute in reprehenderit anim ' }/>
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
