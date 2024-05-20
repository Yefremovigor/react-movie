import React from 'react';

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    type?: 'regular' | 'large';
}