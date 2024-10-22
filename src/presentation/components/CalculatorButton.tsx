/* eslint-disable react-native/no-inline-styles */
import { styles, colors } from '../../config/theme/app-theme';
import { Pressable, Text } from 'react-native';
import React from 'react';

interface Props {
    label: string;
    color?: string;
    dobleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({ label,
    color = colors.darkGray,
    dobleSize = false,
    blackText = false,
    onPress,
}: Props) => {
    return (
        <Pressable
        onPress={ () => onPress() }
        style={({ pressed }) => ({
            ...styles.button,
            opacity: (pressed) ? 0.8 : 1,
            backgroundColor: color,
            width: (dobleSize) ? 180 : 80,
        })}>
            <Text style={{
                ...styles.buttonText,
                color: (blackText) ? 'black' : 'white',
            }}>{label}</Text>
        </Pressable>
    );
};
