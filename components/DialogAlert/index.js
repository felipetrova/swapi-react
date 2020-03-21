import * as Style from "./style";

export default ({ message }) => {
    return (
        <Style.Dialog>
            <Style.Container>
                <Style.SvgChecker />
                <Style.Message>{message}</Style.Message>
            </Style.Container>
        </Style.Dialog>
    );
};
