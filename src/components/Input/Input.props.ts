import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    label?: {
        text?: string;
        hidden?: boolean;
    };
    placeholder?: string;
    icon?: string;
    name?: string;
}