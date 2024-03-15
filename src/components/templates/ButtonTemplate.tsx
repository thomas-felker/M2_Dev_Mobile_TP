import { ReactNode } from "react";
import { Button, ButtonProps } from "react-native-paper";

export function ButtonTemplate(props : Readonly<ButtonProps>) : ReactNode {
    return (
        <Button 
        {...props}
        mode={props.mode ?? "contained"}
        >

        </Button>
    )
}