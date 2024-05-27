import { styled } from "@mui/material"
import { ReactNode } from "react"

interface styledButtonProps {
    children: ReactNode
}



const StyledButton: React.FC<styledButtonProps> = ({children}) => {
  

    const StyledButton= styled("button")(({theme}) => ({
       backgroundColor:"transparent",
       border: `1px solid ${theme.palette.secondary.contrastText}`,
       borderRadius:"3px",
       padding: "5px 15 px",
       width: "100%",
       color: theme.palette.primary.main,
       display: "inline-flex",
       alignItems: "center",
       justifyContent: "center",
       gap: "10px",
       '&:hover': {
            backgroundColor: theme.palette.primary.light
       }

    }))



    return (
      <>
        <StyledButton>{children}</StyledButton>
      </>
    )
  }
  
  export default StyledButton