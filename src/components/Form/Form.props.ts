import React from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    type: 'search' | 'login';
}