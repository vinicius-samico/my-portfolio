import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"



const NavBar = () => {

    const StyledTooBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))


    return (
        <>
            <AppBar position="absolute">
                <StyledTooBar>
                    <MenuItem> About </MenuItem>
                    <MenuItem> Skills </MenuItem>
                    <MenuItem> Projects </MenuItem>
                </StyledTooBar>
            </AppBar>
        </>
    )
}

export default NavBar
