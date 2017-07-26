// tslint:disable
import {Component} from "react";
import {ViewStyle} from "react-native";

interface IProps {
    src?: string; // image uri
    name?: string;
    color?: string;
    textColor?: string;
    colors?: string[];
    size?: number;
    style?: ViewStyle;
}

export class UserAvatar extends Component<IProps, {}> {

}
