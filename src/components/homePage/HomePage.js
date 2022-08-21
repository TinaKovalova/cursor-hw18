import {GreetingBlock} from "../styledComponents/greetingBlock/GreetinBlock";
import crackers from "../../assets/fireworks.png";

export const HomePage = ({userName}) => {

    return (
        <GreetingBlock src={crackers}>
            <h2> Hello , {userName}!</h2>
        </GreetingBlock>)
}