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
     * To Change the color. This overrides the color property
     */
    fontColor?: string;
    /**
     * To Change the background color. This overrides the color property
     */
    backgroundColor?: string;

}

export const MyLabel = ( {label = 'No Label', size='normal', color= 'primary', allCaps = false, fontColor, backgroundColor='transparent'} : IProps ) => {
    
    return (
        <span 
            className={`label ${ size } text-${color}` } 
            style={{
                color: fontColor,
                backgroundColor: backgroundColor
            }}
        >

            { (allCaps) ? label.toUpperCase() : label }

        </span>
    )
}

export default MyLabel;