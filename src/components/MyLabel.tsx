import './MyLabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface IProps{
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
     * To Capitalize the letters
     */
    fontColor?: string;

}

export const MyLabel = ( {label = 'No Label', size='normal', color= 'primary', allCaps = false, fontColor} : IProps ) => {
    
    return (
        <span 
            className={`label ${ size } text-${color}` } 
            style={{color: fontColor}}
        >

            { (allCaps) ? label.toUpperCase() : label }

        </span>
    )
}
