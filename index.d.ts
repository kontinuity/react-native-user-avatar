// tslint:disable
declare module "react-native-user-avatar" {
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
        component?: JSX.Element;
    }

    class UserAvatar extends Component<IProps, {}> {

    }

    export default UserAvatar;
}