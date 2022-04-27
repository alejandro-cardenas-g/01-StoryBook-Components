/// <reference types="react" />
import './MyLabel.css';
export interface IProps {
    /**
     * The text that will be displayed in the label
     */
    label: string;
    /**
     * The size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color of the label
     */
    allCaps?: boolean;
    /**
     * To Capitalize the letters
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * To Change the color. This overrides the color property
     */
    fontColor?: string;
    /**
     * To Change the background color. This overrides the color property
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: IProps) => JSX.Element;
