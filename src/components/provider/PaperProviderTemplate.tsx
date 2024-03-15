import { MD3LightTheme, MD3Theme, PaperProvider } from "react-native-paper";
import { Props as ProviderProps } from 'react-native-paper/src/core/PaperProvider';
import { Theme } from '@react-navigation/native';
import { ReactNode } from "react";

export const theme: MD3Theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#3C3744',
        onPrimary: '#E7E4F1',
        primaryContainer: '#3C3744',
        onPrimaryContainer:'#E7E4F1',
        background: '#E7E4F1',
        onBackground: '#3C3744',
        surface: '#E7E4F1',
        onSurface: '#3C3744',
        surfaceVariant: '#FBF7DA',
        onSurfaceVariant: '#3C3744',
        secondary: '#EAD94C',
        secondaryContainer:'#EAD94C',
    }
}
    export const navigationTheme : Theme = {
        dark: theme.dark,
        colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.outline,
            text: theme.colors.surfaceVariant,
            border: theme.colors.outlineVariant,
            notification: theme.colors.secondary,
          },
    }

    export function PaperProviderTemplate(props: Readonly<ProviderProps>) : ReactNode {
        return (
            <PaperProvider theme={{...theme}} {...props}/>
        );
    }