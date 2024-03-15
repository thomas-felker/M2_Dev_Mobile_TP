import { ReactNode } from "react";
import { TextInput, TextInputProps } from "react-native-paper";

export function TextInputTemplate(props: TextInputProps) : ReactNode {
    return (
        <TextInput {...props}>
        </TextInput>
    );
}