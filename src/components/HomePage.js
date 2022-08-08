import {GreetingBlock} from "./styledComponents/GreetinBlock";
import crackers from "../assets/fireworks.png";

export const HomePage = ({userEmail}) => {
    return (
        <GreetingBlock src={crackers}>
            <h2> Hello , {userEmail}!</h2>
        </GreetingBlock>)
}